import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import ThemeConfig from '../utils/theme';
import { generateToken } from '../api/base';
import { getTokenFromStorage, isTokenExpired } from '../utils/storage';

export default function App(props) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    const token = getTokenFromStorage();
    if (isTokenExpired(token)) {
      generateToken();
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeConfig>
        <Component {...pageProps} />
      </ThemeConfig>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};