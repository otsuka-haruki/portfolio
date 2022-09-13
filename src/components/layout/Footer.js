import { Fragment, useState, useEffect } from "react"
import { Container, Typography, Stack, Button } from "@mui/material"
import { grey, pink, lightBlue, red } from "@mui/material/colors"
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded'

const Footer = () => {
    const [friend, setFriend] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('friend') === 'true') {
            setFriend(true)
        }
    }, [])

    const snsIconButtons = [
        { href: 'https://youtube.com/playlist?list=PLK3zp9YH3gxIQkeNC1LcJOuD8ZyJr1ywC', icon: <YouTubeIcon sx={{ color: red[500] }} />, blank: true, label: 'Favorite songs' },
        { href: 'https://www.instagram.com/otsuka_dayoo/', icon: <InstagramIcon sx={{ color: pink[300] }} />, blank: true, label: 'Instagram' },
        { href: 'mailto:for.business.in.general@gmail.com', icon: <MailOutlineRoundedIcon sx={{ color: lightBlue[300] }} />, label: 'Mail' }
    ].map(sns => {
        const { href, label, icon, blank } = sns
        if (!friend && label === 'Instagram') {
            return <Fragment key={href}></Fragment>
        }

        return (
            <Button
                key={href}
                color="grey"
                href={href}
                startIcon={icon}
                target={blank && "_blank"}
                rel={blank && "noopener noreferrer"}
                sx={{ textTransform: 'none' }}
            >
                {label}
            </Button >
        )
    })

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
            <Stack direction='row' justifyContent='center' spacing={2} sx={{ fontSize: '1.2rem' }}>
                {snsIconButtons}
            </Stack>
            <Typography variant="body1" align="center" sx={{ mt: 1, color: grey[500] }}>
                Designed and built by Haruki Otsuka
            </Typography>
        </Container >
    )
}

export default Footer