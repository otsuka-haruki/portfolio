import { AppBar, Box, IconButton, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen } = props;

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
    }

    return (
        <AppBar position="static" sx={abbBarStyle}>
            <Box sx={{ ml: 1 }}>
                <Button size="small" sx={{ color: grey[200] }} onClick={openDrawer}><MenuIcon /></Button>
            </Box>
        </AppBar>
    )
}

export default MobileAppBar