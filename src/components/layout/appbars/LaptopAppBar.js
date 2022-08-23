import { useRouter } from "next/router";
import { AppBar as MuiAppBar, Container, Button, Box, Stack, IconButton } from "@mui/material";
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import LinkButton from "components/common/LinkButton";
import { grey, teal } from "@mui/material/colors";

const LaptopAppBar = ({ lang, setLang }) => {
    const { pathname } = useRouter();

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    };

    const toggleTheme = () => { };

    const toggleLanguage = () => setLang(lang === 'ja' ? 'en' : 'ja');

    const buttons = [
        { ja: 'ホーム', en: 'Home', href: '/', sx: { letterSpacing: lang === 'ja' && 2 } },
        { ja: '経歴', en: 'Career', href: '/career' },
        { ja: 'ゲストブック', en: 'Guestbook', href: '/guestbook' }
    ].map((button, index) => {
        const { ja, en, href, sx } = button;
        return (
            <LinkButton
                key={index}
                size='large'
                href={href}
                color={pathname === href ? 'primary' : 'grey'}
                sx={{ textTransform: 'none', letterSpacing: 0.5, ...sx, }}
            >
                {lang === 'ja' ? ja : en}
            </LinkButton>
        )
    });

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Stack spacing={1} direction='row'>
                    {buttons}
                    {/* <LinkButton href="/blogs" color={pathname === '/blogs' ? 'primary' : 'grey'} >ブログ</LinkButton> */}
                </Stack>
                <Box>
                    {/* <Button size="small" color="grey" sx={{ color: grey[500], mr: 1 }} onClick={toggleTheme}>
                        <DarkModeRoundedIcon />
                    </Button> */}
                    <IconButton size="large" color="grey" onClick={toggleLanguage}>
                        <TranslateRoundedIcon />
                    </IconButton>
                </Box>
            </Container>
        </MuiAppBar >
    )
}

export default LaptopAppBar