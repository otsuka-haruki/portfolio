import { AppBar, Box, IconButton, Stack } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen, lang, setLang } = props;

    const isJapanese = (lang === 'ja');

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    };

    const toggleLanguage = () => setLang(isJapanese ? 'en' : 'ja')

    return (
        <AppBar position="static" sx={abbBarStyle}>
            <Box sx={{ ml: 2, mr: 3, display: 'flex', justifyContent: 'space-between' }}>
                <IconButton size="large" onClick={openDrawer} sx={{ color: grey[200], }} >
                    <MenuIcon />
                </IconButton>
                <Stack direction='row' spacing={4}>
                    {/* <button className="language-button" >
                        <DarkModeRoundedIcon />
                    </button> */}
                    <button className="language-button" onClick={() => toggleLanguage('en')}>
                        {isJapanese ? 'EN' : 'JP'}
                    </button>
                </Stack>
            </Box>
        </AppBar>
    )
}

export default MobileAppBar