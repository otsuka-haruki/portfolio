import { useEffect, useState } from "react"
import { Box, Typography, Divider, Chip, Stack } from "@mui/material"
import { blue, grey } from "@mui/material/colors"
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import CircularProgressBox from "components/common/CircularProgressBox";

const LogList = (props) => {
    const { update, setUpdate, lang } = props
    const [loading, setLoading] = useState(false)
    const [comments, setComments] = useState(props.comments)

    useEffect(() => {
        if (update === false) return

        setLoading(true)
        // TODO: must be a more efficient way, like only push added one comment
        fetch('/api/guestbook')
            .then(res => res.json())
            .then(result => setComments(result.result))
            .finally(() => {
                setLoading(false)
                setUpdate(false)
            })
    }, [update])

    const componentTitle = (lang === 'ja') ? 'コメントの記録' : 'Comments'

    const approvedText = {
        approved: { ja: '承認済み', en: 'Approved' },
        pending: { ja: '承認待ち', en: 'Pending' }
    }

    const commentList = comments.map((comment, index) => {
        const { id, name, message, approved, date } = comment
        const datePart = date.split('-')[0]
        const timePart = date.split('-')[1]
        const ChipIcon = () => (approved === 'approved') ? <CheckCircleRoundedIcon /> : <PauseCircleFilledRoundedIcon />
        const chipColor = (approved === 'approved') ? 'primary' : 'warning'
        const approvedLabel = approvedText[approved][(lang === 'ja') ? 'ja' : 'en']

        return (
            <Box key={id} sx={{ mt: 2, mb: 2 }}>
                {index !== 0 && <Divider sx={{ mb: 2 }} />}
                <Typography variant="body1" sx={{ mb: 1 }}>{message}</Typography>
                <Stack direction='row' spacing={2} alignItems='center'>
                    <Typography variant="body1">{name}</Typography>
                    <Typography variant="body1" sx={{ color: grey[500] }}>{datePart} - {timePart}</Typography>
                    <Chip icon={<ChipIcon />} size="small" variant="outlined" color={chipColor} label={approvedLabel} />
                </Stack>
            </Box>
        )
    })

    return (
        <Box sx={{ mt: 4 }}>
            <Typography variant="h6">{componentTitle}</Typography>
            {loading ? <CircularProgressBox /> : commentList}
        </Box>
    )
}

export default LogList