import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { mq } from "../../../../style/Mixins";
import theme, { colors } from "../../../../style/Theme";

export const StyledPagination = styled(ReactPaginate)<{
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
        cursor: ${({ isAtTheFirstPage }) =>
          isAtTheFirstPage ? "not-allowed" : "pointer"};
      }
    }
    &.next {
      margin-left: 40px;

      > a {
        cursor: ${({ isAtTheLastPage }) =>
          isAtTheLastPage ? "not-allowed" : "pointer"};
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

export const StyledButton = styled.span<{
    color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-weight: bold;
  font-size: 14px;
  color: ${({ color }) => color};
  user-select: none;

  ${mq("mobile")} {
    font-size: 11px;
  }
`;
