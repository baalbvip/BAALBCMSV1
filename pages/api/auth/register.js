import bcrypt from "bcrypt"
import { serialize } from "cookie";
import { compareStrings, filterUsername, timeNow } from "../../../lib/observerFunctions";
import { authTicket, checkUsedEmail, checkUsedUsername, createSession } from "../lib/users";
import executeQuery from "../lib/db";

const goRegister = async (params) => {
    let { user, email, pw } = params.body
    let ip = params.connection.remoteAddress

    let pwHash = await bcrypt.hash(pw, 10)
    let insert = await executeQuery({ query: `INSERT INTO users (username,password,mail,account_created,auth_ticket,ip_register) VALUES ('${filterUsername(user)}','${pwHash}','${email}','${timeNow('s')}','${authTicket()}','${ip}')`, values: "" })
    return insert.insertId
}


const register = async (req, res) => {
    let { user, email, pw, pw2 } = req.body

    let ip = req.connection.remoteAddress


    let status, msg, msg_type = undefined;
    if (user !== undefined && email !== undefined && pw !== undefined && pw2 !== undefined) {
        let usedUsername = await checkUsedUsername(user)
        if (!usedUsername.used) {
            let usedEmail = await checkUsedEmail(email)
            if (!usedEmail.used) {
                if (compareStrings(pw, pw2)) {
                    if (pw.length >= 6) {
                        let register = await goRegister(req)
                        if (register) {
                            let session = createSession({ user_id: register, ip })

                            res.setHeader("Set-Cookie", session)
                            if (session) {
                                status = true
                            }
                        } else {
                            msg = "Opps error al intentar registrarte"
                            msg_type = "error"
                        }
                    } else {
                        msg = "Tu contrasena es muy corta"
                        msg_type = "error"
                    }
                } else {
                    msg = "Tus contrasenas no son iguales"
                    msg_type = "error"
                }
            } else {
                msg = `${email} Esta siendo utilizado`
                msg_type = "error"
            }
        } else {
            msg = `${user} Esta siendo utilizado`
            msg_type = "error"
        }
    } else {
        msg = "Has dejado campos vacios"
        msg_type = "error"
    }

    res.json({ status, msg, msg_type })
}

export default register