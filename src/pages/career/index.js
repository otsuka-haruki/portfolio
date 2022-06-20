import Head from "next/head";
import CareerHome from "components/pages/career/CareerHome";

const Index = (props) => {
    const { result } = props;
    const data = JSON.parse(result);

    return (
        <>
            <Head>
                <title>経歴</title>
            </Head>

            <CareerHome careerData={data} />
        </>
    )
}

export default Index

export async function getStaticProps() {
    const { MongoClient } = require('mongodb');
    const userName = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const uri = `mongodb+srv://${userName}:${password}@${url}/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    const result = [];
    try {
        await client.connect();
        const database = client.db('career');
        const ja = database.collection('ja');
        const cursor = ja.find({});
        await cursor.forEach(element => {
            result.push(element);
        });
    } finally {
        await client.close();
    }

    return {
        props: {
            result: JSON.stringify(result)
        },
        revalidate: 60
    }
}