import { AppBar, Box, IconButton, Button, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
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
            {/* <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}> */}
            <Box>
                <Button sx={{ color: grey[200] }} onClick={openDrawer}><MenuIcon /></Button>
            </Box>
            <Box>
                <Button size="small" color='grey'><DarkModeRoundedIcon /></Button>
                <Button size="small" color='grey'><TranslateRoundedIcon /></Button>
            </Box>
            {/* </Container> */}
        </AppBar>
    )
}

export default MobileAppBar