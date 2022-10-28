import React from "react";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";

import errorImageSrc from "../images/error.png";

function ErrorPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <ErrorPageContainer>
      <ErrorPageImage src={errorImageSrc} alt="에러가 발생하였습니다." />
      <p>
        <strong>현재 알 수 없는 문제로 인하여</strong>
        <br /> 일시적으로 접속이 되지 않습니다.
        <br /> 잠시 후 다시 이용 부탁드리겠습니다.
      </p>
      <MainButton type="button" onClick={() => handleClick()}>
        Home
      </MainButton>
    </ErrorPageContainer>
  );
}

const ErrorPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const ErrorPageImage = styled.img`
  width: 50%;
  height: 50%;
  margin: auto;
`;

const MainButton = styled.button`
  width: 10rem;
  height: 3rem;
  margin: auto;
  border-radius: 0.7rem;
  font-size: 1.5rem;
`;

export default ErrorPage;
