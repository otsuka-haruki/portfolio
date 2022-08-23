import { useRef, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { CardContent, Button, Typography, TextField } from "@mui/material";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { db } from "config/firebase";
import { getFormattedDateAndTime } from "utils/functions";
import DefaultCard from "components/common/DefaultCard";
import CardActionRight from "components/common/CardActionRight";
import { useState } from "react";
// import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { LoadingButton } from "@mui/lab";
import { snackbarContext } from "contexts/snackbarContext";

// TODO: error handling
const AddLogCard = (props) => {
    const { setUpdate, lang } = props;
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputErrors, setInputErrors] = useState({ name: false, message: false });
    // TODO: should use state instead as you can not control onChange...?
    const nameInputRef = useRef();
    const messageInputRef = useRef();
    const snackbarCtx = useContext(snackbarContext);

    const defaultAttributes = {
        fullWidth: true,
        margin: "normal",
        variant: "filled",
    };

    // text based on languages
    const cardTitle = lang === 'ja' ? 'コメントを残す' : 'Leave a comment';
    const nameInputLabel = lang === 'ja' ? '名前' : 'Your Name';
    const messageInputLabel = lang === 'ja' ? 'メッセージ' : 'Your Message';
    const buttonText = lang === 'ja' ? '追加する' : 'Add a comment';
    const buttonCompleteText = lang === 'ja' ? '追加しました' : 'Added your comment!';
    const errorMessage = lang === 'ja' ? '入力に不備があります' : 'Invalid input';

    const addLog = async () => {
        setLoading(true);
        const name = nameInputRef.current.value;
        const message = messageInputRef.current.value;
        if (name === '' || message === '') {
            setInputErrors({ name: name === '', message: message === '' });
            setLoading(false);
            snackbarCtx.openSnackbar({ message: errorMessage, severity: 'error' });
            return;
        }

        await addDoc(collection(db, "guestbook"), {
            name,
            message,
            date: getFormattedDateAndTime()
        });

        // After successfully added a comment
        setLoading(false);
        setSent(true);
        nameInputRef.current.value = null;
        messageInputRef.current.value = null;
        // snackbarCtx.openSnackbar({ message: 'コメントを追加しました！' });
        setUpdate(true);
    }

    return (
        <DefaultCard>
            <CardContent>
                <Typography variant="h6">{cardTitle}</Typography>
                <TextField
                    {...defaultAttributes}
                    label={nameInputLabel}
                    inputRef={nameInputRef}
                    error={inputErrors.name}
                    helperText={inputErrors.name && errorMessage}
                />
                <TextField
                    {...defaultAttributes}
                    multiline
                    rows={4}
                    label={messageInputLabel}
                    inputRef={messageInputRef}
                    error={inputErrors.message}
                    helperText={inputErrors.name && errorMessage}
                />
            </CardContent>
            <CardActionRight>
                {!sent && <LoadingButton
                    variant='contained'
                    onClick={addLog}
                    loading={loading}
                    startIcon={<FavoriteBorderRoundedIcon />}
                >
                    {buttonText}
                </LoadingButton>}
                {sent && <Button startIcon={<FavoriteRoundedIcon />}>{buttonCompleteText}</Button>}
            </CardActionRight>
        </DefaultCard>
    )
}

export default AddLogCard