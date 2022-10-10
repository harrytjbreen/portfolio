import { keyframes } from "styled-components";

const SlideAcross = keyframes`
  0% {
    transform: translateX(0);
  }
  
  40% {
    transform: translateX(0);
  }
  
  50% {
    transform: translateX(-100vw);
  }
  
  50.1% {
    transform: translateX(100vw);
  }
  
  60% {
    transform: translateX(0);
  }
  
  100% {
    transform: translateX(0);
  }
`;

export default SlideAcross;
