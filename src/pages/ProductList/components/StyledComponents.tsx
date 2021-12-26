import styled from "styled-components";
import { mq } from "../../../style/Mixins";
import theme from "../../../style/Theme";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: ${theme.spacing(4)};
`;

export const FilterColumn = styled.div`
  flex: 1;
  > div {
    margin-bottom: ${theme.spacing(6)};
  }
`;

export const ListingColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing(4)};

  ${mq("mobile")} {
    padding: 10px;
  }
`;

export const BasketColumn = styled.div`
  flex: 1;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: ${theme.spacing(5)};
  padding: ${theme.spacing(5)};
  background: #ffffff;
  box-shadow: 0px 4px 24px rgba(93, 62, 188, 0.04);
  border-radius: 2px;

  ${mq("mobile")} {
    grid-template-columns: 1fr 1fr;
  }

  ${mq("tablet")} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const Title = styled.h4`
  color: ${theme.palette.text.tertiary};
  font-size: 20px;
  margin-top: 0;
  margin-bottom: 0;
`;

export const PaginationContainer = styled.div`
  padding: 33px;

  ${mq("mobile")} {
    padding: 5px;
  }
`;
