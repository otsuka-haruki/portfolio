import { useState } from "react";
import { useTheme, useMediaQuery } from "@mui/material";
import Drawer from "./Drawer";
import Container from "./Container";
import LaptopAppBar from "./appbars/LaptopAppBar";
import MobileAppBar from "./appbars/MobileAppBar";

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <>
            {isMobile ? <MobileAppBar setDrawerOpen={setDrawerOpen} /> : <LaptopAppBar />}
            <Container>
                {children}
            </Container>
            <Drawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        </>
    )
}

export default Layout