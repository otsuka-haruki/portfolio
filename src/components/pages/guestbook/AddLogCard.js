import { useContext, useState } from "react"
import { useRouter } from "next/router"
import { collection, addDoc } from "firebase/firestore"
import { CardContent, Button, Typography, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import { red } from "@mui/material/colors"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import { db } from "config/firebase"
import { getFormattedDateAndTime } from "utils/functions"
import DefaultCard from "components/common/DefaultCard"
import CardActionRight from "components/common/CardActionRight"
import { snackbarContext } from "contexts/snackbarContext"

// TODO: only people with code can add a comment
const AddLogCard = (props) => {
    const { setUpdate, lang } = props
    const [status, setStatus] = useState('yet')
    const [inputErrors, setInputErrors] = useState({ name: false, message: false })
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const snackbarCtx = useContext(snackbarContext)
    const router = useRouter()

    const { guestbookCode } = router.query
    const isJapanese = (lang === 'ja')
    const sent = (status === 'sent')
    const inputsValid = (name === '' || message === '')

    const defaultTextFieldAttributes = {
        fullWidth: true,
        margin: "normal",
        variant: "filled",
    }

    // Japanese and English messages
    const cardTitle = isJapanese ? 'コメントを残す' : 'Leave a comment'
    const noGuestbookCodeMessage = isJapanese ? 'コメントを追加するにはコードが必要です' : 'To add your comment, you need a guestbook code'
    const nameInputLabel = isJapanese ? '名前' : 'Your Name'
    const messageInputLabel = isJapanese ? 'メッセージ' : 'Your Message'
    const buttonText = isJapanese ? '追加する' : 'Add comment'
    const buttonCompleteText = isJapanese ? '追加しました！' : 'Successful!'
    const snackbarCompleteText = isJapanese ? 'コメントを追加しました！' : 'Added your comment!'
    const errorMessage = isJapanese ? '空の入力です' : 'Invalid input'

    const handleNameChange = (event) => {
        const value = event.target.value.trim()
        setName(value)
        setInputErrors({
            ...inputErrors,
            name: (value === '')
        })
    }

    const handleMessageChange = (event) => {
        const value = event.target.value.trim()
        setMessage(value)
        setInputErrors({
            ...inputErrors,
            message: (value === '')
        })
    }

    const addLog = async () => {
        // setStatus('sending')

        // TODO: use API route
        const result = await fetch('/api/guestbook/post', {
            method: 'POST',
            body: JSON.stringify({ name, message })
        })
        // await addDoc(collection(db, "guestbook"), {
        //     name,
        //     message,
        //     date: getFormattedDateAndTime()
        // })

        // After successfully added a comment
        // setStatus('sent')
        // setName('')
        // setMessage('')
        // snackbarCtx.openSnackbar({ message: snackbarCompleteText })
        // setUpdate(true)
    }

    // *: exported component here
    return (
        <DefaultCard>
            <CardContent>
                <Typography variant="h6">{cardTitle}</Typography>
                {/* {!guestbookCode
                    && <Typography variant="body1" sx={{ color: red[200] }}>{noGuestbookCodeMessage}</Typography>} */}
                <TextField
                    {...defaultTextFieldAttributes}
                    label={nameInputLabel}
                    onChange={handleNameChange}
                    value={name}
                    error={inputErrors.name}
                    helperText={inputErrors.name && errorMessage}
                />
                <TextField
                    {...defaultTextFieldAttributes}
                    multiline
                    rows={4}
                    label={messageInputLabel}
                    onChange={handleMessageChange}
                    value={message}
                    error={inputErrors.message}
                    helperText={inputErrors.message && errorMessage}
                />
            </CardContent>
            <CardActionRight>
                {!sent
                    && <LoadingButton
                        variant='contained'
                        onClick={addLog}
                        // disabled={inputsValid}
                        disabled={true}
                        loading={status === 'sending'}
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