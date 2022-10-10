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
                I am a software developer based in Gloucestershire. I mainly
                work on the frontend of web and mobile applications
                professionally. However, in my free time I work on all sorts of
                projects in a Full-Stack capability. Currently I am loving
                working with AWS and am studying for the AWS Solutions Architect
                Associate exam.
              </p>
            </div>
          </AboutContainer>
        </div>
      )}
    </MobileContext.Consumer>
  );
};

export default About;
