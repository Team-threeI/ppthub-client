import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import SEQUENCES from "../config/constants/sequences";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import TOAST_MESSAGES from "../config/constants/toastMessages";
import THEME_COLORS from "../config/constants/themeColors";
import { registerData } from "../features/pptDataReducer";
import { initializeDiffData } from "../features/diffDataReducer";
import {
  changeSequence,
  changePreviousSequence,
} from "../features/sequenceReducer";
import useToast from "../hooks/useToast";

function Footer() {
  const dispatch = useDispatch();
  const sequence = useSelector((state) => state.sequence);
  const mergeData = useSelector((state) => state.diffData);
  const slideOrderList = useSelector((state) => state.slideOrderList);
  const navigate = useNavigate();
  const [CustomToast, handleSendToast] = useToast(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const { originalPptId, comparablePptId, mergedPptId, downloadUrl } =
    useSelector(({ pptData }) => ({
      originalPptId: pptData[PPT_DATA_TYPES.ORIGINAL_PPT_DATA]?.pptId,
      comparablePptId: pptData[PPT_DATA_TYPES.COMPARABLE_PPT_DATA]?.pptId,
      mergedPptId: pptData[PPT_DATA_TYPES.MERGED_PPT_DATA]?.pptId,
      downloadUrl: pptData[PPT_DATA_TYPES.MERGED_PPT_DATA]?.data?.downloadUrl,
    }));

  const handlePreviousClick = () => {
    dispatch(changePreviousSequence());
  };
  const handleCompare = async () => {
    const response = await axios.post("/api/ppts/compare", {
      originalPptId,
      comparablePptId,
    });

    dispatch(changeSequence(SEQUENCES.COMPARISION));
    dispatch(initializeDiffData(response.data));
  };
  const handleMerge = async () => {
    const response = await axios.post("/api/ppts/merge", {
      originalPptId,
      comparablePptId,
      mergeData,
      slideOrderList,
    });

    dispatch(
      registerData({
        type: PPT_DATA_TYPES.MERGED_PPT_DATA,
        pptId: response.data,
      }),
    );
  };

  const handleDownloadPage = () => {
    dispatch(changeSequence(SEQUENCES.DOWNLOAD));
    navigate(`/${mergedPptId}/download`);
  };

  const handleFileDownload = async () => {
    await navigator.clipboard.writeText(
      `https://ppthub.online/${mergedPptId}/download`,
    );
    handleSendToast();
    setNotificationMessage(TOAST_MESSAGES.COPY_CLIPBOARD_MESSAGE);
    window.location.href = downloadUrl;
  };

  switch (sequence) {
    case SEQUENCES.ADDED_ORIGINAL_FILE:
      return (
        <FooterContainer>
          <FooterButton onClick={handlePreviousClick}>되돌리기</FooterButton>
        </FooterContainer>
      );
    case SEQUENCES.ADDED_COMPARABLE_FILE:
      return (
        <FooterContainer>
          <FooterButton onClick={handlePreviousClick}>되돌리기</FooterButton>
          <FooterButton onClick={handleCompare}>비교하기</FooterButton>
        </FooterContainer>
      );
    case SEQUENCES.COMPARISION:
      return (
        <FooterContainer>
          {mergedPptId ? (
            <FooterButton onClick={handleDownloadPage}>
              다운로드 페이지로
            </FooterButton>
          ) : (
            <FooterButton onClick={handleMerge}>병합하기</FooterButton>
          )}
        </FooterContainer>
      );
    case SEQUENCES.DOWNLOAD:
      return (
        <FooterContainer>
          <FooterButton>되돌리기</FooterButton>
          <FooterButton onClick={handleFileDownload}>다운로드</FooterButton>
          <CustomToast message={notificationMessage} />
        </FooterContainer>
      );
    default:
      return <FooterContainer />;
  }
}

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 13vh;
  background: ${THEME_COLORS.SECTION_BACKGROUND};
  box-shadow: #30343f 10px 10px 20px;
  z-index: 0;
`;

const FooterButton = styled.button`
  padding: 0.8rem 2rem;
  margin-left: 3rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem;
  background-color: ${THEME_COLORS.MAIN_COLOR};
  color: rgba(0, 0, 0, 0.85);
  box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
  font-weight: 700;
  font-size: 1.1rem;
  transition: all 0.25s;

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    border-color: rgba(0, 0, 0, 0.15);
    background-color: #f0f0f1;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

  &:first-child {
    margin-left: 0;
  }
`;

export default Footer;
