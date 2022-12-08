import executeQuery from "./db"
import { infoUser } from "./users"


export async function likeExists(user_id, post_id, type = "post") {
    let response = false
    if (user_id !== undefined) {
        response = await executeQuery({ query: `SELECT * FROM cms_likes WHERE type='${type}' and post_id='${post_id}' and owner_id='${user_id}'` })

        if (response.length) {
            response = true
        } else {
            response = false
        }
    } else {
        response = false
    }


    return response
}

export async function youLike(user_id, post_id, type) {
    let response = await executeQuery({ query: `SELECT * FROM cms_likes WHERE owner_id='${user_id}' and post_id='${post_id}' and type='${type}'` })
    return response.length
}

export async function getPosts({ from, last = false, user_id = undefined }) {
    let response = []
    if (from == "global" && last !== true) {
        response = await executeQuery({ query: "SELECT * FROM cms_posts ORDER BY id DESC LIMIT 10" })

        let count = response.length

        for (var i = 0; i < count; i++) {
            let { owner_id } = response[i]

            response[i].user = await infoUser(owner_id)
            response[i].youLike = await likeExists(user_id, response[i].id, "post")
        }

    }

    if (from == "profiles" && last !== true) {

    }

    return response
}