import { Container, Typography, Divider, Stack, IconButton } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { grey } from "@mui/material/colors";

const Footer = () => {
    const defaultColor = grey[500];

    const containerStyle = {
        mt: 4,
        mb: 4,
        // pl: { xs: 3.5 },
        // pr: { xs: 3.5 },
        color: defaultColor,
    };

    const IconLink = ({ children, ...others }) => (
        <a {...others} style={{ color: defaultColor }}>
            {children}
        </a>
    )

    return (
        <Container maxWidth="md" sx={containerStyle} >
            <Stack direction='row' justifyContent='center' spacing={3} sx={{ fontSize: '1.2rem' }}>
                <IconLink href="https://www.instagram.com/otsuka_dayoo/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </IconLink>
                <IconLink href="mailto:for.business.in.general@gmail.com">
                    <FontAwesomeIcon icon={faEnvelope} />
                </IconLink>
            </Stack>
            <Typography variant="body1" sx={{ mt: 2, textAlign: 'center' }}>
                Designed and built by Haruki Otsuka
            </Typography>
        </Container >
    )
}

export default Footer