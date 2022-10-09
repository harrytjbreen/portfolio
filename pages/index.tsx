import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import GlobalStyle from "../theme/globalStyles";
import theme, { dark, light } from "../theme/theme";
import { RootContainer } from "../Components/Styled/Containers";
import { ThemeProvider } from "styled-components";
import NameContent from "../Components/NameContent";
import Skills from "../Components/Skills";

const Home: NextPage = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

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
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Head>
        <title>Harry Breen</title>
        <meta name="description" content="Harry Breen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <RootContainer>
          <NameContent />
          <Skills />
        </RootContainer>
      </main>

      <footer></footer>
    </ThemeProvider>
  );
};

export default Home;
