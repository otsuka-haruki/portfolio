import { Container, Typography, Link, Stack, IconButton } from "@mui/material";
import { grey } from "@mui/material/colors";
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';

const Footer = () => {
    const defaultColor = grey[500];

    const containerStyle = {
        mt: 4,
        mb: 4,
        // pl: { xs: 3.5 },
        // pr: { xs: 3.5 },
        color: defaultColor,
    };

    const goToInstagram = () => window.open('https://www.instagram.com/otsuka_dayoo/', '_blank');

    return (
        <Container maxWidth="md" sx={containerStyle} >
            <Stack direction='row' justifyContent='center' spacing={3} sx={{ fontSize: '1.2rem' }}>
                <IconButton href="https://www.instagram.com/otsuka_dayoo/" target="_blank" rel="noopener noreferrer" sx={{ color: defaultColor }}>
                    <InstagramIcon />
                </IconButton >
                <IconButton href="mailto:for.business.in.general@gmail.com" sx={{ color: defaultColor }}>
                    <MailOutlineRoundedIcon />
                </IconButton>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                Designed and built by Haruki Otsuka
            </Typography>
        </Container >
    )
}

export default Footer