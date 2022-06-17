// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    const { userName, password } = req.body;
    const userNameDB = process.env.USER_NAME;
    const passwordDB = process.env.PASSWORD;
    const userAuthenticated = (userName === userNameDB && password === passwordDB) ? true : false;

    res.status(200).json({ auth: userAuthenticated });
}
