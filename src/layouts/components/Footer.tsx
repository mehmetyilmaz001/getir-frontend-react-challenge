import React, { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../../style/Theme";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.palette.primary.main};
  ${theme.typography.footer};
`;

const Footer: FunctionComponent = () => {
  return (
    <StyledFooter>
      ©{new Date().getFullYear()} Market <span style={{margin: '0 16px', fontSize: '24px', fontWeight: "bold"}}>·</span> Privacy Policy
    </StyledFooter>
  );
};

export default Footer;
