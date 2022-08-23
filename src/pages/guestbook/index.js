import Head from "next/head";
import GuestBookHome from "components/pages/guestbook/GuestBookHome";

const Index = ({ lang }) => {

    return (
        <>
            <Head>
                <title>{lang === 'ja' ? 'ゲストブック' : 'Guestbook'}</title>
            </Head>

            <GuestBookHome lang={lang} />
        </>
    )
}

export default Index