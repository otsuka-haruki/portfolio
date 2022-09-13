import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const { friend, name, message, date } = JSON.parse(req.body)
    const prisma = new PrismaClient()

    if (friend !== true) {
        console.log('Not friend')
        return res.status(500).send('You are not permitted to add comment')
    }

    try {
        await prisma.guestbook.create({
            data: {
                name,
                message,
                date,
                approved: 'pending'
            }
        })
        return res.status(200).send('success')
    } catch (error) {
        console.error(error)
        return res.status(500).send('error')
    }
}