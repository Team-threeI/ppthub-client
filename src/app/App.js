import React from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/shared/layout/Header";
import Footer from "../components/shared/layout/Footer";
import Main from "../components/Main";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export default App;
