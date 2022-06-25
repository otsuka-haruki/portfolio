import Head from "next/head";
import Link from "next/link";
import { Grid, CardContent, Card, Typography, CardActionArea } from "@mui/material";
// import DefaultCard from "components/common/DefaultCard";

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

      <Grid container spacing={1}>
        <Grid item xs={12} lg={4}>
          <Card sx={cardStyle}>
            <CardActionArea sx={{ height: '250px' }}>
              <Link href='/career'>
                <CardContent>
                  <Typography variant="h6">経歴</Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={cardStyle}>
            <CardActionArea sx={{ height: '250px' }}>
              <Link href='/blogs'>
                <CardContent>
                  <Typography variant="h6">ブログなど</Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Card sx={cardStyle}>
            <CardActionArea sx={{ height: '250px' }}>
              <Link href='/'>
                <CardContent>
                  <Typography variant="h6">そのほか</Typography>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Index;