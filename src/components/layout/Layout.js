import { useTheme, useMediaQuery } from "@mui/material";
import Drawer from "./Drawer";
import Container from "./Container";
import LaptopAppBar from "./LaptopAppBar";
import MobileAppBar from "./MobileAppBar";
import { useState } from "react";

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