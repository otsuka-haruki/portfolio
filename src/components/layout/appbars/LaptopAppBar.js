import { useRouter } from "next/router";
import { AppBar as MuiAppBar, Container, Button, Box } from "@mui/material";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LinkButton from "components/common/LinkButton";
import { grey, teal } from "@mui/material/colors";

const LaptopAppBar = () => {
    const { pathname } = useRouter();

    const abbBarStyle = {
        boxShadow: 0,
        backgroundImage: 'none',
        pt: 4,
        pb: 2
    }

    // const langOptions = ['日本語', 'English'];

    const toggleTheme = () => {

    };

    const toggleLanguage = () => {

    }

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <LinkButton size='large' href="/" color={pathname === '/' ? 'primary' : 'grey'} sx={{ letterSpacing: 2 }}>ポートフォリオ</LinkButton>
                    <LinkButton href="/career" color={pathname === '/career' ? 'primary' : 'grey'} >経歴</LinkButton>
                    <LinkButton href="/blogs" color={pathname === '/blogs' ? 'primary' : 'grey'} >ブログ</LinkButton>
                </Box>
                <Box>
                    <Button
                        size="small"
                        color="grey"
                        sx={{ color: grey[500], mr: 1 }}
                        onClick={toggleTheme}
                    >
                        <DarkModeRoundedIcon />
                    </Button>
                    <Button
                        size="small"
                        color="grey"
                        sx={{ color: grey[500] }}
                        onClick={toggleLanguage}
                    >
                        <TranslateRoundedIcon />
                    </Button>
                </Box>
            </Container>
        </MuiAppBar>
    )
}

export default LaptopAppBar