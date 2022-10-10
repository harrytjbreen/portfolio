import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import theme, { dark, light } from "../theme/theme";
import { RootContainer } from "../Components/Styled/Containers";
import NameContent from "../Components/NameContent";
import Skills from "../Components/Skills";
import About from "../Components/About";
import useIsMobile from "../hooks/useIsMobile";
import MobileContext from "../hooks/MobileContext";
import Timeline from "../Components/Timeline";
import LinkDialog from "../Components/LinkDialog";

const Home: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  const Theme = isDark ? { ...theme, ...dark } : { ...theme, ...light };

  useEffect(() => {
    setMounted(true);
  });

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    )
      setIsDark(true);
  }, []);

  return !mounted ? (
    <></>
  ) : (
    <MobileContext.Provider value={isMobile}>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Head>
          <title>Harry Breen</title>
          <meta name="description" content="Harry Breen's Portfolio" />
          <meta name="author" content="Harry Breen" />
          <meta property="og:url" content="harrybreen.co.uk" key="ogurl" />
          <meta property="og:type" content="website" key="ogtype" />
          <meta
            property="og:site_name"
            content="Harry Breen's Portfolio"
            key="ogsitename"
          />
          <meta
            property="og:title"
            content="Harry Breen's Portfolio"
            key="ogtitle"
          />
          <meta
            property="og:description"
            content="The place to see all of my web based work"
            key="ogdesc"
          />
          <meta
            property="og:image"
            content="https://harrybreen.co.uk/images/headshot.jpeg"
            key="ogimg"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <LinkDialog />
          <RootContainer>
            <NameContent />
            <About />
            <Skills />
            <Timeline />
          </RootContainer>
        </main>

        <footer></footer>
      </ThemeProvider>
    </MobileContext.Provider>
  );
};

export default Home;
