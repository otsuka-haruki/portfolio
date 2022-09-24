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

const CareerHome = ({ lang, data }) => {
    const [careers, setCareers] = useState([])
    const isJA = (lang === 'ja')

    useEffect(() => {
        (async () => {
            const temp = []
            const querySnapshot = await getDocs(collection(db, "career"))
            querySnapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }))
            setCareers(temp)
        })()
    }, [])

    const headTitle = isJA ? '経歴 - 大塚遥輝' : 'Career - Haruki Otsuka'
    const pageTitle = isJA ? '経歴' : 'Career'

    const experienceCareer = data.filter(career => career.category === 'work')
    const educationCareer = data.filter(career => career.category === 'education')
    const volunteerCareer = data.filter(career => career.category === 'volunteer')
    const presentText = isJA ? '現在' : 'present'

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
                    <ExperienceBlock data={experienceCareer} isJA={isJA} presentText={presentText} />
                    <Divider sx={{ mb: 2.5 }} />
                    <EducationBlock data={educationCareer} isJA={isJA} presentText={presentText} />
                    <Divider sx={{ mb: 2.5 }} />
                    <VolunteerBlock data={volunteerCareer} isJA={isJA} presentText={presentText} />
                </>}
        </>
    )
}

export default CareerHome