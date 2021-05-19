import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>corykitchens-helloworld!</title>
      </Head>
      <div className="app">
        <main>
          <h1>Hello World</h1>
        </main>
      </div>
    </>
  );
}

export default CustomApp;
