import React from "react";
import styled from "styled-components";

function SideBarList({ sideBarData }) {
  return (
    <SideBarDataContainer>
      <SideBarHeader>Create /리스트[n]</SideBarHeader>
      <SideBarUl>
        <strong>슬라이드 제목</strong>
        <SideBarLi>
          <InputLabel>
            변경점 <CheckInput type="checkbox" />
          </InputLabel>
        </SideBarLi>
        <SideBarLi>
          <InputLabel>
            변경점 <CheckInput type="checkbox" />
          </InputLabel>
        </SideBarLi>
      </SideBarUl>
    </SideBarDataContainer>
  );
}

const SideBarDataContainer = styled.div`
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

const SideBarUl = styled.ul`
  font-size: 0.9rem;
`;

const SideBarLi = styled.li`
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
