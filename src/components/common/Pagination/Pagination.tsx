import { FunctionComponent } from "react";
import { ReactComponent as LeftArrow } from "../assets/arrow-left.svg";
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";
import theme, { colors } from "../../../style/Theme";
import styled from "styled-components";
import ReactPaginate from "react-paginate";

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
        margin-right: 50px;

        > a {
            cursor: ${({isAtTheFirstPage}) => isAtTheFirstPage ? 'not-allowed': 'pointer'};
        }
    }
    &.next {
        margin-left: 50px;

        > a {
            cursor: ${({isAtTheLastPage}) => isAtTheLastPage ? 'not-allowed': 'pointer'};
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
  activePage: number;
  totalPages: number;
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
    :user-select: none;
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
