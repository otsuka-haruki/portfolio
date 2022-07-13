import { Box, Typography, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Fragment } from "react";

const EducationBlock = (props) => {
    const { educationData, currentDate } = props;

    educationData.sort((a, b) => a.start_date > b.start_date ? -1 : 1);

    const educationItems = educationData.map(data => {
        const { _id, location, role, organization, start_date, end_date, about, disabled } = data;

        if (disabled) return <Fragment key={_id}></Fragment>

        return (
            <Box key={_id} sx={{ mb: 4 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>{organization} / <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>{role}</span></Typography>
                <Stack direction='row' sx={{ color: grey[600] }}>
                    <Typography variant="body1" sx={{ mr: 1 }}>{location}</Typography>
                    <Typography variant="body1">{start_date} - {end_date}</Typography>
                </Stack>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>教育</Typography>
            {educationItems}
        </Box>
    )
}

export default EducationBlock