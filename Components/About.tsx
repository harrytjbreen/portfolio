import React from "react";
import styled from "styled-components";
import MobileContext from "../hooks/MobileContext";
import Image from "next/image";

interface Props {
  isMobile: boolean;
}

const ImageContainer = styled.div`
  border-radius: 50%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  overflow: hidden;
`;

const AboutContainer = styled.div<Props>`
  display: grid;
  gap: 4rem;
  grid-template-columns: ${(props) =>
    props.isMobile ? "1fr" : "1fr 1.5fr 1fr"};
  align-items: center;
  text-align: center;
`;

const About = () => {
  const getAge = () => {
    const today = new Date();
    const birthDate = new Date(2002, 3, 6);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <MobileContext.Consumer>
      {(isMobile) => (
        <div id={"about"}>
          <h1>About me</h1>
          <AboutContainer isMobile={isMobile}>
            <div>
              <h3>Details</h3>
              <p>
                <div>
                  <b>Age:</b> {getAge()}
                </div>
                <div>
                  <b>Phone:</b> 07464 967418
                </div>
                <div>
                  <b>Email:</b> harrytjbreen@gmail.com
                </div>
              </p>
            </div>
            <ImageContainer>
              <Image src={require("../public/headshot.jpeg")} />
            </ImageContainer>
            <div>
              <h3>About</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam corporis deserunt dolor, doloribus dolorum ducimus ea
                eligendi enim ex fugit hic incidunt iusto labore quaerat
                quisquam similique sint velit, veniam.
              </p>
            </div>
          </AboutContainer>
        </div>
      )}
    </MobileContext.Consumer>
  );
};

export default About;
