import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import notFoundImageSrc from "../../../images/404.png";

function NotFoundPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <NotFoundContainer>
      <NotFoundImage src={notFoundImageSrc} alt="페이지를 찾을수 없습니다." />
      <StrongText>찾으시려는 페이지가 현재 존재하지 않습니다.</StrongText>
      <p>주소를 다시한번 확인해 주세요</p>
      <MainButton type="button" onClick={() => handleClick()}>
        Home
      </MainButton>
    </NotFoundContainer>
  );
}

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const NotFoundImage = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
`;

const StrongText = styled.strong`
  margin-bottom: 1.2rem;
`;

const MainButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: auto;
  border-radius: 0.7rem;
  font-size: 1.5rem;
`;

export default NotFoundPage;
