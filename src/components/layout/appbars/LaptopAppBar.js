import { AppBar as MuiAppBar, Container, Button, Box } from "@mui/material";
import SettingsIcon from '@mui/icons-material/Settings';
import LinkButton from "components/common/LinkButton";
import { grey } from "@mui/material/colors";

const LaptopAppBar = () => {

    const abbBarStyle = {
        boxShadow: 0,
        backgroundImage: 'none',
        pt: 4,
        pb: 2
    }

    // const langOptions = ['日本語', 'English'];

    return (
        <MuiAppBar position="static" color="white" sx={abbBarStyle}>
            <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box>
                    <LinkButton size='large' href="/" sx={{ letterSpacing: 2 }}>大塚遥輝</LinkButton>
                </Box>
                <Box>
                    <LinkButton href="/career" sx={{ color: grey[500] }}>経歴</LinkButton>
                    <LinkButton href="/blogs" sx={{ color: grey[500] }}>ブログ</LinkButton>
                    <Button sx={{ color: grey[500] }}><SettingsIcon /></Button>
                </Box>
            </Container>
        </MuiAppBar>
    )
}

export default LaptopAppBar