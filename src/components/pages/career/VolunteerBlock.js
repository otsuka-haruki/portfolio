import { Box, Typography, Grid, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const VolunteerBlock = (props) => {
    const { volunteerData, currentDate, lang, presentText } = props;

    volunteerData.sort((a, b) => a.startDate > b.startDate ? -1 : 1);

    const volunternItems = volunteerData.map(data => {
        const { id, startDate, endDate, [lang]: { location, role, organization, description, disabled } } = data;
        if (startDate > currentDate) return <div key={id}></div>

        return (
            <Box key={id} sx={{ mb: 4 }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>
                            {organization} / <span style={{ fontSize: '0.9rem' }}>{role}</span>
                        </Typography>
                        <Stack direction='row' spacing={1} sx={{ color: grey[400] }}>
                            <Typography variant="body1">{location}</Typography>
                            <Typography variant="body1">{startDate} - {endDate ? endDate : presentText}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1">{description}</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>{lang === 'ja' ? 'ボランティア経験' : 'Volunteer Activities'}</Typography>
            {volunternItems}
        </Box>
    )
}

export default VolunteerBlock