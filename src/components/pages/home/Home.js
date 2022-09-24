import Head from "next/head";
import { Box, Typography } from "@mui/material"
import PageTitle from "components/common/PageTitle"
import Media from "./Media"

const Home = ({ lang }) => {
    const isJapanese = lang === 'ja'

    const headTitle = isJapanese ? '大塚遥輝 - ポートフォリオ' : 'Haruki Otsuka - Portfolio'
    const pageTitle = isJapanese ? '大塚遥輝' : 'Haruki Otsuka'
    const welcomeMessage = isJapanese ? 'ようこそ、大塚遥輝のポートフォリオサイトへ！' : 'Welcome to my portfolio!'

    return (
        <Box>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            <Typography variant="body1" sx={{ mb: 2 }}>{welcomeMessage}</Typography>
            <Media />
        </Box>
    )
}

export default Home