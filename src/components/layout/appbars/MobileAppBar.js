import { AppBar, Box, IconButton, Button, Container } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import TranslateRoundedIcon from '@mui/icons-material/TranslateRounded';
import { grey } from "@mui/material/colors";

const MobileAppBar = (props) => {
    const { setDrawerOpen } = props;

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        pt: 6,
        pb: 4,
        boxShadow: 0,
        // display: 'flex',
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // flexDirection: 'row',
        backgroundImage: 'none',
    }

    return (
        <AppBar position="static" sx={abbBarStyle}>
            {/* <Container maxWidth="md"> */}
            <Box sx={{ ml: 1 }}>
                <Button size="small" sx={{ color: grey[200] }} onClick={openDrawer}><MenuIcon /></Button>
            </Box>
            {/* </Container> */}
        </AppBar>
    )
}

export default MobileAppBar