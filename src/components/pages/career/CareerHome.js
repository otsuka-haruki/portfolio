import { useState, useEffect } from "react"
import Head from "next/head"
import { collection, getDocs } from "firebase/firestore"
import { Divider } from "@mui/material"
import { db } from "config/firebase"
import PageTitle from "components/common/PageTitle"
import ExperienceBlock from "./ExperienceBlock"
import EducationBlock from "./EducationBlock"
import VolunteerBlock from "./VolunteerBlock"
import LinearProgressBox from "components/common/LinearProgressBox"

const CareerHome = ({ lang }) => {
    const [careers, setCareers] = useState([])

    useEffect(() => {
        (async () => {
            const temp = []
            const querySnapshot = await getDocs(collection(db, "career"))
            querySnapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
            setCareers(temp)
        })()
    }, [])

    const headTitle = (lang === 'ja') ? '経歴 - 大塚遥輝' : 'Career - Haruki Otsuka'
    const pageTitle = (lang === 'ja') ? '経歴' : 'Career'

    const experienceCareer = careers.filter(career => career.tags.includes('experience'))
    const educationCareer = careers.filter(career => career.tags.includes('education'))
    const volunteerCareer = careers.filter(career => career.tags.includes('volunteer'))
    const presentText = lang === 'ja' ? '現在' : 'present'

    const date = new Date()
    const year = date.getFullYear()
    const month = ('00' + (date.getMonth() + 1)).slice(-2)
    const currentDate = year + '/' + month

    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            {careers.length === 0 && <LinearProgressBox />}
            {careers.length !== 0 &&
                <>
                    <ExperienceBlock experienceData={experienceCareer} currentDate={currentDate} lang={lang} presentText={presentText} />
                    <Divider sx={{ mb: 2.5 }} />
                    <EducationBlock educationData={educationCareer} lang={lang} presentText={presentText} />
                    <Divider sx={{ mb: 2.5 }} />
                    <VolunteerBlock volunteerData={volunteerCareer} lang={lang} presentText={presentText} />
                </>}
        </>
    )
}

export default CareerHome