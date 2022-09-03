export default async function handler(req, res) {
    const { guestbookCode, name, message, date } = req.body
    try {
        const result = await someAsyncOperation()
        res.status(200).send({ result })
    } catch (err) {
        res.status(500).send({ error: 'failed to fetch data' })
    }
}