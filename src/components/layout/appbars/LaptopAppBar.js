import { useRouter } from "next/router"
import { AppBar as MuiAppBar, Container, Stack } from "@mui/material"
import LinkButton from "components/common/LinkButton"

const LaptopAppBar = ({ lang, setLang }) => {
    const { pathname } = useRouter()

    const isJA = (lang === 'ja')
    const isDevelopment = (process.env.NODE_ENV === 'development')

    const abbBarStyle = {
        pt: 4,
        pb: 2,
        boxShadow: 0,
        backgroundImage: 'none',
    }

    const toggleLanguage = () => setLang(isJA ? 'en' : 'ja')

    const buttons = [
        { ja: 'ホーム', en: 'Home', href: '/', sx: { letterSpacing: isJA && 2 } },
        { ja: '経歴', en: 'Career', href: '/career' },
        { ja: 'ゲストブック', en: 'Guestbook', href: '/guestbook' },
        { ja: 'Playground', en: 'Playground', href: '/playground' }
    ].map(button => {
        const { ja, en, href, sx } = button
        if (href === '/playground' && !isDevelopment) return

        return (
            <LinkButton
                key={en}
                size='large'
                href={href}
                color={pathname === href ? 'primary' : 'grey'}
                sx={{ textTransform: 'none', letterSpacing: 0.5, ...sx, }}
            >
                {isJA ? ja : en}
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
                    <button className="language-button" onClick={() => toggleLanguage('en')}>
                        {isJA ? 'EN' : 'JA'}
                    </button>
                </Stack>
            </Container>
        </MuiAppBar >
    )
}

export default LaptopAppBar