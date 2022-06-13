import { Typography, Box } from "@mui/material"
// TODO: contain everything in this file first, split into modules later
const Index = () => {
    return (
        <>
            <Typography variant="h4">Career</Typography>
            <Box>
                <Typography variant="h6">Experience</Typography>
                <Typography variant="body1">2023/04- : Incoming, GIG inc at Nihonbashi, Tokyo</Typography>
                <Typography variant="body1">2022/04- : Intern at Gallery Art Point at Ginza, Tokyo</Typography>
                <Typography variant="body1">2021/03-07 : Intern at Viviane inc at Shibuya, Tokyo</Typography>
                <Typography variant="body1">2020/04- : Started a website called Pokeyobi (https://pokeyobi.jp)</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Education</Typography>
                <Typography variant="body1">2019-2023 : The University of Tokyo, Art History</Typography>
                <Typography variant="body1">2022/8 - 2022/9 : Incoming, UCLA Summer Session in Los Angeles</Typography>
            </Box>
            <Box>
                <Typography variant="h6">Volunteer Experience</Typography>
                <Typography variant="body1">2019-2022 : Minzemi at Itabashi, Tokyo</Typography>
            </Box>
        </>
    )
}

export default Index