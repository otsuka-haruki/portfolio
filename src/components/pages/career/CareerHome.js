import PageTitle from "components/common/PageTitle";
import ExperienceBlock from "./ExperienceBlock";
import EducationBlock from "./EducationBlock";
import VolunteerBlock from "./VolunteerBlock";
import { Container, Divider } from "@mui/material";

const CareerHome = (props) => {
    const { careerData } = props;

    const experienceData = careerData.filter(data => data.tags.includes('experience'));
    const educationData = careerData.filter(data => data.tags.includes('education'));
    const volunteerData = careerData.filter(data => data.tags.includes('volunteer'));

    const date = new Date();
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const currentDate = year + '/' + month;

    return (
        <>
            <Container maxWidth="lg" sx={{ '& h5': { mb: 2, fontWeight: 500 } }}>
                <PageTitle text='経歴' />
                <ExperienceBlock experienceData={experienceData} currentDate={currentDate} />
                <Divider sx={{ mb: 2 }} />
                <EducationBlock educationData={educationData} currentDate={currentDate} />
                <Divider sx={{ mb: 2 }} />
                <VolunteerBlock volunteerData={volunteerData} currentDate={currentDate} />
            </Container>
        </>
    )
}

export default CareerHome