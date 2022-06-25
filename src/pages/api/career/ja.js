export default function handler(req, res) {
    const getCareerJaData = async () => {
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
            res.status(200).json(result);
        } finally {
            await client.close();
        }
    }

    getCareerJaData();
}
