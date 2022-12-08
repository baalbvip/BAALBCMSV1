import { friendsUser, infoUser, postsUser } from "./lib/users"

const profile = async (req, res) => {
    let { user } = req.body
    let response = {}
    if (user) {
        response = await infoUser(user)
        let userId = response.id;
        let posts = await postsUser(userId)
        response.posts = posts
        let friends = await friendsUser(userId)
        response.friends = friends
    }

    res.send(response)
}

export default profile