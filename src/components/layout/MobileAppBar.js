import { AppBar, Box, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const MobileAppBar = (props) => {
    const { setDrawerOpen } = props;

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        boxShadow: 0,
        padding: '1rem 1rem 1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }

    return (
        <AppBar position="fixed" color="white" sx={abbBarStyle}>
            <Box>
                <Typography variant="h5" sx={{ letterSpacing: 1 }}>Portfolio</Typography>
            </Box>
            <Box>
                <Button onClick={openDrawer}><MenuIcon /></Button>
            </Box>
        </AppBar>
    )
}

export default MobileAppBar