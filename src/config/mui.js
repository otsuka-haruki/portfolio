import { createTheme } from "@mui/material";
import { grey, pink, teal } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: teal[200]
        },
        secondary: {
            main: pink[200]
        },
        // basic colors
        'white': {
            main: '#fff'
        },
        'grey': {
            main: grey[200]
        }
    },
    typography: {
        fontFamily: [
            'Roboto',
            'Zen Kaku Gothic New',
            'EB Garamond',
            'Shippori Mincho B1'
        ].join(','),
    }
});