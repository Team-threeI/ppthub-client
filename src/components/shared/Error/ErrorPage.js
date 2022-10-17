import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import imgError from "../../../../public/404.png";

function ErrorPage({ errorMessage }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <ErrorContainer>
      <ErrorImg src={imgError} alt="error" />
      <StyledText>현재 {errorMessage} 문제로 인하여</StyledText>
      <p>일시적으로 접속이 되지 않습니다.</p>
      <p>잠시후 다시 이용 부탁드리겠습니다.</p>
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

const ErrorImg = styled.img`
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

export default ErrorPage;
