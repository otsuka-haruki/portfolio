import { Container, Typography, Stack, IconButton } from "@mui/material"
import { grey, pink, lightBlue, red } from "@mui/material/colors"
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'

const Footer = () => {
    const snsIconButtons = [
        { href: 'https://www.instagram.com/otsuka_dayoo/', color: pink[200], icon: <InstagramIcon />, blank: true },
        { href: 'https://youtube.com/playlist?list=PLK3zp9YH3gxIQkeNC1LcJOuD8ZyJr1ywC', color: red[200], icon: <YouTubeIcon />, blank: true },
        { href: 'mailto:for.business.in.general@gmail.com', color: lightBlue[200], icon: <MailOutlineRoundedIcon /> }
    ].map(sns => {
        const { href, color, icon, blank } = sns
        return (
            <IconButton
                key={href}
                href={href}
                sx={{ color }}
                target={blank && "_blank"}
                rel={blank && "noopener noreferrer"}
            >
                {icon}
            </IconButton >
        )
    })

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4, color: grey[500] }}>
            <Stack direction='row' justifyContent='center' spacing={2} sx={{ fontSize: '1.2rem' }}>
                {snsIconButtons}
            </Stack>
            <Typography variant="body1" align="center" sx={{ mt: 1 }}>Designed and built by Haruki Otsuka</Typography>
        </Container >
    )
}

export default Footer