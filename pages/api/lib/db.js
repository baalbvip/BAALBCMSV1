import { createConnection, createPool } from "mysql2/promise";


const conn = createPool({
    host: process.env.database.host,
    user: process.env.database.user,
    password: process.env.database.password,
    database: process.env.database.database
})





export default async function executeQuery({ query, values }) {
    try {
        let response = await conn.query(query, values)
        return response[0]
    } catch (err) {
        console.log(err)
    }

}
