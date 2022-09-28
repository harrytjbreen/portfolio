import { keyframes } from "styled-components";

const fadeIn = keyframes`
    from {opacity: 0; transform: translate3d(0, -50%, 0);}
    to {opacity: 1; transform: translate3d(0, 0, 0);}
`;

export default fadeIn;
