import Head from "next/head";
import CareerHome from "components/pages/career/CareerHome";

const Index = ({ lang }) => {
    // const { result } = props;
    // const data = JSON.parse(result);

    return (
        <>
            <Head>
                <title>経歴 | 大塚遥輝のポートフォリオ</title>
            </Head>

            <CareerHome
                // careerData={data}
                lang={lang}
            />
            <></>
        </>
    )
}

export default Index

// export async function getStaticProps() {
    // const { MongoClient } = require('mongodb');
    // const userName = process.env.MONGODB_USERNAME;
    // const password = process.env.MONGODB_PASSWORD;
    // const url = process.env.MONGODB_URL;
    // const uri = `mongodb+srv://${userName}:${password}@${url}/?retryWrites=true&w=majority`;
    // const client = new MongoClient(uri);

    // const result = [];
    // try {
    //     await client.connect();
    //     const database = client.db('career');
    //     const ja = database.collection('ja');
    //     const cursor = ja.find({});
    //     await cursor.forEach(element => {
    //         result.push(element);
    //     });
    // } finally {
    //     await client.close();
    // }

    // return {
    //     props: {
    //         result: JSON.stringify(result)
    //     },
    //     revalidate: 60
    // }
//     const admin = require('firebase-admin');
//     const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
// if (admin.apps.length === 0) {
//     admin.initializeApp({
//         credential: admin.cert({
//         "type": "service_account",
//         "project_id": "portfolio-b2855",
//         "private_key_id": "5bb3a395812d887305129be3e8453471e7513c73",
//         "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC+IgwppwWYU65G\n5Px3yeUnQzS2Il8lLq+Z7Di7JUiFVskiCGveQ2KaKto2xEobvt8XlixlJ75S/6td\nywaxEVG4cpYkUvV+JHEr5E2fSWChmWT6RbgbIwVYi82GAJMJKZifiU8HcyVVBs2B\nO8GVCRq+HCfwGhKu0VgMbTroIAkxtBRt0BA1qtxShMm65+GKWQesxXlAvXgWfNrg\niFI8eNa2Ljep+AtA65iWdQxtpDDg9lSZ4tcAOvfDplIzNcM90XltQV/m1qtEG7eg\n7V2WygubmYHYyNTu0Ik8RxFEi3JqXLzVqvTlERkJF6FuEr9TSWGtAj3LRFASLV2P\n6rc70TbzAgMBAAECggEAM1vxGyNB0KbyEbZzOExyOQvfZj+coeediZ+Up4DnuRT7\nWdUahjx/mxNuRJL7Tclea/ml3mFA+RyVBs377cK253MUeZVrOPrRE0ElcpyYnK5Z\n530DwVjRbdy91K+9CCGTV6z4ixOghvpCcuFYZlDCR45Ff4cbetuTxC+RVPiqYyFB\nkh5hP4KzjRtsKGJ8biHJnQuV8CTvwM6Zri+Jh894TARLdiVO2pHI3yw7ifIhzOyS\n7xDPUP4fIqN6LEJV0YoHafadkuXC/L20+51njSsj67JG93nvkuccfXXLFEaZ7f4L\nDB0Klbuvb/jErd/t7IAoPLXTU3QUrJLqos93BarlYQKBgQDi+MlmFlQCyLcUsOZK\nfEuZcXqyvowUvWCMbHE4XDBBZAtLvfcxQs9GkUcTq+wXMJEgizXPFVxLNLmBFYs3\nnmETn4NZ7DZuhQLfoNPD0/f4hNeOWfM9Fpvp3uwi8Fn0LuZ4OOrri0vSb6ZukU9d\nToHKyqJeHT/EMYDGa529d/ip0QKBgQDWcyHjk61lm87CTW1/2c1m2DQhSHeVGNdv\n3G+4m4lo3Hl92qsKfvntGUdTYVBGeTFka2cFQnAxBd73U0Aroje9pz9ENgL975L7\n33/sS41a/ZBiYnavntgRSxKXEj37+ZuXQO/kSnPjRd6+lohbUSzN8/jw6bwuvY4E\nZbSeagCBgwKBgQDSjI1vuUjHqGBFvnBzKmiK+D0lMSQLXT4CJdrFuKc/Ecp0wc1c\nkihrwvrXYcXKIVCPivQonR0X2to2x8B0oORW6sNTmI9J6POoda3cXHcMwFaiBAlj\nYuTRh+0v4BziKtu7LLmoNXjpxo7yxLOFz/0RHPaQLbvoiS93YX9bsr4m8QKBgBFV\nMusC96PbyQVZXr1TrE9gsC30fn3ViSwoY/tGzv9juooaj3KEusyYG3S4y9U2XHCi\nYaxCJ3E+6TuSRgCA1wKELw/jUbCWmYm0EdHWdXFiRzY8gR1GuG4FZFZDijEAhrvd\n6sXH4r/+2LcM0a6XzAhFbNyD98rLVVwzoDqhlLLjAoGBALilBr9Yqw/Audfo1mX1\nQ0omWEQvn+gzcINvowKJIMdxQXf/7xlE1ka19kKaj11jphpigpEBJA/UqU2Rzaia\nuVgefbesoB+qbMPpoPcTC/urWUknrJ4e4CWLy0a81YKYy5247fRfgdr0r0nMb9N7\nhFEOpNUFakAxJlWgnT3DzDQY\n-----END PRIVATE KEY-----\n",
//         "client_email": "firebase-adminsdk-pc7k1@portfolio-b2855.iam.gserviceaccount.com",
//         "client_id": "105087138400344707082",
//         "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//         "token_uri": "https://oauth2.googleapis.com/token",
//         "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//         "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-pc7k1%40portfolio-b2855.iam.gserviceaccount.com"
//         })
//     });
// }

//     const serverDb = getFirestore();

//     const snapshot = await serverDb.collection('career').get();
//     snapshot.forEach(doc => {
//     console.log(doc.id, '=>', doc.data());
//     });
//     return {
//         props: {
//             name: 'john doe'
//         }
//     }
// }