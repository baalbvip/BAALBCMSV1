import executeQuery from "../lib/db"
import jwt from "jsonwebtoken"

const login = (req, res) => {

    const token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        user: 'rodolfo',
        apellido: 'romerito'
    }, 'secrect')


    res.json({ token })
}

export default login