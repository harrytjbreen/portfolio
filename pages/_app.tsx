import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
      <Component {...pageProps} />;
    </>
  );
}

export default MyApp;
