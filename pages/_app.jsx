// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "../styles/createEmotionCache.js";
import theme from "../styles/theme";
import "/styles/globals.css";
import Header from "../components/header";
import { useRouter as UseRouter } from "next/router";
import { Router } from "next/router";
// import { useRouter } from "next/router";

// import PageHeader from "../components/pageHeader";

const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const router = UseRouter();
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="bgimage">
          <Header />
          {/* <PageHeader /> */}

          <Component {...pageProps} />

          <br />
          <br />
          <br />
          <br />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}
