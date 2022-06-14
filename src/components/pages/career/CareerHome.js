import PageTitle from "components/common/PageTitle";
import ExperienceBlock from "./ExperienceBlock";
import EducationBlock from "./EducationBlock";

const CareerHome = (props) => {
    const { careerData } = props;

    const experienceData = careerData.filter(row => row.tag.includes('experience'));
    const educationData = careerData.filter(row => row.tag.includes('education'));
    const volunteerData = careerData.filter(row => row.tag.includes('volunteer'));

    return (
        <>
            <PageTitle text='Career' />
            <ExperienceBlock experienceData={experienceData} />
            <EducationBlock educationData={educationData} />
        </>
    )
}

export default CareerHome