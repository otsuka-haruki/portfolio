export default async function handler(req, res) {
    if (process.env.NODE_ENV === 'development') {
        return res.status(200).json({ status: 'in development' })
    }

    const { mobile, platform, referrer = null } = JSON.parse(req.body)
    require('dotenv').config()
    const mysql = require('mysql2/promise')
    try {
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        // TODO: for now, putting null as referrer
        // TODO: use prisma in the first place
        const [rows] = await connection.execute(`
        INSERT INTO pageviews_playground VALUES (null, ${mobile}, '${platform}', ${null});
        `)
        connection.end()
        return res.status(200).json({ status: 'success', referrer })
    } catch (error) {
        return res.status(500).json({ status: 'error' })
    }
}
