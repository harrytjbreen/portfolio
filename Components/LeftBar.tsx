import {useContext} from "react";
import MobileContext from "../models/MobileContext";
import Links from '../models/Links';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  background-color: black;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 5vw;
`;

const Link = styled.a`
  color: white;  
  margin-bottom: 2rem;
  transform: scale(1.5);
  transition: transform 0.5s;
  &:hover {
    transform: translateY(-0.5rem) scale(1.8);
  }
`;

const Bar = styled.div`
  height: 7.5rem;
  width: 2px;
  color: white;
  background-color: white;
`;

const LeftBar = () => {
    const isMobile = useContext(MobileContext);
    return !isMobile ? (
        <Container>
            {Links.map(link => <Link href={link.link}><link.svg/></Link>)}
            <Bar/>
        </Container>
    ) : <></>
};

export default LeftBar;