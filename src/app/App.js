import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import styled from "styled-components";

import SEQUENCES from "../config/constants/sequences";
import CONFIG from "../config/constants/config";
import GlobalStyle from "./GlobalStyle";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import NotFoundPage from "../components/NotFoundPage";
import ErrorPage from "../components/ErrorPage";
import RightSelectionBar from "../components/RightSelectionBar";
import Download from "../components/Download";
import useModal from "../hooks/useModal";

function App() {
  const sequence = useSelector((state) => state.sequence);
  const [headerScroll, setHeaderScroll] = useState(50);
  const [ExplainModal, toggleModal] = useModal();

  return (
    <AppContainer>
      <GlobalStyle />
      <MainSection>
        <Header scroll={headerScroll} toggleModal={toggleModal} />
        <ExplainModal>
          <VideoIframe
            src={CONFIG.EXPLAIN_YOUTUBE_URL}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </ExplainModal>
        <Routes>
          <Route path="/" element={<Main onListScroll={setHeaderScroll} />} />
          <Route
            path="/:id/download"
            element={<Download onListScroll={setHeaderScroll} />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </MainSection>
      {sequence === SEQUENCES.COMPARISION && <RightSelectionBar />}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const MainSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const VideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export default App;
