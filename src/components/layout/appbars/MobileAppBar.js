import { AppBar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen, lang, setLang } = props;

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
        // display: 'flex',
        // flexDirection: 'row',
        // justifyContent: 'space-between',
        // alignItems: 'center',
    };

    const toggleLang = () => setLang(lang === 'ja' ? 'en' : 'ja');

    return (
        <AppBar position="static" sx={abbBarStyle}>
            <Box sx={{ ml: 2, mr: 2, display: 'flex', justifyContent: 'space-between' }}>
                <IconButton size="large" sx={{ color: grey[200] }} onClick={openDrawer}><MenuIcon /></IconButton>
                <IconButton size="large" onClick={toggleLang}>
                    <TranslateRoundedIcon />
                </IconButton>
            </Box>
        </AppBar>
    )
}

export default MobileAppBar