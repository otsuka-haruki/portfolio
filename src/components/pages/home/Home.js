import { Typography } from "@mui/material";
import PageTitle from "components/common/PageTitle"
import Media from "./Media";

const Home = ({ lang }) => {
    const isJapanese = lang === 'ja';
    const pageTitle = isJapanese ? '大塚遥輝' : 'Haruki Otsuka';
    const welcomeMessage = isJapanese ? 'ようこそ、大塚遥輝のポートフォリオサイトへ！' : 'Welcome to my portfolio!';

    return (
        <>
            <PageTitle>{pageTitle}</PageTitle>
            <Typography variant="body1">{welcomeMessage}</Typography>
            <Media />
        </>
    )
}

export default Home