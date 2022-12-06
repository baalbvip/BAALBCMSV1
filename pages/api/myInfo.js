import { serialize } from "cookie"
import { verify } from "jsonwebtoken"
import executeQuery from "./lib/db"
import { infoUser as UserInfo } from "./lib/users"


const myInfo = async (req, res) => {
    let { session } = req.cookies
    let info = {}
    if (session) {
        let verifyToken = verify(session, process.env.keySession)
        let { user_id } = verifyToken.params
        let infoUser = await executeQuery({ query: `SELECT username,look,mail,account_created,motto,rank,credits,pixels,points FROM users WHERE id='${user_id}'`, values: "" })
        if (infoUser.length) {
            info = infoUser[0]

            // SEARCH YOU FRIENDS


            let friends = await executeQuery({ query: `SELECT user_one_id,user_two_id FROM messenger_friendships WHERE user_one_id='${user_id}' OR user_two_id='${user_id}'` })
            let friendsResponse = await (async function () {
                let total = friends.length
                let response = [];

                if (total) {
                    for (var i = 0; i < total; i++) {
                        let searchId

                        if (friends[i].user_one_id !== user_id) {
                            searchId = friends[i].user_one_id
                        } else {
                            searchId = friends[i].user_two_id
                        }


                        response.push(await UserInfo(searchId))
                    }
                }

                return response
            }())

            info = { ...info, friends: friendsResponse }
        } else {


        }

    }

    res.status(200).send(info)
}

export default myInfo