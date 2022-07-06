import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import LoadingBackdrop from 'components/layout/LoadingBackdrop';
import Layout from 'components/layout/Layout';
import { customTheme } from 'config/mui';
import '../styles/globals.css';
import { UserContextProvider } from 'context/userContext';

function MyApp({ Component, pageProps }) {
  // const [showLoading, setShowLoading] = useState(false);
  // const router = useRouter();

  // useEffect(() => {
  // const handleStart = (url) => setShowLoading(true);
  // const handleStop = () => setShowLoading(false);

  // router.events.on('routeChangeStart', handleStart);
  // router.events.on('routeChangeComplete', handleStop);
  // // router.events.on('routeChangeError', handleStop);

  // return () => {
  //   router.events.off('routeChangeStart', handleStop);
  //   router.events.off('routeChangeComplete', handleStop);
  //   // router.events.off('routeChangeError', handleStop);
  // }
  // }, [router]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <UserContextProvider>
        <ThemeProvider theme={customTheme}>
          <Layout>
            <Component {...pageProps} />
            {/* <LoadingBackdrop open={showLoading} /> */}
          </Layout>
        </ThemeProvider>
      </UserContextProvider>
    </>
  )
}

export default MyApp
