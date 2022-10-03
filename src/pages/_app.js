import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from '@mui/material'
import platform from 'platform'
import '../styles/globals.css'
import { customTheme } from 'config/mui'
import { firebaseApp } from 'config/firebase'
import Layout from 'components/layout/Layout'
import { SnackbarProvider } from 'contexts/snackbarContext'
import Snackbar from 'components/common/Snackbar'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('ja')
  const router = useRouter()

  useEffect(() => {
    // ?: must be a better way of storing guestbookcode
    const { friend } = router.query
    if (friend === 'true') {
      localStorage.setItem('friend', true)
    }

    // TODO: increment pageview
    // const { name, os: { family } } = platform
  }, [router])

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
