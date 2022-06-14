import { useState } from "react";
import Link from 'next/link'
import { AppBar as MuiAppBar, Typography, Box, Button, Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { v4 as uuid } from "uuid";
import LinkButton from "components/common/LinkButton";

const LaptopAppBar = () => {
    const [anchorElement, setAnchorElement] = useState(null);
    const [selectedLang, setSelectedLang] = useState('日本語');
    const open = Boolean(anchorElement);

    const openLangMenu = (event) => setAnchorElement(event.currentTarget);

    const handleMenuItemClick = (event, index) => {
        setSelectedLang(index === 0 ? '日本語' : 'english');
        closeLangMenu();
    };

    const closeLangMenu = () => setAnchorElement(null);

    const abbBarStyle = {
        boxShadow: 0,
        padding: '1rem 1rem 1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    }

    const langOptions = ['日本語', 'English'];

    return (
        <MuiAppBar position="fixed" color="white" sx={abbBarStyle}>
            <Box>
                <Button>
                    <Link href='/'>
                        <Typography variant="h5" sx={{ letterSpacing: 1 }}>Portfolio</Typography>
                    </Link>
                </Button>
            </Box>

            <Box>
                <LinkButton href="/career">career</LinkButton>
                <LinkButton href="/blogs">blogs</LinkButton>
                <Button onClick={openLangMenu} endIcon={<ArrowDropDownIcon />}>{selectedLang}</Button>
            </Box>

            <Menu
                anchorEl={anchorElement}
                open={open}
                onClose={closeLangMenu}
            >
                {langOptions.map((option, index) => {
                    return (
                        <MenuItem
                            key={uuid()}
                            onClick={event => handleMenuItemClick(event, index)}
                            selected={index === selectedLang}
                        >
                            {option}
                        </MenuItem>
                    )
                })}
            </Menu>
        </MuiAppBar>
    )
}

export default LaptopAppBar