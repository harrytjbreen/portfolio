import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Title, SubTitle } from "../Components/Styled/Titles";
import MobileContext from "../models/MobileContext";
import LeftBar from "../Components/LeftBar";
import useTypeContent from "../hooks/useTypeContent";

const fadeIn = keyframes`
    from {opacity: 0; transform: translate3d(0, -50%, 0);}
    to {opacity: 1; transform: translate3d(0, 0, 0);}
`;

const MainTitle = styled(Title)`
  text-align: left;
  min-width: 1px;
  animation: ${fadeIn} 1s ease-in both;
`;

const MainSubTitle = styled(SubTitle)`
  text-align: left;
  animation: ${fadeIn} 1s 1s ease-in both;
`;

const Container = styled.div`
  display: flex;
`;

const subTitles = [
  "This is a sentence",
  "This is another sentance",
  "Sentence number 3",
];


const Home: NextPage = () => {
  const mobileCutOff = 768;
  const [isMobile, setIsMobile] = useState<boolean>(true);
  const text = useTypeContent(subTitles, 100, 2000, 3000);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= mobileCutOff);
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(() => {
  //     if(name.length === NAME_CONST.length) return;
  //
  //     const time = name.length === NAME_CONST.length-1 ? 500 : 100;
  //
  //     setTimeout(() => {
  //         setName(NAME_CONST.slice(0, name.length+1))
  //     }, time)
  // }, [name]);

  return (
    <div>
      <Head>
        <title>Harry Breen</title>
        <meta name="description" content="Harry Breen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MobileContext.Provider value={isMobile}>
          <Container>
            {!isMobile && <LeftBar />}
            <div id={"#"}>
              <MainTitle>Harry Breen</MainTitle>
              <MainSubTitle>{text}</MainSubTitle>
              {/*<Spacer/>*/}
              {/*<Spacer/>*/}
              {/*<Skills/>*/}
            </div>
          </Container>
        </MobileContext.Provider>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
