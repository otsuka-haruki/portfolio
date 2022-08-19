import { useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { CardContent, Button, Typography, TextField } from "@mui/material";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { db } from "config/firebase";
import { getFormattedDateAndTime } from "utils/functions";
import DefaultCard from "components/common/DefaultCard";
import CardActionRight from "components/common/CardActionRight";
import { useState } from "react";
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { LoadingButton } from "@mui/lab";

const AddLogCard = () => {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const nameInputRef = useRef();
    const messageInputRef = useRef();

    const defaultAttributes = {
        fullWidth: true,
        margin: "normal",
        variant: "filled",
    };

    const addLog = async () => {
        setLoading(true);
        const name = nameInputRef.current.value;
        const message = messageInputRef.current.value;
        const date = getFormattedDateAndTime();
        await addDoc(collection(db, "guestbook"), {
            name,
            message,
            date
        });

        // After successfully added log
        setLoading(false);
        setSent(true);
        nameInputRef.current.value = null;
        messageInputRef.current.value = null;
        // alert('Success!');
        // TODO: open snackbar
    }

    return (
        <DefaultCard>
            <CardContent>
                <Typography variant="h6">ログを残す</Typography>
                <TextField {...defaultAttributes} label="名前" inputRef={nameInputRef} />
                <TextField {...defaultAttributes} multiline rows={4} label="メッセージ" inputRef={messageInputRef} />
            </CardContent>
            <CardActionRight>
                {!sent && <LoadingButton
                    variant='contained'
                    onClick={addLog}
                    loading={loading}
                    startIcon={<FavoriteBorderRoundedIcon />}
                >
                    追加する
                </LoadingButton>}
                {sent && <Button startIcon={<FavoriteRoundedIcon />}>追加しました</Button>}
            </CardActionRight>
        </DefaultCard>
    )
}

export default AddLogCard