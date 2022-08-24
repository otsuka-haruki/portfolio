import { Container, Typography, Divider, Stack, IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { grey } from "@mui/material/colors";

const Footer = () => {
    const defaultColor = grey[500];

    const containerStyle = { mt: 4, mb: 4, pl: { xs: 3.5 }, pr: { xs: 3.5 }, color: defaultColor };

    return (
        <Container maxWidth="md" sx={containerStyle} >
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body1" sx={{ mb: 1 }}>SNS & Contact</Typography>
            <Stack direction='row' alignItems='center' spacing={3} sx={{ fontSize: '1.2rem' }}>
                <a href="https://www.instagram.com/otsuka_dayoo/" target="_blank" rel="noopener noreferrer" style={{ color: defaultColor }}>
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto:for.business.in.general@gmail.com" style={{ color: defaultColor }}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2 }}>Designed and built by Haruki Otsuka</Typography>
        </Container >
    )
}

export default Footer