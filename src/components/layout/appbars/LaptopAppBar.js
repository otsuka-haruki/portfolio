import { useState } from "react";
import { useRouter } from "next/router";
import { AppBar as MuiAppBar, Container, Stack, Button, Menu, MenuItem, IconButton } from "@mui/material";
import { grey, teal } from "@mui/material/colors";
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import LinkButton from "components/common/LinkButton";

const LaptopAppBar = ({ lang, setLang }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { pathname } = useRouter();

    const isJapanese = lang === 'ja';

    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    };

    const toggleLanguage = (lang) => {
        setLang(lang);
        handleClose();
    }

    const buttons = [
        { ja: 'ホーム', en: 'Home', href: '/', sx: { letterSpacing: isJapanese && 2 } },
        { ja: '経歴', en: 'Career', href: '/career' },
        { ja: 'ゲストブック', en: 'Guestbook', href: '/guestbook' }
    ].map(button => {
        const { ja, en, href, sx } = button;
        return (
            <LinkButton
                key={en}
                size='large'
                href={href}
                color={pathname === href ? 'primary' : 'grey'}
                sx={{ textTransform: 'none', letterSpacing: 0.5, ...sx, }}
            >
                {isJapanese ? ja : en}
            </LinkButton>
        )
    });

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    {buttons}
                </Stack>
                <Stack direction='row' spacing={2}>
                    <Button size="small" color="grey">
                        <DarkModeRoundedIcon sx={{ fontSize: '1.3rem' }} />
                    </Button>
                    <Button size="small" color="grey" endIcon={<KeyboardArrowDownRoundedIcon />} onClick={handleClick}>
                        <TranslateRoundedIcon sx={{ fontSize: '1.3rem' }} />
                    </Button>
                    <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                        <MenuItem onClick={() => toggleLanguage('ja')} sx={{ bgcolor: isJapanese ? grey[700] : 'none' }}>
                            日本語
                        </MenuItem>
                        <MenuItem onClick={() => toggleLanguage('en')} sx={{ bgcolor: !isJapanese ? grey[700] : 'none' }}>
                            English
                        </MenuItem>
                    </Menu>
                </Stack>
            </Container>
        </MuiAppBar >
    )
}

export default LaptopAppBar