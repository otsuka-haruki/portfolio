import { Box, CardContent, Typography, CardActionArea } from "@mui/material";
import DefaultCard from "components/common/DefaultCard";
import { v4 } from "uuid";

const ExistingCareerLists = (props) => {
    const { careerData, setEditTargetId } = props;

    const careerList = careerData.map(career => {
        const { _id, organization, role, start_date, end_date, location } = career;

        const handleClick = () => setEditTargetId(_id);

        return (
            <DefaultCard key={v4()} sx={{ mb: 2 }}>
                <CardActionArea onClick={handleClick} >
                    <CardContent>
                        <Typography variant="body1" sx={{ fontWeight: 700 }}>{organization}</Typography>
                        <Typography variant="body1">{role}</Typography>
                        <Typography variant="body1">{location}, {start_date} - {end_date}</Typography>
                    </CardContent>
                </CardActionArea>
            </DefaultCard>
        )
    })

    return (
        <Box>
            {careerList}
        </Box>
    )
}

export default ExistingCareerLists