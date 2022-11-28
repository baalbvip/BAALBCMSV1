import express from "express"
import cors from "cors"
import conn  from "./serverController"

const app = express()

app.use(cors())
app.use(express.json())

/*

conn.query("SELECT * FROM users", (err, res) => {
    if (err) {

    } else {
        console.log(res)
    }
})*/


const port = 3001;

app.listen(port, () => {
    console.log(`escuchando puerto ${port}`)
})
