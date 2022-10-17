import React from "react";
import styled from "styled-components";
import SideBarData from "./SideBarList";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarData />
      <SideBarData />
    </SideBarContainer>
  );
}

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 100%;
`;

const SideBarLittleTitle = styled.p`
  font-family: "Lucida Sans", sans-serif;
`;

const SideBarCreateList = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 13%;
  width: 100%;
  height: 36%;
  overflow: auto;
`;

const SideBarUndoList = styled(SideBarCreateList)`
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
