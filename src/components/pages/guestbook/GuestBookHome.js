import AddLogCard from "./AddLogCard";
import PageTitle from "components/common/PageTitle";
import LogList from "./LogList";

const GuestBookHome = () => {

    return (
        <>
            <PageTitle>ゲストブック</PageTitle>
            <AddLogCard />
            <LogList />
        </>
    )
}

export default GuestBookHome