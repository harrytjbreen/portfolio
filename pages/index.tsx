import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/globalStyles";
import theme, { dark, light } from "../theme/theme";
import { RootContainer } from "../Components/Styled/Containers";
import NameContent from "../Components/NameContent";
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
        <main>
          <LinkDialog />
          <RootContainer>
            <NameContent />
            <About />
            <Timeline />
          </RootContainer>
        </main>

        <footer></footer>
      </ThemeProvider>
    </MobileContext.Provider>
  );
};

export default Home;
