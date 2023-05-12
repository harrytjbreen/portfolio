import React from "react";
import Image from "next/image";
import MobileContext from "../hooks/MobileContext";
import imageLoader from "../loader";
import { AboutContainer, ImageContainer } from "./Styled/Containers";

const About = () => {
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
                alt={"Harry Breen"}
                src={require("../public/images/headshot.jpeg")}
              />
            </ImageContainer>
            <div>
              <h3>About</h3>
              <p>
                I am a software developer based in Gloucestershire. I mainly
                work on the frontend of web and mobile applications
                professionally, predominantly in React and Vue, however I love
                learning more frameworks, and event picked up Next to build this
                site!
              </p>
              <p>
                In my free time I work on all sorts of projects in a Full-stack
                capability. Currently I am loving working with AWS and am
                studying for the AWS Solutions Architect Associate exam.
              </p>
            </div>
          </AboutContainer>
        </div>
      )}
    </MobileContext.Consumer>
  );
};

export default About;
