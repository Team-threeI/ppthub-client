import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/shared/layout/Header";
import Footer from "../components/shared/layout/Footer";
import Main from "../components/Main";
import Preview from "../components/Preview";
import NotFoundPage from "../components/shared/Error/NotFoundPage";

function App() {
  const [pageType, setPageType] = useState("");

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:ppt_id/preview" element={<Preview />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer buttonType={pageType} />
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
