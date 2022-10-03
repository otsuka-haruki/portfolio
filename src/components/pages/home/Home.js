import Head from "next/head";
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import PageTitle from "components/common/PageTitle"
// import Media from "./Media"
import me from '../../../../public/me-black-and-white.webp'

const Home = ({ isJA }) => {
    const headTitle = isJA ? '大塚遥輝 - ポートフォリオ' : 'Haruki Otsuka - Portfolio'
    const pageTitle = isJA ? '大塚遥輝' : 'Haruki Otsuka'
    const welcomeMessage = isJA ? 'ようこそ、大塚遥輝のポートフォリオサイトへ！' : 'Welcome to my portfolio!'

    return (
        <Box>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            <Image src={me} alt="hero" width={850 * 16 / 9} height={850} placeholder="blur" />
            <Typography variant="body1" sx={{ mt: 2 }}>{welcomeMessage}</Typography>
            {/* <Media /> */}
        </Box>
    )
}

export default Home