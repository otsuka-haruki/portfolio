import { useState } from 'react';
import { Button, Typography, Box, CircularProgress } from '@mui/material';

const Index = (props) => {
  const firstRow = props.rows[0];

  return (
    <>
      <Button variant="outlined" disabled>Action</Button>
      <Typography variant="body1">{firstRow.organization}</Typography>
    </>
  )
}

export default Index;

export async function getServerSideProps() {
  const mysql = require('mysql2/promise');
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);
    const [rows] = await connection.query('SELECT * FROM portfolio_career');
    connection.end();
    return {
      props: {
        rows
      }
    }
  } catch (error) {
    console.log('Error!');
    console.log(error);
  }
}