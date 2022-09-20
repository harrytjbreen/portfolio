import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {Title, SubTitle} from '../Components/Styled/Titles';
import MobileContext from '../models/MobileContext';
import LeftBar from "../Components/LeftBar";

const MainTitle = styled(Title)`
  text-align: left;
  margin-inline: 3rem;
  border-right: 0.5rem solid black;
  min-width: 1px;
  width: fit-content;
`;

const MainSubTitle = styled(SubTitle)`
  text-align: left;
  margin-inline: 3rem;
`;

const Container = styled.div`
  margin-left: 5vw;
`;

const NAME_CONST = 'Harry Breen.'

const Home: NextPage = () => {

    const mobileCutOff = 768;
    const [isMobile, setIsMobile] = useState(false);
    const [name, setName] = useState('');

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= mobileCutOff);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    },[]);

    useEffect(() => {
        if(name.length === NAME_CONST.length) return;

        const time = name.length === NAME_CONST.length-1 ? 500 : 100;

        setTimeout(() => {
            setName(NAME_CONST.slice(0, name.length+1))
        }, time)
    }, [name]);

  return (
    <div>
      <Head>
        <title>Harry Breen</title>
        <meta name="description" content="Harry Breen" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <MobileContext.Provider value={isMobile}>
              <LeftBar/>
              <Container>
                  <MainTitle>{name}</MainTitle>
                  <MainSubTitle>I build web and mobile apps</MainSubTitle>
                  {/*<Spacer/>*/}
                  {/*<Spacer/>*/}
                  {/*<Skills/>*/}
              </Container>
          </MobileContext.Provider>
      </main>

      <footer>

      </footer>
    </div>
  )
}

export default Home;
