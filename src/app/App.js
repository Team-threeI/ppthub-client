import React from "react";
import { Route, Routes } from "react-router-dom";

import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/Main";
import Preview from "../components/Preview";
import NotFoundPage from "../components/Error/NotFoundPage";
import ErrorPage from "../components/Error/ErrorPage";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:ppt_id/preview" element={<Preview />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
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
