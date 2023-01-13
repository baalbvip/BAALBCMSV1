import executeQuery from "./lib/db"
import { infoUser, myFriends, mySession } from "./lib/users"

export default async function discovery(req, res) {
    let { type, view } = req.body

    if (type == undefined && view == undefined) {
        type = "community"
        view = 0
    }

    let myId = mySession(req)
    let response = []
    let responseFriends = await myFriends("ids", myId)
    responseFriends.push(myId)

    switch (type) {
        case 'community':
            response = await executeQuery({ query: `SELECT username,id,motto,online,look,gender FROM users WHERE id NOT IN(${String(responseFriends)}) ORDER BY rand() LIMIT 2` })
            break;
    }

    res.send(response)
}