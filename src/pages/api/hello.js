// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

require('dotenv').config();

export default function handler(req, res) {
  async function getResult() {
    const mysql = require('mysql2/promise');
    try {
      const connection = await mysql.createConnection(process.env.DATABASE_URL);
      const [rows] = await connection.query('SELECT * FROM portfolio_career');
      res.status(200).json({ result: rows });
    } catch (error) {
      console.log(error);
      res.status(200).json({ result: [{ organization: 'Error' }] })
    }
    connection.end();
  }

  getResult();
}
