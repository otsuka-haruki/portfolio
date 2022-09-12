import { useState } from "react";
import AddLogCard from "./AddLogCard";
import PageTitle from "components/common/PageTitle";
import LogList from "./LogList";

const GuestBookHome = ({ lang, comments }) => {
    const [update, setUpdate] = useState(false);

    const pageTitle = lang === 'ja' ? 'ゲストブック' : 'Guestbook';

    return (
        <>
            <PageTitle>{pageTitle}</PageTitle>
            <AddLogCard setUpdate={setUpdate} lang={lang} />
            <LogList update={update} lang={lang} comments={comments} />
        </>
    )
}

export default GuestBookHome