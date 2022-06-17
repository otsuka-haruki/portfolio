import { useContext, useEffect } from "react";
import Head from "next/head";
import { userContext } from "context/userContext";
import CareerEditHome from "components/pages/career-edit/CareerEditHome";

const Edit = () => {
    const userCtx = useContext(userContext);

    return (
        <>
            <Head>
                <title>経歴を編集</title>
            </Head>

            <CareerEditHome />
        </>
    )
}

export default Edit