import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
    const { guestbookCode, name, message, date } = JSON.parse(req.body)
    const prisma = new PrismaClient()

    if (guestbookCode !== process.env.GUESTCODE) {
        console.log('no guestbook code')
        return res.status(500).send('Guestbook code is missing')
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
        res.status(200).send('success')
    } catch (error) {
        console.error(error)
        res.status(500).send('error')
    }
}