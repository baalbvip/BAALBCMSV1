import { timeNow } from "../../lib/observerFunctions"
import executeQuery from "./lib/db"
import { youLike } from "./lib/posts"
import { mySession } from "./lib/users"

export default async function react(req, res) {
    let msg, msg_type, react, likes, go = undefined
    let { type, id } = req.body
    let myId = mySession(req)

    if (myId && type && id) {
        react = await executeQuery({ query: `SELECT * FROM cms_likes WHERE owner_id='${myId}' and post_id='${id}' and type='${type}'` })
        react = react.length

        if (react >= 1) {
            go = await executeQuery({ query: `DELETE FROM cms_likes WHERE owner_id='${myId}' and type='${type}' and post_id='${id}'` })
            react = false
        } else {
            go = await executeQuery({ query: `INSERT INTO cms_likes (owner_id,type,post_id,time) VALUES (?,?,?,?) `, values: [myId, type, id, timeNow("s")] })
            react = true
        }

        if(go !== undefined){
        likes = await executeQuery({ query: `SELECT COUNT(*) as likes FROM cms_likes WHERE post_id='${id}'` })
        }


    } else {
        msg_type = "error"
        msg = "!Opps error al enviar tu peticion"
    }


    res.send({ msg, msg_type, react, likes: likes[0]?.likes })
}


