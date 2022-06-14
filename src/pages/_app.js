import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import LoadingBackdrop from 'components/layout/LoadingBackdrop';
import Layout from 'components/layout/Layout';
import { customTheme } from 'config/mui';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const [showLoading, setShowLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => setShowLoading(true);
    const handleStop = () => setShowLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    // router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      // router.events.off('routeChangeError', handleStop);
    }
  }, [router]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
          <LoadingBackdrop open={showLoading} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
