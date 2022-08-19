import { useRouter } from "next/router";
import { AppBar as MuiAppBar, Container, Button, Box, Stack } from "@mui/material";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LinkButton from "components/common/LinkButton";
import { grey, teal } from "@mui/material/colors";

const LaptopAppBar = () => {
    const { pathname } = useRouter();

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    };

    const toggleTheme = () => {

    };

    const toggleLanguage = () => {

    }

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md">
                <Stack spacing={1} direction='row'>
                    <LinkButton href="/" color={pathname === '/' ? 'primary' : 'grey'} sx={{ letterSpacing: 2 }}>ホーム</LinkButton>
                    <LinkButton href="/career" color={pathname === '/career' ? 'primary' : 'grey'} >経歴</LinkButton>
                    <LinkButton href="/guestbook" color={pathname === '/guestbook' ? 'primary' : 'grey'} >ゲストブック</LinkButton>
                    {/* <LinkButton href="/blogs" color={pathname === '/blogs' ? 'primary' : 'grey'} >ブログ</LinkButton> */}
                </Stack>
                {/* <Box>
                    <Button size="small" color="grey" sx={{ color: grey[500], mr: 1 }} onClick={toggleTheme}>
                        <DarkModeRoundedIcon />
                    </Button>
                    <Button size="small" color="grey" sx={{ color: grey[500] }} onClick={toggleLanguage}>
                        <TranslateRoundedIcon />
                    </Button>
                </Box> */}
            </Container>
        </MuiAppBar>
    )
}

export default LaptopAppBar