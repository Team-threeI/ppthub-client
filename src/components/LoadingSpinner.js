import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5rem 0 -1.3rem;
  }
  40% {
    box-shadow: 0 2.5rem 0 0;
  }
`;

const LoadingSpinner = styled.div`
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  margin: 6rem auto;
  border-radius: 50%;
  color: #f97b7b;
  font-size: 0.5rem;
  text-indent: -9999em;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation: ${rotation} 1.8s infinite ease-in-out;
  animation: ${rotation} 1.8s infinite ease-in-out;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;

  &:before,
  &:after {
    position: absolute;
    top: 0;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation: ${rotation} 1.8s infinite ease-in-out;
    animation: ${rotation} 1.8s infinite ease-in-out;
    content: "";
  }

  &:before {
    left: -1.8rem;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  &:after {
    left: 1.8rem;
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
  }
`;

export default LoadingSpinner;
