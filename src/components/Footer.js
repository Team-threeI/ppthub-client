import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import SEQUENCES from "../config/constants/sequences";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import { registerData } from "../features/pptDataReducer";
import {
  changeSequence,
  changePreviousSequence,
} from "../features/sequenceReducer";
import { initializeDiffData } from "../features/diffDataReducer";
import useToast from "../hooks/useToast";
import TOAST_MESSAGES from "../config/constants/toastMessages";

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

  const handleDownloadPage = async () => {
    const response = await axios.get("/api/:ppt_id/download", {
      params: { mergedPptId },
    });

    dispatch(
      registerData({
        type: PPT_DATA_TYPES.MERGED_PPT_DATA,
        pptId: mergedPptId,
        data: response.data,
      }),
    );
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
  width: 100%;
  height: 10%;
  text-align: center;
  background-color: gray;
`;

const FooterButton = styled.button`
  width: 10vw;
  height: 5vh;
  margin: 1vmin 1vmin;
  border: none;
  border-radius: 1vmin;
  background-color: #4e6af5;
  color: #ffffff;
  font-weight: 700;
`;

export default Footer;
