import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useTypeContent from "../hooks/useTypeContent";
import LeftBar from "../Components/LeftBar";
import { MainSubTitle, MainTitle } from "../Components/Styled/Titles";
import Container, { RootContainer } from "../Components/Styled/Containers";
import useIsMobile from "../hooks/useIsMobile";

const subTitles = ["I write code", "I design websites", "I make apps"];

const Home: NextPage = () => {
  const text = useTypeContent(subTitles, 100, 2000, 3000);
  const isMobile = useIsMobile();

  return (
    <div>
      <Head>
        <title>Harry Breen</title>
        <meta name="description" content="Harry Breen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {!isMobile && <LeftBar />}
        <RootContainer>
          <Container vCenter column id={"#"}>
            <MainTitle>Harry Breen</MainTitle>
            <MainSubTitle>{text}</MainSubTitle>
          </Container>
        </RootContainer>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
