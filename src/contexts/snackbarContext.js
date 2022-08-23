import { useState, createContext } from "react";

export const snackbarContext = createContext({
    open: false,
    message: '',
    severity: 'success',
    openSnackbar: (snackbarInfo) => { },
    closeSnackbar: () => { }
});

export const SnackbarProvider = props => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState('success');

    const openSnackbar = (snackbarInfo) => {
        setOpen(true);
        setMessage(snackbarInfo.message);
        setSeverity(snackbarInfo.severity || 'success');
    }

    const closeSnackbar = () => {
        setOpen(false);
        setMessage('');
    }

    const contextValue = {
        open,
        message,
        severity,
        openSnackbar,
        closeSnackbar
    }

    return (
        <snackbarContext.Provider value={contextValue}>
            {props.children}
        </snackbarContext.Provider>
    );
}