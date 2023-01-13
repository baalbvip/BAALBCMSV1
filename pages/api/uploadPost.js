import { verify } from "jsonwebtoken"
import { timeNow } from "../../lib/observerFunctions"
import executeQuery from "./lib/db"
import { likeExists, likesPosts } from "./lib/posts"
import { infoUser } from "./lib/users"


export default async function uploadPost(req, res) {
    let { text } = req.body
    let { session } = req.cookies
    let status, msg, msg_type, post

    let mySession = verify(session, process.env.keySession)

    if (mySession.params?.user_id) {
        let { user_id } = mySession.params

        let upload = await executeQuery({ query: `INSERT INTO cms_posts (owner_id,desc_text,time) VALUES ('${user_id}','${text}','${timeNow("s")}')` })
        if (upload.insertId) {
            status = true
            let infoPost = await executeQuery({ query: `SELECT * FROM cms_posts WHERE id='${upload.insertId}'` })
            post = infoPost
            post[0].user = await infoUser(post[0].owner_id)
            post[0].likes = await likesPosts(post[0].id)
            post[0].youLike = await likeExists(user_id, post[0].id)
        } else {
            msg = "!Opps ha sucedido un error al subir tu post"
            msg_type = "error"
        }
    }


    res.send({ status, msg, msg_type, post })
}