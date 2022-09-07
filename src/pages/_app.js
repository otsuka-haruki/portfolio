import { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { doc, updateDoc, increment } from "firebase/firestore"
import { ThemeProvider } from '@mui/material'
import { db } from 'config/firebase'
import '../styles/globals.css'
import { customTheme } from 'config/mui'
import { firebaseApp } from 'config/firebase'
import Layout from 'components/layout/Layout'
import { snackbarContext, SnackbarProvider } from 'contexts/snackbarContext'
import Snackbar from 'components/common/Snackbar'
import { useContext } from 'react'

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState('ja')
  const { pathname } = useRouter()
  const snackbarCtx = useContext(snackbarContext)

  useEffect(() => {
    // const incrementPageviews = async () => {
    //   if (window.location.hostname === 'localhost') return

    //   const docRef = doc(db, "statistics", "pageviews")
    //   await updateDoc(docRef, {
    //     pageviews: increment(1)
    //   })
    // }

    // incrementPageviews()

    const incrementPageviews = async () => {
      const response = await fetch('/api/pageview/increment', {
        method: 'POST',
        body: JSON.stringify({
          mobile: navigator.userAgentData.mobile,
          platform: navigator.userAgentData.platform,
          referrer: document.referrer
        })
      })

      const { status, referrer } = await response.json()
      if (status === 'success') {
        snackbarCtx.openSnackbar({ message: 'Successfully incremented pageview!' })
        console.log('success');
      } else {
        snackbarCtx.openSnackbar({ message: 'Error while incrementing pageview', severity: 'error' })
        console.log(status);
      }
      console.log(referrer)
    }

    incrementPageviews()
  }, [pathname])

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
