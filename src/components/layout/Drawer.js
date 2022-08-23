import Link from "next/link";
import { Drawer as MuiDrawer, Box, List, ListItem, ListItemButton, ListItemText, Button, Divider } from "@mui/material";
import { useRouter } from "next/router";
import { grey } from "@mui/material/colors";

const Drawer = (props) => {
    const { drawerOpen, setDrawerOpen, lang } = props;
    const { pathname } = useRouter();

    const closeDrawer = () => setDrawerOpen(false);

    const pageItems = [
        { text: { ja: 'ホーム', en: 'Home' }, link: '/' },
        { text: { ja: '経歴', en: 'Career' }, link: '/career' },
        { text: { ja: 'ゲストブック', en: 'Guestbook' }, link: '/guestbook' }].map(page => (
            <ListItem key={page.text[lang]} sx={{ bgcolor: pathname === page.link && grey[700] }}>
                <ListItemButton onClick={closeDrawer} sx={{ textAlign: 'center' }}>
                    <Link href={page.link}>
                        <ListItemText primary={page.text[lang].toUpperCase()} />
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
            </Box>
        </MuiDrawer>
    )
}

export default Drawer