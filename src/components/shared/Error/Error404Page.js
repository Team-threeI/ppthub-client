import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import img404 from "../../../../public/404.png";

function Error404Page() {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <ErrorContainer>
      <ErrorImg404 src={img404} alt="404" />
      <StyledText>찾으시려는 페이지가 현재 존재하지 않습니다.</StyledText>
      <p>주소를 다시한번 확인해 주세요</p>
      <HomeButton type="button" onClick={(event) => handleClick(event)}>
        Home
      </HomeButton>
    </ErrorContainer>
  );
}

const ErrorContainer = styled.div`
  justify-content: center;
  text-align: center;
`;

const ErrorImg404 = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledText = styled.p`
  font-weight: bold;
`;

const HomeButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin-top: 8rem;
  border-radius: 0.7rem;
  font-size: large;
`;

export default Error404Page;
