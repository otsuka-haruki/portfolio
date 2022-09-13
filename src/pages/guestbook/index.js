import GuestBookHome from "components/pages/guestbook/GuestBookHome"
import { PrismaClient } from "@prisma/client"

const Index = ({ lang, comments }) => {
    return <GuestBookHome lang={lang} comments={JSON.parse(comments)} />
}

export default Index


export async function getStaticProps() {
    const prisma = new PrismaClient()
    const comments = await prisma.guestbook.findMany({
        where: {
            NOT: {
                approved: 'rejected'
            }
        },
        orderBy: [{ date: 'desc' }]
    })

    return {
        props: {
            comments: JSON.stringify(comments)
        },
        revalidate: 10,
    }
}