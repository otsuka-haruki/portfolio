import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import { userContext } from "context/userContext";
import CareerEditHome from "components/pages/career-edit/CareerEditHome";

const Edit = () => {
    const [careerData, setCareerData] = useState([]);
    const userCtx = useContext(userContext);

    useEffect(() => {
        const getCareerData = async () => {
            const res = await fetch("/api/career/ja");
            const result = await res.json();
            setCareerData(result);
        }

        getCareerData();
    }, []);

    return (
        <>
            <Head>
                <title>経歴を編集</title>
            </Head>

            <CareerEditHome careerData={careerData} />
        </>
    )
}

export default Edit