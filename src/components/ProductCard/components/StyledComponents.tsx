import styled from "styled-components";
import theme from "../../../style/Theme";
import FormattedLabel from "../../common/FormattedLabel/FormattedLabel";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: ${theme.spacing(2)};
  cursor: pointer;
`;

export const Picture = styled.img`
  height: 192px;
  width: 100%;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid ${theme.palette.border.main};
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const Price = styled(FormattedLabel)`
  color: ${theme.palette.primary.main};
  font-size: 14px;
  line-height: 20px;
`;

export const Title = styled.h4`
  font-size: 14px;
  color: ${theme.palette.text.primary};
  font-weight: 600;
  margin: 0;
`;
