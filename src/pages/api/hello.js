// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config();

export default function handler(req, res) {
  async function getResult() {
    const mysql = require('mysql2/promise');
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows] = await connection.query('SELECT * FROM portfolio_career');
    connection.end();
    res.status(200).json({ result: rows });
  }

  getResult();
}
