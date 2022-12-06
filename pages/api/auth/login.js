import { compare } from "bcrypt"
import executeQuery from "../lib/db"
import { createSession } from "../lib/users"

const login = async (req, res) => {
    let { user, password } = req.body
    let ip = req.connection.remoteAddress

    let status = false
    let msg, msg_type

    if (user !== undefined && user !== "" && password !== undefined && password !== "") {
        let infoUser = await executeQuery({ query: `SELECT * FROM users WHERE username='${user}'`, values: "" })

        if (infoUser.length) {
            let checkPassword = await compare(password, infoUser[0].password)

            if (checkPassword == true) {
                // LEST GO PASSWORD VERIFIED
                let token = createSession({ user_id: infoUser[0].id, ip })
                res.setHeader("Set-Cookie", token)
                status = true

                msg = "Has iniciado sesion"
                msg_type = "success"
            } else {
                msg = "Tu contraseña no es correcta"
                msg_type = "error"
            }
        } else {
            msg = "Este usuario no existe"
            msg_type = "error"
        }
    } else {
        msg = "Has dejado campos vacios"
        msg_type = "error"
    }


    res.json({ status: status, msg, msg_type })
}

export default login