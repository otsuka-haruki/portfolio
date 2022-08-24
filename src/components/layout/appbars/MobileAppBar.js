import { useState } from "react";
import { AppBar, Box, IconButton, Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen, lang, setLang } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const isJapanese = lang === 'ja';

    const open = Boolean(anchorEl);
    const openMenu = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const openDrawer = () => setDrawerOpen(true);

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

    return (
        <AppBar position="static" sx={abbBarStyle}>
            <Box sx={{ ml: 2, mr: 2, display: 'flex', justifyContent: 'space-between' }}>
                <IconButton size="large" onClick={openDrawer} sx={{ color: grey[200], }} >
                    <MenuIcon />
                </IconButton>
                <Button color="grey" endIcon={<KeyboardArrowDownRoundedIcon />} onClick={openMenu}>
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
            </Box>
        </AppBar>
    )
}

export default MobileAppBar