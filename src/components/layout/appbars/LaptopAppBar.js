import { useRouter } from "next/router"
import { AppBar as MuiAppBar, Container, Stack, Button, } from "@mui/material"
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LinkButton from "components/common/LinkButton"

const LaptopAppBar = ({ lang, setLang }) => {
    const { pathname } = useRouter()

    const isJapanese = (lang === 'ja')

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    }

    const toggleLanguage = () => setLang(isJapanese ? 'en' : 'ja')

    const buttons = [
        { ja: 'ホーム', en: 'Home', href: '/', sx: { letterSpacing: isJapanese && 2 } },
        { ja: '経歴', en: 'Career', href: '/career' },
        { ja: 'ゲストブック', en: 'Guestbook', href: '/guestbook' }
    ].map(button => {
        const { ja, en, href, sx } = button
        return (
            <LinkButton
                key={en}
                size='large'
                href={href}
                color={pathname === href ? 'primary' : 'grey'}
                sx={{ textTransform: 'none', letterSpacing: 0.5, ...sx, }}
            >
                {isJapanese ? ja : en}
            </LinkButton>
        )
    })

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack spacing={1} direction='row' alignItems='center'>
                    {buttons}
                </Stack>
                <Stack direction='row' spacing={2}>
                    {/* <Button size="small" color="grey">
                        <DarkModeRoundedIcon sx={{ fontSize: '1.3rem' }} />
                    </Button> */}
                    <button className="language-button" onClick={() => toggleLanguage('en')}>
                        {isJapanese ? 'EN' : 'JP'}
                    </button>
                </Stack>
            </Container>
        </MuiAppBar >
    )
}

export default LaptopAppBar