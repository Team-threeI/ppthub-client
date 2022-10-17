import React from "react";
import styled from "styled-components";
import SideBarData from "./SideBarList";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>Create</SideBarHeader>
        <SideBarData />
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        <SideBarData />
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
  color: red;
  font-family: "Lucida Sans", sans-serif;
  padding-bottom: 1vw;
`;

export default SideBar;
