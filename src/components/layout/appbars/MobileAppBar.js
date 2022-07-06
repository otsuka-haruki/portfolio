import Link from "next/link";
import { AppBar, Box, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SettingsIcon from '@mui/icons-material/Settings';
import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen } = props;

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        boxShadow: 0,
        backgroundImage: 'none',
        pt: 2,
        pb: 2,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    }

    return (
        <AppBar position="static" sx={abbBarStyle}>
            <Box>
                <Button sx={{ color: grey[200] }} onClick={openDrawer}><MenuIcon /></Button>
            </Box>
            <Box>
                <Button sx={{ color: grey[200] }} ><SettingsIcon /></Button>
            </Box>

        </AppBar>
    )
}

export default MobileAppBar