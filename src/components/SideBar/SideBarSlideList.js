import React from "react";
import styled from "styled-components";
import SideBarItems from "./SideBarItems";

function SideBarSlideList({ categorizedData, title, type }) {
  return (
    <SideBarDataContainer>
      {!categorizedData.items ? (
        <SideBarLittleHeader>
          <InputLabel>
            {title}
            <CheckInput type="checkbox" />
          </InputLabel>
        </SideBarLittleHeader>
      ) : (
        <>
          <SideBarLittleHeader>{title}</SideBarLittleHeader>
          <SideBarItemList>
            <SideBarItems categorizedData={categorizedData} type={type} />
          </SideBarItemList>
        </>
      )}
    </SideBarDataContainer>
  );
}

const SideBarDataContainer = styled.div``;

const SideBarLittleHeader = styled.header`
  font-size: 0.9rem;
  font-weight: 700;
`;

const SideBarItemList = styled.ul``;

const InputLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarSlideList;
