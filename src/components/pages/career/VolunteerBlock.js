import { Box, Typography, Grid, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const VolunteerBlock = (props) => {
    const { data, isJA, presentText } = props

    const volunternItems = data.map(data => {
        const { id, startDate, endDate } = data
        const description = isJA ? data.description : data.descriptionEN
        const organization = isJA ? data.organization : data.organizationEN
        const role = isJA ? data.role : data.roleEN
        const location = isJA ? data.location : data.locationEN

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
            <Typography variant="h6" sx={{ mb: 2 }}>{isJA ? 'ボランティア経験' : 'Volunteer Activities'}</Typography>
            {volunternItems}
        </Box>
    )
}

export default VolunteerBlock