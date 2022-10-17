import React from "react";
import styled from "styled-components";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarCreate>Create</SideBarCreate>
      <SideBarFirstList>
        <li>데이터</li>
      </SideBarFirstList>
      <SideBarUndo>Undo</SideBarUndo>
      <SideBarSecondList>
        <li> 데이터 </li>
      </SideBarSecondList>
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  width: 40%;
  height: 100%;
`;

const SideBarLittleTitle = styled.p`
  font-family: "Lucida Sans", sans-serif;
`;

const SideBarFirstList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 13%;
  width: 100%;
  height: 36%;
  overflow: auto;
`;

const SideBarSecondList = styled(SideBarFirstList)`
  top: 53%;
`;

const SideBarCreate = styled(SideBarLittleTitle)`
  position: fixed;
  width: 100%;
  color: red;
`;
const SideBarUndo = styled(SideBarLittleTitle)`
  position: fixed;
  top: 50%;
  width: 100%;
  background: white;
  color: blue;
`;

export default SideBar;
