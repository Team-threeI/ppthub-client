import React, { useEffect, useState } from "react";
import styled from "styled-components";

function SideBarItems({ categorizedData, type }) {
  const [modifiedTitles, setModifiedTitles] = useState([]);
  const [finialTitles, setFinialTitles] = useState([]);

  useEffect(() => {
    setModifiedTitles(Object.keys(categorizedData.items));
  }, [categorizedData]);

  useEffect(() => {
    if (type === "added") {
      setFinialTitles(
        modifiedTitles.filter(
          (key) =>
            categorizedData.items[key].diff === "added" ||
            categorizedData.items[key].diff === "modified",
        ),
      );
    } else {
      setFinialTitles(
        modifiedTitles.filter(
          (key) =>
            categorizedData.items[key].diff === "deleted" ||
            categorizedData.items[key].diff === "modified",
        ),
      );
    }
  }, [categorizedData, modifiedTitles, type]);

  return (
    <SideBarItem>
      {finialTitles.map((title) => (
        <InputLabel key={title}>
          {title}
          <CheckInput type="checkbox" />
        </InputLabel>
      ))}
    </SideBarItem>
  );
}

const SideBarItem = styled.li`
  padding-top: 0.31vh;
  list-style: none;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  padding-bottom: 0.3vh;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarItems;
