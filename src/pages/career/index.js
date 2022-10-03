import { PrismaClient } from "@prisma/client"
import CareerHome from "components/pages/career/CareerHome"

const Index = ({ lang, careerData }) => {
    return <CareerHome isJA={lang === 'ja'} data={careerData} />
}

export default Index

export async function getStaticProps() {
    const prisma = new PrismaClient()
    const careerData = await prisma.career.findMany({
        orderBy: [{ startDate: 'desc' }]
    })

    return {
        props: { careerData },
        revalidate: 10
    }
}