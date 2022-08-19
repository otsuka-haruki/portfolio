import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { doc, updateDoc, increment } from "firebase/firestore";
import { ThemeProvider } from '@mui/material';
import { db } from 'config/firebase';
import '../styles/globals.css';
import { customTheme } from 'config/mui';
import { firebaseApp } from 'config/firebase';
import Layout from 'components/layout/Layout';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  useEffect(() => {
    const incrementPageviews = async () => {
      if (window.location.hostname === 'localhost') return;

      const docRef = doc(db, "statistics", "pageviews");
      await updateDoc(docRef, {
        pageviews: increment(1)
      });
    }

    incrementPageviews();
  }, [pathname]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={customTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
