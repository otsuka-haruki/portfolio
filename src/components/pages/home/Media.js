import { Box, Typography } from "@mui/material";
import BlankLink from "components/common/BlankLink";


const Media = () => {
    return (
        <Box>
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
        </Box>
    )
}

export default Media