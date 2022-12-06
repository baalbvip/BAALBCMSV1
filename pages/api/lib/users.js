import executeQuery from "./db"
import jwt from "jsonwebtoken"
import { serialize } from "cookie";

export const checkUsedUsername = async (username) => {
    let used = false;
    await executeQuery({ query: `SELECT * FROM users WHERE username='${username}'`, values: "" }).then(response => {
        if (response.length !== 0) {
            used = true
        } else {
            used = false
        }
    })
    return { used }
}

export const checkUsedEmail = async (mail) => {
    let used = false;
    await executeQuery({ query: `SELECT * FROM users WHERE mail='${mail}'`, values: "" }).then(response => {
        if (response.length !== 0) {
            used = true
        } else {
            used = false
        }
    })
    return { used }
}

export const authTicket = () => {
    let AuthCode = "12345678910$qwertyuiiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM$$$"
    let lengthCode = AuthCode.length
    let result = "";

    for (let i = 0; i < 25; i++) {
        result += AuthCode.charAt(Math.floor(Math.random() * lengthCode))
    }

    result = "BaalbCMS_" + result;

    return result;
}

export const createSession = (params) => {

    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        params
    }, process.env.keySession)

    const cookie = serialize("session", token, {
        maxAge: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        path: "/"
    })


    return cookie
}


export const infoUser = async (user_id) => {
    let response = await executeQuery({ query: `SELECT id,username,credits,points,mail,look,account_created,motto,gender,rank,online FROM users WHERE id='${user_id}'`, values: "" })
    return response[0]
}