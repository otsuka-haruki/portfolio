import Head from 'next/head';
import { ThemeProvider } from '@mui/material';
import Layout from 'components/layout/Layout';
import { customTheme } from 'config/mui';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.jpg" />
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
