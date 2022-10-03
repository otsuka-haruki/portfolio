import Head from "next/head"
import { Divider } from "@mui/material"
import PageTitle from "components/common/PageTitle"
import ExperienceBlock from "./ExperienceBlock"
import EducationBlock from "./EducationBlock"
import VolunteerBlock from "./VolunteerBlock"

const CareerHome = ({ isJA, data }) => {
    // const isJA = (lang === 'ja')
    const headTitle = isJA ? '経歴 - 大塚遥輝' : 'Career - Haruki Otsuka'
    const pageTitle = isJA ? '経歴' : 'Career'

    const experienceCareer = data.filter(career => career.category === 'work')
    const educationCareer = data.filter(career => career.category === 'education')
    const volunteerCareer = data.filter(career => career.category === 'volunteer')
    const presentText = isJA ? '現在' : 'present'

    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            <ExperienceBlock data={experienceCareer} isJA={isJA} presentText={presentText} />
            <Divider sx={{ mb: 2.5 }} />
            <EducationBlock data={educationCareer} isJA={isJA} presentText={presentText} />
            <Divider sx={{ mb: 2.5 }} />
            <VolunteerBlock data={volunteerCareer} isJA={isJA} presentText={presentText} />
        </>
    )
}

export default CareerHome