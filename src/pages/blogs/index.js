import Head from 'next/head';
import Home from 'components/pages/blogs/Home';

const Index = (props) => {
    const { result } = props;

    return (
        <>
            <Head>
                <title>ブログ | 大塚遥輝のポートフォリオ</title>
            </Head>

            <Home />
        </>

    )
}

export default Index

export async function getServerSideProps() {
    const { MongoClient } = require('mongodb');
    const userName = process.env.MONGODB_USERNAME;
    const password = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const uri = `mongodb+srv://${userName}:${password}@${url}/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    const result = [];
    try {
        await client.connect();
        const database = client.db('blogs');
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
        }
    }
}