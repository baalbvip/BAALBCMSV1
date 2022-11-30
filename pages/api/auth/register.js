import bcrypt from "bcrypt"
import { serialize } from "cookie";

const register = async (req, res) => {
    let { user, email, pw, pw2 } = req.body;

    console.log(req.body)

    res.send("xd")
}

export default register