import { useState } from "react";
import AddLogCard from "./AddLogCard";
import PageTitle from "components/common/PageTitle";
import LogList from "./LogList";

const GuestBookHome = () => {
    const [update, setUpdate] = useState(false);

    return (
        <>
            <PageTitle>ゲストブック</PageTitle>
            <AddLogCard setUpdate={setUpdate} />
            <LogList update={update} />
        </>
    )
}

export default GuestBookHome