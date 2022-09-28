import Links from "../model/Links";
import styled from "styled-components";
import VerticalBar from "./Styled/VerticalBar";

const NavContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 4rem;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100vh;
  background-color: black;
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

const LeftBar = () => {
  return (
    <NavContainer>
      {Links.map((link) => (
        <Link href={link.link}>
          <link.svg />
        </Link>
      ))}
      <VerticalBar length={7.5} />
    </NavContainer>
  );
};

export default LeftBar;
