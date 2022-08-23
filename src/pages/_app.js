import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { doc, updateDoc, increment } from "firebase/firestore";
import { ThemeProvider } from '@mui/material';
import { db } from 'config/firebase';
import '../styles/globals.css';
import { customTheme } from 'config/mui';
import { firebaseApp } from 'config/firebase';
import Layout from 'components/layout/Layout';
import { SnackbarProvider } from 'contexts/snackbarContext';
import Snackbar from 'components/common/Snackbar';

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('ja');
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
        <SnackbarProvider>
          <Layout lang={lang} setLang={setLang}>
            <Component {...pageProps} lang={lang} />
            <Snackbar />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
