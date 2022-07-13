import { Box, Typography, Grid, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const VolunteerBlock = (props) => {
    const { volunteerData, currentDate } = props;

    volunteerData.sort((a, b) => a.start_date > b.start_date ? -1 : 1);

    const volunternItems = volunteerData.map(data => {
        const { _id, role, location, organization, start_date, end_date, about } = data;
        const isIncoming = start_date > currentDate;
        const isPresent = end_date === '' ? true : false;

        return (
            <Box key={_id} sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>{organization} {isIncoming && ' (予定)'} / <span style={{ fontSize: '0.9rem', fontWeight: 400 }}>{role}</span></Typography>
                        <Stack direction='row' sx={{ color: grey[600] }}>
                            <Typography variant="body1" sx={{ mr: 1 }}>{location}</Typography>
                            <Typography variant="body1">{start_date} - {isPresent && !isIncoming ? '現在' : end_date}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1">{about && about}</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>ボランティア経験</Typography>
            {volunternItems}
        </Box>
    )
}

export default VolunteerBlock