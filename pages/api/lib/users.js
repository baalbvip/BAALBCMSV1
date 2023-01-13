import executeQuery from "./db"
import jwt, { verify } from "jsonwebtoken"
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
    let response = await executeQuery({ query: `SELECT id,username,credits,pixels,points,mail,look,account_created,motto,gender,rank,online FROM users WHERE (id='${user_id}' or username='${user_id}')` })
    return response[0]
}

export const postsUser = async (user_id, last = undefined) => {

    if (last == undefined) {
        let response = await executeQuery({ query: `SELECT * FROM cms_posts WHERE owner_id='${user_id}'` })

        let info = await infoUser(user_id)

        for (var i = 0; i < response.length; i++) {
            response[i].user = info
        }

        return response
    } else {

    }
}

export const friendsUser = async (user_id, watch = undefined) => {
    if (watch == undefined) {
        let response = await executeQuery({ query: `SELECT * FROM messenger_friendships WHERE user_one_id='${user_id}' or user_two_id='${user_id}'` })
        let rows = response.length

        let newResponse = []

        for (var i = 0; i < rows; i++) {
            let responseUser, searchId

            if (response[i].user_one_id !== user_id) {
                searchId = response[i].user_one_id
            } else {
                searchId = response[i].user_two_id
            }

            responseUser = await infoUser(searchId)

            newResponse.push(responseUser)

        }

        return newResponse
    } else {

    }
}

export function mySession(req) {
    let myId = false
    let { session } = req.cookies
    if (session) {
        let responseSession = verify(session, process.env.keySession)
        myId = responseSession.params.user_id
    }
    return myId
}

export async function myFriends(type, user_id) {
    let response = []
    switch (type) {
        case 'ids':
            var queryResponse = await executeQuery({ query: `SELECT * FROM messenger_friendships WHERE (user_one_id='${user_id}' or user_two_id='${user_id}')` })

            for (var i = 0; i < queryResponse.length; i++) {
                if (queryResponse[i].user_one_id !== user_id) {
                    response.push(queryResponse[i].user_one_id)
                } else {
                    response.push(queryResponse[i].user_two_id)
                }
            }

            break;
    }

    return response
}