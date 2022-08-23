import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Box, Divider, LinearProgress } from "@mui/material";
import { db } from "config/firebase";
import PageTitle from "components/common/PageTitle";
import ExperienceBlock from "./ExperienceBlock";
import EducationBlock from "./EducationBlock";
import VolunteerBlock from "./VolunteerBlock";
import LinearProgressBox from "components/common/LinearProgressBox";

const CareerHome = ({ lang }) => {
    const [careers, setCareers] = useState([]);

    useEffect(() => {
        (async () => {
            const temp = [];
            const querySnapshot = await getDocs(collection(db, "career"));
            querySnapshot.forEach(doc => temp.push({ id: doc.id, ...doc.data() }));
            setCareers(temp);
        })();
    }, []);

    if (careers.length === 0) return <LinearProgressBox />;


    const experienceCareer = careers.filter(career => career.tags.includes('experience'));
    const educationCareer = careers.filter(career => career.tags.includes('education'));
    const volunteerCareer = careers.filter(career => career.tags.includes('volunteer'));
    const presentText = lang === 'ja' ? '現在' : 'present';

    const date = new Date();
    const year = date.getFullYear();
    const month = ('00' + (date.getMonth() + 1)).slice(-2);
    const currentDate = year + '/' + month;

    return (
        <Box>
            <PageTitle>経歴</PageTitle>
            <ExperienceBlock experienceData={experienceCareer} currentDate={currentDate}
                // lang={lang}
                lang='ja'
            />
            <Divider sx={{ mb: 2 }} />
            <EducationBlock educationData={educationCareer} lang={lang} presentText={presentText} />
            <Divider sx={{ mb: 2 }} />
            <VolunteerBlock volunteerData={volunteerCareer} lang={lang} presentText={presentText} />
        </Box>
    )
}

export default CareerHome