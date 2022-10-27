import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import axios from "axios";

import SlideList from "./SlideList";
import LoadingSpinner from "./LoadingSpinner";
import PPT_DATA_TYPES from "../config/constants/pptDataTypes";
import SEQUENCES from "../config/constants/sequences";
import { changeSequence } from "../features/sequenceReducer";
import { registerData } from "../features/pptDataReducer";

function Download() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const getPptData = async () => {
      const response = await axios.get("/api/:ppt_id/download", {
        params: { mergedPptId: id },
      });

      dispatch(
        registerData({
          type: PPT_DATA_TYPES.MERGED_PPT_DATA,
          pptId: id,
          data: response.data,
        }),
      );
      dispatch(changeSequence(SEQUENCES.DOWNLOAD));
      setIsFetching(true);
    };

    getPptData();
  }, [id, dispatch]);

  if (!isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <DownloadContainer>
      <SlideList fileType={PPT_DATA_TYPES.MERGED_PPT_DATA} />
    </DownloadContainer>
  );
}

const DownloadContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Download;
