import { useContext } from "react";
import { Snackbar as MuiSnackbar } from "@mui/material";
import MuiAlert from '@mui/material/Alert';
import { snackbarContext } from "contexts/snackbarContext";

const Snackbar = () => {
    const snackbarCtx = useContext(snackbarContext);
    const { open, severity, message } = snackbarCtx

    const closeHandler = () => snackbarCtx.closeSnackbar();

    return (
        <MuiSnackbar open={open} autoHideDuration={3000} onClose={closeHandler}>
            <MuiAlert severity={severity} sx={{ width: '100%' }} variant="filled">{message}</MuiAlert>
        </MuiSnackbar>
    );
};

export default Snackbar;