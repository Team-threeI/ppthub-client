import React from "react";
import styled from "styled-components";
import axios from "axios";
import pptxParser from "../../utils/pptxParser";

function FileAttachment() {
  const uploadFile = async (event) => {
    const viewData = await pptxParser(event.target.files[0]);
  };

  return (
    <FileInputLabel>
      <FileAddButton />
      <FileInput
        type="file"
        accept=".pptx"
        onChange={(event) => uploadFile(event)}
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
