import Head from "next/head";
import Image from "next/image";
import { Box, Typography } from "@mui/material"
import PageTitle from "components/common/PageTitle"
// import Media from "./Media"
import me from '../../../../public/me-black-and-white.webp'

const Home = ({ isJA }) => {
    const headTitle = isJA ? '大塚遥輝 - ポートフォリオ' : 'Haruki Otsuka - Portfolio'
    const pageTitle = isJA ? '大塚遥輝' : 'Haruki Otsuka'
    const welcomeMessage = isJA
        ? 'ようこそ、大塚遥輝のポートフォリオサイトへ！'
        : "It's so nice to see you and welcome to my portfolio!"
    const studentMessage = isJA
        ? '私は東京大学の美術史学科に通う4年生です。'
        : 'I am a senior BA student at The University of Tokyo, currently majoring in Art History.'
    const introductionMessage = isJA
        ? 'このポートフォリオは、より私のことを知り交流できるようにするために作りました。'
        : 'I made this portfolio page to help you get to know me.'
    const greetingMessage = isJA
        ? 'ぜひ、楽しんで行ってください！'
        : 'Hope you have fun!'

    return (
        <Box>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            <Image src={me} alt="hero" width={850 * 16 / 9} height={850} placeholder="blur" />
            <Typography variant="body1" sx={{ mt: 6 }}>{welcomeMessage}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>{studentMessage}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>{introductionMessage}</Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>{greetingMessage}</Typography>
            {/* <Media /> */}
        </Box>
    )
}

export default Home