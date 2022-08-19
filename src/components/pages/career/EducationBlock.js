import { Box, Typography, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const EducationBlock = (props) => {
    const { educationData, lang } = props;

    educationData.sort((a, b) => a.startDate > b.startDate ? -1 : 1);

    const educationItems = educationData.map(data => {
        const { id, startDate, endDate, [lang]: { location, role, organization } } = data;

        return (
            <Box key={id} sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>{organization} / <span style={{ fontSize: '0.9rem' }}>{role}</span></Typography>
                <Stack direction='row' sx={{ color: grey[400] }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>{location}</Typography>
                    <Typography variant="body1">{startDate} - {endDate ? endDate : '現在'}</Typography>
                </Stack>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>{lang === 'ja' ? '教育' : 'Education'}</Typography>
            {educationItems}
        </Box>
    )
}

export default EducationBlock