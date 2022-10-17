import React from "react";
import styled from "styled-components";

function SideBarList({ sideBarData }) {
  return (
    <SideBarDataContainer>
      <SideBarLittleHeader>
        <strong>슬라이드 제목 1</strong>
      </SideBarLittleHeader>
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

const SideBarDataContainer = styled.div`
  color: black;
`;

const SideBarLittleHeader = styled.header`
  font-size: 0.9rem;
`;

const SideBarItemList = styled.ul``;

const SideBarItem = styled.li`
  padding-top: 0.3vw;
`;

const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarList;
