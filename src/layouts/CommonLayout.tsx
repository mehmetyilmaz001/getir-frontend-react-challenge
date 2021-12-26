import { FunctionComponent } from "react";
import styled from "styled-components";
import theme from "../style/Theme";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ContentContainer = styled.div`
  width: ${theme.desktop.containerSize};
  margin: 0 auto;
  padding: 38.8px 0px;
`;

const CommonLayout: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
        <ContentContainer>{children}</ContentContainer>
      <Footer />
    </>
  );
};

export default CommonLayout;
