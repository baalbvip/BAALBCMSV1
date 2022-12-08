import { verify } from "jsonwebtoken"
import { getPosts } from "./lib/posts"

export default async function posts(req, res) {
    let { from, last } = req.body

    let { session } = req.cookies
    var user_id
    if (session) {
        let responseSession = verify(session, process.env.keySession)
        user_id = responseSession.params.user_id
    }

    let response = await getPosts({ from, last, user_id })
    res.send(response)
}