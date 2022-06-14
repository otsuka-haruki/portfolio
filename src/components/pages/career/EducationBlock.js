import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { v4 as uuid } from "uuid";

const EducationBlock = (props) => {
    const { educationData } = props;

    educationData.sort((a, b) => a.start_date > b.start_date ? -1 : 1);

    const educationItems = educationData.map(data => {
        const { incoming, location, organization, start_date, end_date } = data;
        const isIncoming = Boolean(incoming);

        return (
            <Box key={uuid()} sx={{ mb: 1 }}>
                <Typography variant="body1" sx={{ fontSize: '1.1rem', fontWeight: 500 }}>{organization} {isIncoming && ' (予定)'}</Typography>
                <Typography variant="body1" sx={{ color: grey[700] }}>{start_date} - {end_date}</Typography>
                <Typography variant="body1" sx={{ color: grey[700] }}>{location}</Typography>
            </Box>
        )
    });

    return (
        <Box>
            <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>Education</Typography>
            {educationItems}
        </Box>
    )
}

export default EducationBlock