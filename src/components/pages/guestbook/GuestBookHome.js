import { useState } from "react";
import Head from "next/head";
import AddLogCard from "./AddLogCard";
import PageTitle from "components/common/PageTitle";
import LogList from "./LogList";

const GuestBookHome = ({ lang, comments }) => {
    const [update, setUpdate] = useState(false);

    const headTitle = (lang === 'ja') ? 'ゲストブック - 大塚遥輝' : 'Guestbook - Haruki Otsuka';
    const pageTitle = (lang === 'ja') ? 'ゲストブック' : 'Guestbook';

    return (
        <>
            <Head>
                <title>{headTitle}</title>
            </Head>

            <PageTitle>{pageTitle}</PageTitle>
            <AddLogCard setUpdate={setUpdate} lang={lang} />
            <LogList update={update} setUpdate={setUpdate} lang={lang} comments={comments} />
        </>
    )
}

export default GuestBookHome