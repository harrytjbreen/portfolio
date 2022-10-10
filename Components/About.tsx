import React from "react";
import Image from "next/image";
import MobileContext from "../hooks/MobileContext";
import imageLoader from "../loader";
import { AboutContainer, ImageContainer } from "./Styled/Containers";

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
              <div>
                <div>
                  <b>Age:</b> {getAge()}
                </div>
                <div>
                  <b>Phone:</b> 07464 967418
                </div>
                <div>
                  <b>Email:</b> harrytjbreen@gmail.com
                </div>
              </div>
            </div>
            <ImageContainer>
              <Image
                loader={imageLoader}
                src={require("../public/images/headshot.jpeg")}
              />
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
