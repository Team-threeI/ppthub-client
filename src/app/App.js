import React from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

import GlobalStyle from "./GlobalStyle";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Main from "../components/Main";
import Preview from "../components/Preview";
import NotFoundPage from "../components/Error/NotFoundPage";
import ErrorPage from "../components/Error/ErrorPage";
import PAGE_SEQUENCES from "../config/constants/pageSequences";

function App() {
  const pageSequence = useSelector((state) => state.pageSequence);

  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      {pageSequence === PAGE_SEQUENCES.ERROR ? (
        <ErrorPage />
      ) : (
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:ppt_id/preview" element={<Preview />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
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
