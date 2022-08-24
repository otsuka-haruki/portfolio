import { useState } from "react";
import { useTheme, useMediaQuery, Box } from "@mui/material";
import Drawer from "./Drawer";
import Container from "./Container";
import LaptopAppBar from "./appbars/LaptopAppBar";
import MobileAppBar from "./appbars/MobileAppBar";
import Footer from "./Footer";

const Layout = ({ children, lang, setLang }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Box sx={{ display: 'grid', gridTemplateRows: 'auto 1fr auto', gridTemplateColumns: '100%', minHeight: '100vh' }}>
            {isMobile
                ? <MobileAppBar setDrawerOpen={setDrawerOpen} lang={lang} setLang={setLang} />
                : <LaptopAppBar lang={lang} setLang={setLang} />}
            <Container>
                {children}
                <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} lang={lang} />
            </Container>
            <Footer />
        </Box>
    )
}

export default Layout