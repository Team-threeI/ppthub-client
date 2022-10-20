import React from "react";
import styled from "styled-components";
import SideBarItemList from "./SideBarItemList";

function SideBarSlideList({ slideData, type }) {
  const slidePage = Object.keys(slideData);
  return (
    <SideBarSlideListContainer>
      {Object.values(slideData)[0].diff === type ? (
        <SideBarListHeader>
          <SideBarSlideListLabel>
            {slidePage}
            <CheckInput type="checkbox" />
          </SideBarSlideListLabel>
        </SideBarListHeader>
      ) : (
        <>
          <SideBarListHeader>{slidePage}</SideBarListHeader>
          <SideBarItem>
            <SideBarItemList slideData={slideData} />
          </SideBarItem>
        </>
      )}
    </SideBarSlideListContainer>
  );
}

const SideBarSlideListContainer = styled.div``;

const SideBarListHeader = styled.header`
  font-size: 0.9rem;
  font-weight: 700;
`;

const SideBarItem = styled.ul``;

const SideBarSlideListLabel = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding-right: 3vw;
  cursor: pointer;
`;

const CheckInput = styled.input``;

export default SideBarSlideList;
