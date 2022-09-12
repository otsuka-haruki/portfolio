import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const { guestbookCode, name, message } = JSON.parse(req.body)
    const prisma = new PrismaClient()

    try {
        const result = await prisma.guestbook.create({
            data: {
                name,
                message,
                approved: 'pending'
            }
        })
        res.status(200).send('success')
    } catch (error) {
        console.error(error)
        res.status(500).send('error')
    }
}