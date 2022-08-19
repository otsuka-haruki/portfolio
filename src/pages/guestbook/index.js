import Head from "next/head";
import GuestBookHome from "components/pages/guestbook/GuestBookHome";

const Index = () => {
    return (
        <>
            <Head>
                <title>ゲストブック</title>
            </Head>

            <GuestBookHome />
        </>
    )
}

export default Index