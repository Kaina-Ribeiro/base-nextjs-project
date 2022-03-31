import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/global-styles';
import { theme } from '../themes/theme';

type NextPageWithLayout<P = unknown> = NextPage<P> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </>
  );
}

export default MyApp;
