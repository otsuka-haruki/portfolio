import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { v4 as uuid } from "uuid";

const ExperienceBlock = (props) => {
    const { experienceData } = props;

    experienceData.sort((a, b) => a.start_date > b.start_date ? -1 : 1);

    if (experienceData.length == 0) {
        return (
            <Box>
                <Typography variant="h5" sx={{ mb: 2 }}>Experience</Typography>
            </Box>
        )
    }

    const experienceItems = experienceData.map(data => {
        const { organization, role, location, start_date, end_date, incoming } = data;
        const isIncoming = Boolean(incoming);

        return (
            <Box key={uuid()} sx={{ mb: 2 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>{role} {isIncoming && ' (予定)'}</Typography>
                <Typography variant="body1">{organization}</Typography>
                <Typography variant="body1" sx={{ color: grey[700] }}>{location}, {start_date} - {end_date && end_date}</Typography>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>Experience</Typography>
            {experienceItems}
        </Box>
    )
}

export default ExperienceBlock