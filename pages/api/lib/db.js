import mysql from "serverless-mysql"

const db = mysql({
    config: {
        host: "localhost",
        database: "baalbcms",
        user: "root",
        password: ""
    }
})


export default async function executeQuery({ query, values }) {
    try {
        const results = await db.query(query, values)
        await db.end()
        return results
    } catch (err) {
        return err;
    }
}

