import { Box, Typography, Grid, Stack } from "@mui/material";
import { grey } from "@mui/material/colors";

const ExperienceBlock = (props) => {
    const { experienceData, currentDate, lang } = props;

    experienceData.sort((a, b) => a.startDate > b.startDate ? -1 : 1);

    const experienceItems = experienceData.map(data => {
        const { id, [lang]: { location, role, description, organization, startDate, endDate, disabled } } = data;
        if (startDate > currentDate) return <div key={id}></div>;

        const isPresent = endDate === '' ? true : false;

        return (
            <Box key={id} sx={{ mb: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>{organization}<span style={{ fontSize: '0.9rem', fontWeight: 400 }}>/ {role}</span></Typography>
                        <Stack direction='row' sx={{ color: grey[400] }}>
                            <Typography variant="body1" sx={{ mr: 1 }}>{location}</Typography>
                            <Typography variant="body1">{startDate} - {isPresent ? '現在' : endDate}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1">{description && description}</Typography>
                    </Grid>
                </Grid>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h6" sx={{ mb: 2 }}>{lang === 'ja' ? '職務経験' : 'Experience'}</Typography>
            {experienceItems}
        </Box>
    )
}

export default ExperienceBlock