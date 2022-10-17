import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/shared/layout/Header";
import Footer from "../components/shared/layout/Footer";
import Main from "../components/Main";
import Preview from "../components/Preview";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Preview />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

export default App;
