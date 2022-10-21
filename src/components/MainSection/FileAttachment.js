import React from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import styled from "styled-components";

import pptxParser from "../../utils/pptxParser";
import { registerData } from "../../features/pptDataReducer";
import { changeNextSequence } from "../../features/sequenceReducer";

function FileAttachment({ fileType }) {
  const dispatch = useDispatch();

  const handleFileChanged = async (event) => {
    const pptData = await pptxParser(event.target.files[0]);
    const response = await axios.post("/api/ppt/save", { pptData });

    dispatch(registerData({ type: fileType, data: pptData }));
    dispatch(changeNextSequence());
  };

  return (
    <FileInputLabel>
      <FileAddButton />
      <FileInput
        type="file"
        accept=".pptx"
        onChange={(event) => handleFileChanged(event)}
      />
    </FileInputLabel>
  );
}

const FileAddButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: #000;
`;

const FileInputLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:hover > * {
    background-color: red;
  }
`;

const FileInput = styled.input`
  display: none;
`;

export default FileAttachment;
