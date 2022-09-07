export default async function handler(req, res) {
    if (process.env.NODE_ENV === 'development') {
        return res.status(200).json({ status: 'in development' })
    }

    const { mobile, platform, referrer = null } = JSON.parse(req.body)
    console.log({ mobile, platform })
    require('dotenv').config()
    const mysql = require('mysql2/promise')
    try {
        console.log('trying to connect...');
        console.log(process.env.DATABASE_URL);
        const connection = await mysql.createConnection(process.env.DATABASE_URL)
        console.log('at least connected');
        // TODO: for now, putting null as referrer
        // TODO: use prisma in the first place
        console.log('trying to execute sql query...');
        const [rows] = await connection.execute(`
        INSERT INTO pageviews_playground VALUES (null, ${mobile}, '${platform}', ${null});
        `)
        connection.end()
        return res.status(200).json({ status: 'success', referrer })
    } catch (error) {
        return res.status(500).json({ status: 'error' })
    }
}
