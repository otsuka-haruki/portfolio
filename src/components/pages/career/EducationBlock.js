import { Box, Typography, Stack } from "@mui/material"
import { grey } from "@mui/material/colors"

const EducationBlock = (props) => {
    const { data, isJA, presentText } = props

    const educationItems = data.map(data => {
        const { id, startDate, endDate } = data
        const organization = isJA ? data.organization : data.organizationEN
        const role = isJA ? data.role : data.roleEN
        const location = isJA ? data.location : data.locationEN

        return (
            <Box key={id} sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                    {organization} / <span style={{ fontSize: '0.9rem' }}>{role}</span>
                </Typography>
                <Stack direction='row' spacing={1} sx={{ color: grey[400] }}>
                    <Typography variant="body1" >{location}</Typography>
                    <Typography variant="body1">{startDate} - {endDate ? endDate : presentText}</Typography>
                </Stack>
            </Box>
        )
    })

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>{isJA ? '教育' : 'Education'}</Typography>
            {educationItems}
        </Box>
    )
}

export default EducationBlock