import Head from "next/head";
import Link from "next/link";
import { Grid, CardContent, Card, Typography, CardActionArea } from "@mui/material";

const Index = () => {

  const cardStyle = {
    boxShadow: 'none',
    border: '1px solid #000',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }

  return (
    <>
      <Head>
        <title>ホーム | 大塚遥輝のポートフォリオ</title>
      </Head>


    </>
  )
}

export default Index;