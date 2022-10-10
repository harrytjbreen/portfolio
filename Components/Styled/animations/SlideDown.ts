import { keyframes } from "styled-components";

const SlideDown = keyframes`
  0% {
    transform: translateY(-5rem);
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;

export default SlideDown;
