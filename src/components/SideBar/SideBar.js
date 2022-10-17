import React from "react";
import styled from "styled-components";
import SideBarSlideList from "./SideBarSlideList";

function SideBar() {
  return (
    <SideBarContainer>
      <SideBarSection>
        <SideBarHeader>Create</SideBarHeader>
        <SideBarSlideList />
      </SideBarSection>
      <SideBarSection>
        <SideBarHeader>Undo</SideBarHeader>
        <SideBarSlideList />
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
