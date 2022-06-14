import Link from "next/link";
import { AppBar, Box, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const MobileAppBar = (props) => {
    const { setDrawerOpen } = props;

    const openDrawer = () => setDrawerOpen(true);

    const abbBarStyle = {
        boxShadow: 0,
        padding: '0.5rem 0.5rem 1rem 0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }

    return (
        <AppBar position="fixed" color="white" sx={abbBarStyle}>
            <Box>
                <Button>
                    <Link href='/'>
                        <Typography variant="h5" sx={{ letterSpacing: 1 }}>Portfolio</Typography>
                    </Link>
                </Button>
            </Box>
            <Box>
                <Button onClick={openDrawer}><MenuIcon /></Button>
            </Box>
        </AppBar>
    )
}

export default MobileAppBar