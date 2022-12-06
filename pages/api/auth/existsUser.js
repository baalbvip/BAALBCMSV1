import { checkUsedUsername } from "../lib/users";
import executeQuery from "../lib/db"

const existUser = async (req, res) => {
    let { user } = req.body;

    if (user !== undefined) {
        let response = await checkUsedUsername(user)
        res.status(200).json(response)
    }
}


export default existUser