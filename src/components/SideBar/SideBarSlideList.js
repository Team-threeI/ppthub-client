import React from "react";
import styled from "styled-components";

function SideBarSlideList({ sideBarData }) {
  return (
    <SideBarDataContainer>
      <SideBarLittleHeader>슬라이드 제목 1</SideBarLittleHeader>
      <SideBarItemList>
        <SideBarItem>
          <InputLabel>
            변경점 <CheckInput type="checkbox" />
          </InputLabel>
        </SideBarItem>
        <SideBarItem>
          <InputLabel>
            변경점 <CheckInput type="checkbox" />
          </InputLabel>
        </SideBarItem>
      </SideBarItemList>
    </SideBarDataContainer>
  );
}

const SideBarDataContainer = styled.div``;

const SideBarLittleHeader = styled.header`
  font-size: 0.9rem;
  font-weight: 700;
`;

const SideBarItemList = styled.ul``;

const SideBarItem = styled.li`
  padding-top: 0.3vh;
  list-style: none;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vh;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarSlideList;
