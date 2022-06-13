import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const customTheme = createTheme({
    palette: {
        primary: {
            main: grey[700]
        },
        'white': {
            main: '#fff'
        }
    },
    typography: {
        fontFamily: [
            'EB Garamond',
            'Shippori Mincho B1'
        ].join(','),
    }
});