import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import { firebaseApp } from 'config/firebase';
import Layout from 'components/layout/Layout';
import { customTheme } from 'config/mui';
import '../styles/globals.css';
import { UserContextProvider } from 'context/userContext';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <UserContextProvider>
        <ThemeProvider theme={customTheme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </UserContextProvider>
    </>
  )
}

export default MyApp
