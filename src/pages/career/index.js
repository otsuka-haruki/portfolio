import Head from "next/head";
import CareerHome from "components/pages/career/CareerHome";

const Index = (props) => {
    const { rows } = props;

    return (
        <>
            <Head>
                <title>Career</title>
            </Head>

            <CareerHome careerData={rows} />
        </>
    )
}

export default Index

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