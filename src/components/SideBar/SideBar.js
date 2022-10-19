import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SideBarSlideList from "./SideBarSlideList";

import mockDiffData from "../../mock"; // Todo: Mock Data에서 삭제, 현재 로직은 Mock Data로직 변경 필요.

function SideBar() {
  const [mockDatas, setMockDatas] = useState({});
  const [diffDatas, setDiffDatas] = useState([]);
  const [addedDatas, setAddedDatas] = useState([]);
  const [modifiedDatas, setModifiedDatas] = useState([]);
  const [deleteDatas, setDeleteDatas] = useState([]);

  useEffect(() => {
    if (!mockDiffData) return;
    setMockDatas(mockDiffData); // Todo Data 받는 양식 mockdata가 아닌 merge 데이터 받아오는 작업
  }, []);

  useEffect(() => {
    setDiffDatas(Object.keys(mockDatas));
  }, [mockDatas]);
  console.log(diffDatas);
  useEffect(() => {
    setAddedDatas(diffDatas.filter((key) => mockDatas[key].diff === "added"));
    setModifiedDatas(
      diffDatas.filter((key) => mockDatas[key].diff === "modified"),
    );
    setDeleteDatas(
      diffDatas.filter((key) => mockDatas[key].diff === "deleted"),
    );
  }, [mockDatas, diffDatas]);

  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>ADD</SideBarHeader>
        {addedDatas.map((key) => (
          <SideBarSlideList
            categorizedData={mockDatas[key]}
            title={key}
            key={key}
          />
        ))}
        {modifiedDatas.map((key) => (
          <SideBarSlideList
            categorizedData={mockDatas[key]}
            title={key}
            key={key}
            type="added"
          />
        ))}
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        {deleteDatas.map((key) => (
          <SideBarSlideList
            categorizedData={mockDiffData[key]}
            title={key}
            key={key}
          />
        ))}
        {modifiedDatas.map((key) => (
          <SideBarSlideList
            categorizedData={mockDatas[key]}
            title={key}
            key={key}
            type="deleted"
          />
        ))}
      </SideBarSection>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
`;

const SideBarSection = styled.section`
  width: 100%;
  height: 100%;
  padding-left: 1vw;
  overflow: auto;
`;

const SideBarHeader = styled.header`
  padding-bottom: 1vh;
  color: red;
  font-family: "Lucida Sans", sans-serif;
`;

export default SideBar;
