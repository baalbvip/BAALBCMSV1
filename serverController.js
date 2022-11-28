import mysql from "mysql"

let credentials = { host: "localhost", user: "root", password: "", database: "baalbcms" }

let pool = await mysql.createPool(credentials)

console.log(process.env.DB_HOST)

export default {
  pool
}