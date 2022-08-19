import { Typography, Link, Stack } from "@mui/material";
import PageTitle from "components/common/PageTitle"
import BlankLink from "components/common/BlankLink";

const Home = () => {
    return (
        <>
            <PageTitle>大塚遥輝</PageTitle>
            <Typography variant="body1">ようこそ、大塚遥輝のポートフォリオサイトへ！</Typography>

            <Typography variant="h6">取材歴</Typography>
            <Typography variant="body1">
                <BlankLink href='https://www.todaishimbun.org/campusnohito20200524/'>東大新聞</BlankLink>
                に掲載されました
            </Typography>
            <Typography variant="body1">
                テレビ東京の<BlankLink href='https://kakaku.com/tv/channel=12/programID=1378/episodeID=1143461/'>モーニングサテライト</BlankLink>にて特集されました
            </Typography>
            <Typography variant="body1">
                東大最大級の学生メディア<BlankLink href='https://todai-umeet.com/article/58177'>UmeeT</BlankLink>にてポケット予備校が掲載されました
            </Typography>
        </>
    )
}

export default Home