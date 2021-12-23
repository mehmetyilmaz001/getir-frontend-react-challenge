import { FunctionComponent } from "react";
import styled from "styled-components";
import Footer from "./components/Footer";
import Header from "./components/Header";

const ContentContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 38.8px 20px;
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
