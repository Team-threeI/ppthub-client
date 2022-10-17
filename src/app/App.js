import React, { useState } from "react";
import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/shared/layout/Header";
import Footer from "../components/shared/layout/Footer";
import Main from "../components/Main";
import Preview from "../components/Preview";

function App() {
  const [buttonType, setButtonType] = useState();

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer buttonType={buttonType} />
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
