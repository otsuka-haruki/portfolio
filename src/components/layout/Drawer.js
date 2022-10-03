import Link from "next/link"
import { useRouter } from "next/router"
import { Drawer as MuiDrawer, Box, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import { grey } from "@mui/material/colors"

const Drawer = (props) => {
    const { drawerOpen, setDrawerOpen, lang } = props
    const { pathname } = useRouter()

    const closeDrawer = () => setDrawerOpen(false)

    const pageItems = [
        { text: { ja: 'ホーム', en: 'Home' }, link: '/' },
        { text: { ja: '経歴', en: 'Career' }, link: '/career' },
        { text: { ja: 'ゲストブック', en: 'Guestbook' }, link: '/guestbook' }].map(page => {
            const { text, link } = page
            const currentPage = (pathname === link)
            return (
                <ListItem
                    key={link}
                    sx={{ bgcolor: currentPage && 'rgb(128, 203, 196, 0.1)', color: currentPage && 'rgb(128, 203, 196)' }}
                >
                    <ListItemButton onClick={closeDrawer} sx={{ textAlign: 'center' }}>
                        <Link href={link}>
                            <ListItemText
                                primary={text[lang].toUpperCase()}
                                sx={{ '&>span': { fontWeight: currentPage && 500 } }}
                            />
                        </Link>
                    </ListItemButton>
                </ListItem>
            )
        }
        )

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