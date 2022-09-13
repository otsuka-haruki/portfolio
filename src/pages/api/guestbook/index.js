import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const prisma = new PrismaClient()
    try {
        const result = await prisma.guestbook.findMany({
            where: {
                NOT: {
                    approved: 'rejected'
                }
            },
            orderBy: [{ date: 'desc' }]
        })
        res.status(200).json({ result })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'error' })
    }
}