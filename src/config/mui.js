import { createTheme } from "@mui/material";
import { amber, blue, grey, pink, teal, red } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: teal[200]
        },
        secondary: {
            main: pink[200]
        },
        success: {
            main: teal.A200
        },
        warning: {
            main: amber.A400
        },
        error: {
            main: red.A200
        },
        amber: {
            main: amber[200]
        },
        white: {
            main: '#fff'
        },
        grey: {
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