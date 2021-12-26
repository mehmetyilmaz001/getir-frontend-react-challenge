import { FunctionComponent } from "react";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import theme, { colors } from "../../../style/Theme";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { mq } from "../../../style/Mixins";

const StyledPagination = styled(ReactPaginate)<{
    isAtTheFirstPage: boolean;
    isAtTheLastPage: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;

  > li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    height: 40px;
    text-align: center;
    cursor: pointer;
    border-radius: 2px;

    ${mq("mobile")} {
      font-size: 11px;
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      line-height: 100%;
      width: 100%;
      height: 100%;
      user-select: none;
    }

    &.previous {
        margin-right: 40px;

        > a {
            cursor: ${({isAtTheFirstPage}) => isAtTheFirstPage ? 'not-allowed': 'pointer'};
        }
    }
    &.next {
        margin-left: 40px;

        > a {
            cursor: ${({isAtTheLastPage}) => isAtTheLastPage ? 'not-allowed': 'pointer'};
        }
    }

    ${mq("mobile")} {
      &.previous {
        margin-right: 10px;
      }
      &.next {
        margin-left: 10px;
      }
    }

    &:hover {
      background-color: ${theme.palette.primary.hover};
    }

    &.selected {
      background-color: ${theme.palette.primary.main};
      color: ${colors.white};
    }
  }
`;

interface PaginationProps {
  /**
   * The active page number which is used to determine which page is selected
   */  
  activePage: number;

  /**
   * The total number of pages
   */
  totalPages: number;

  /**
   * The function to be called when the page is selected
   */ 
  onChange: (page: number) => void;
}

const Pagination: FunctionComponent<PaginationProps> = ({
  activePage,
  totalPages,
  onChange,
}) => {
 

const isAtTheFirstPage = activePage === 0;
const isAtTheLastPage = (activePage + 1) === totalPages;

  return (
    <StyledPagination
      aria-label="pagination"
      breakLabel="..."
      isAtTheFirstPage={isAtTheFirstPage}
      isAtTheLastPage={isAtTheLastPage}
      nextLabel={
        <NextPrevButton
          disabled={(activePage + 1) === totalPages}
          direction="right"
        />
      }
      onPageChange={(page) => onChange(page.selected)}
      pageRangeDisplayed={5}
      pageCount={totalPages}
      previousLabel={
        <NextPrevButton
          disabled={activePage === 0}
          direction="left"
        />
      }
      renderOnZeroPageCount={(props) => {
        return null;
      }}
    />
  );
};

export default Pagination;

interface INextPrevButton {
  disabled: boolean;
  direction: "left" | "right";
}

const NextPrevButton: FunctionComponent<INextPrevButton> = ({
  disabled,
  direction,
}) => {
  const color = disabled ? theme.palette.disabled : theme.palette.primary.main;

  const StyledButton = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 14px;
    color: ${color};
    user-select: none;

    ${mq("mobile")} {
      font-size: 11px;
    }
  `;

  return (
    <StyledButton>
      {direction === "left" ? (
        <>
          <LeftArrow fill={color} /> Prev
        </>
      ) : (
        <>
          {" "}
          Next <RightArrow fill={color} />
        </>
      )}
    </StyledButton>
  );
};
