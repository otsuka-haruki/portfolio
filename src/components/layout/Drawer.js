import Link from "next/link";
import { Drawer as MuiDrawer, Box, List, ListItem, ListItemButton, ListItemText, Button, Divider } from "@mui/material";
import { v4 as uuid } from "uuid";

const Drawer = (props) => {
    const { drawerOpen, setDrawerOpen } = props;

    const closeDrawer = () => setDrawerOpen(false);

    const pageItems = [
        { text: 'トップ', link: '/' },
        { text: '経歴', link: '/career' },
        { text: 'ブログ', link: '/blogs' }].map(page => (
            <ListItem key={uuid()}>
                <ListItemButton onClick={closeDrawer} sx={{ textAlign: 'center' }}>
                    <Link href={page.link}>
                        <ListItemText primary={page.text.toUpperCase()} />
                    </Link>
                </ListItemButton>
            </ListItem>
        )
        );

    return (
        <MuiDrawer anchor='bottom' open={drawerOpen} onClose={closeDrawer}>
            <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
                <List sx={{ width: '100%' }}>
                    {pageItems}
                </List>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 4, pl: 4, pr: 4 }}>
                    <Button size="large" variant="outlined">日本語</Button>
                    <Button size="large">English</Button>
                </Box>
            </Box>
        </MuiDrawer>
    )
}

export default Drawer