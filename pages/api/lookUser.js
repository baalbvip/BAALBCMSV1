import executeQuery from "./lib/db"

const lookUser = async (req, res) => {
    let { user } = req.body
    let look = undefined

    if (user !== undefined && user !== "") {
        let response = await executeQuery({ query: `SELECT * FROM users WHERE username LIKE '%${user}%' ORDER BY id DESC LIMIT 1`, values: ""})

        if (response.length) {
            look = response[0].look
        }
    }

    res.json({ look })
}

export default lookUser