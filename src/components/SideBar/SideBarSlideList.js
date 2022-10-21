import React, { useState } from "react";
import styled from "styled-components";
import SideBarItemList from "./SideBarItemList";

function SideBarSlideList({ slideData, type }) {
  const [isChecked, setIsChecked] = useState(false);
  const slidePage = Object.keys(slideData);

  const handleChange = () => {
    return isChecked ? setIsChecked(false) : setIsChecked(true);
  };

  Object.values(slideData)[0].isChecked = isChecked;

  return (
    <SideBarSlideListContainer>
      {Object.values(slideData)[0].diff === type ? (
        <SideBarListHeader>
          <SideBarSlideListLabel>
            {slidePage}
            <CheckInput type="checkbox" onChange={() => handleChange()} />
          </SideBarSlideListLabel>
        </SideBarListHeader>
      ) : (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
          {Object.keys(Object.values(slideData)[0].items).length !== 0 ? (
            <>
              <SideBarListHeader>{slidePage}</SideBarListHeader>
              <SideBarItem>
                <SideBarItemList slideData={slideData} />
              </SideBarItem>
            </>
          ) : null}
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
