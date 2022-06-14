import { Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { v4 as uuid } from "uuid";
// TODO: contain everything in this file first, split into modules later

const Index = () => {
    const experienceItems = [{
        date: '2023/04 -',
        incoming: true,
        active: false,
        role: 'Web Director',
        organization: 'GIG inc',
        location: 'Nihonbashi, Tokyo'
    }, {
        date: '2022/04 -',
        incoming: false,
        active: true,
        role: 'Intern',
        organization: 'Gallery Art Point',
        location: 'Ginza, Tokyo'
    }, {
        date: '2021/03 - 07',
        incoming: false,
        active: false,
        role: 'Intern',
        organization: 'Viviane inc',
        location: 'Shibuya, Tokyo'
    }, {
        date: '2020/04 -',
        incoming: false,
        active: true,
        role: 'Founder & Manager',
        organization: 'Pokeyobi',
        location: 'Tokyo'
    }].map(experience => {
        const { date, incoming, role, active, organization, location } = experience;

        return (
            <Box key={uuid()} sx={{ mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{incoming && 'Incoming, '}{role}</Typography>
                <Typography variant="body1" sx={{ color: grey[700] }}>{date} {active && ' present'}</Typography>
                <Typography variant="body1">{organization} at {location}</Typography>
            </Box>
        )
    });

    const educationItems = [{
        date: '2022/08 - 09',
        incoming: true,
        organization: 'UCLA Summer Session',
        location: 'Los Angeles, U.S.'
    }, {
        date: '2019 - 2023',
        organization: 'The University of Tokyo',
        location: 'Tokyo, Japan'
    }].map(education => {
        const { date, organization, incoming, location } = education;

        return (
            <Box key={uuid()} sx={{ mb: 1 }}>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>{incoming && 'Incoming, '}{organization}</Typography>
                <Typography variant="body1" sx={{ color: grey[700] }}>{date}</Typography>
                <Typography variant="body1">{location}</Typography>
            </Box>
        )
    });

    return (
        <>
            <Typography variant="h4" sx={{ mb: 2 }}>Career</Typography>
            <Box>
                <Typography variant="h6">Experience</Typography>
                {experienceItems}
            </Box>
            <Box>
                <Typography variant="h6" sx={{ mt: 2 }}>Education</Typography>
                {educationItems}
            </Box>
            <Box>
                <Typography variant="h6">Volunteer Experience</Typography>
                <Typography variant="body1">2019-2022 : Minzemi at Itabashi, Tokyo</Typography>
            </Box>
        </>
    )
}

export default Index