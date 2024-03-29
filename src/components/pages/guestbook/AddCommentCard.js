import { useContext, useState, useEffect } from "react"
import { CardContent, Button, Typography, TextField } from "@mui/material"
import { LoadingButton } from "@mui/lab"
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import { getFormattedDateAndTime } from "utils/functions"
import { DefaultCard, CardActionRight } from "components/common/CardComponents"
import { snackbarContext } from "contexts/snackbarContext"

const AddCommentCard = (props) => {
    const { setUpdate, lang } = props
    const [status, setStatus] = useState('yet')
    const [friend, setFriend] = useState(false)
    const [inputErrors, setInputErrors] = useState({ name: false, message: false })
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const snackbarCtx = useContext(snackbarContext)

    // ?: isn't there any better way than using localstorage?
    useEffect(() => {
        if (localStorage.getItem('friend')) {
            setFriend(true)
        }
    }, [])

    if (!friend) return <></>

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
    const nameInputLabel = isJapanese ? '名前' : 'Your Name'
    const messageInputLabel = isJapanese ? 'メッセージ' : 'Your Message'
    const buttonText = isJapanese ? '追加する' : 'Add comment'
    const buttonCompleteText = isJapanese ? '追加しました！' : 'Successful!'
    const snackbarCompleteText = isJapanese ? 'コメントを追加しました！' : 'Added your comment!'
    const snackbarErrorText = isJapanese ? 'エラーが起こりました' : 'Something went wrong'
    const errorMessage = isJapanese ? '空の入力です' : 'Invalid input'

    const handleNameChange = (event) => {
        const value = event.target.value
        setName(value)
        setInputErrors({
            ...inputErrors,
            name: (value === '')
        })
    }

    const handleMessageChange = (event) => {
        const value = event.target.value
        setMessage(value)
        setInputErrors({
            ...inputErrors,
            message: (value === '')
        })
    }

    const addComment = async () => {
        setStatus('sending')
        const date = getFormattedDateAndTime(new Date())

        const response = await fetch('/api/guestbook/post', {
            method: 'POST',
            body: JSON.stringify({ name, message, date, friend })
        })

        if (response.ok) {
            setStatus('sent')
            setName('')
            setMessage('')
            setUpdate(true)
            snackbarCtx.openSnackbar({ message: snackbarCompleteText })
        } else {
            setStatus('yet')
            snackbarCtx.openSnackbar({ message: snackbarErrorText, severity: 'error' })
        }
    }

    const SendButton = () =>
        <LoadingButton
            variant='contained'
            onClick={addComment}
            disabled={inputsValid}
            loading={status === 'sending'}
            startIcon={<FavoriteBorderRoundedIcon />}
        >
            {buttonText}
        </LoadingButton>

    // *: final component here
    return (
        <DefaultCard>
            <CardContent>
                <Typography variant="h6">{cardTitle}</Typography>
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
                {!sent && <SendButton />}
                {sent && <Button startIcon={<FavoriteRoundedIcon />}>{buttonCompleteText}</Button>}
            </CardActionRight>
        </DefaultCard>
    )
}

export default AddCommentCard