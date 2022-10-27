import React, { useEffect } from "react";

import styled from "styled-components";

import THEME_COLORS from "../config/constants/themeColors";
import ToastPortal from "../ToastPortal";

function ToastNotification({ message, sendToast, setSendToast }) {
  useEffect(() => {
    const removeToast = setTimeout(() => {
      setSendToast(false);
    }, 2000);

    return () => clearTimeout(removeToast);
  }, [setSendToast]);

  if (!sendToast) {
    return null;
  }

  return (
    <ToastPortal>
      <TostContainer>
        <TostMessage>{message}</TostMessage>
      </TostContainer>
    </ToastPortal>
  );
}

const TostContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 2%;
  left: 1%;
  width: 40vw;
  height: 5vh;
  max-width: 18rem;
  min-height: 3rem;
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${THEME_COLORS.MAIN_COLOR};
  animation-name: slideIn, slideOut;
  animation-delay: 0s, 1.5s;
  animation-duration: 1s, 1s;
  animation-iteration-count: 1;

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-300%);
    }
  }
`;

const TostMessage = styled.p`
  letter-spacing: 0.1rem;
  text-align: center;
  font-weight: 700;
`;

export default ToastNotification;
