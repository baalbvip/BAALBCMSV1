import executeQuery from "./lib/db"

const Tops = async (req, res) => {

    var response = {}

    let need = "username,credits,pixels,points,look,gender,last_login,rank,motto"
    let topCredits = await executeQuery({ query: `SELECT ${need} FROM users ORDER BY credits DESC LIMIT 10` })
    response.credits = topCredits

    let topPixels = await executeQuery({ query: `SELECT ${need} FROM users ORDER BY pixels DESC LIMIT 10` })
    response.duckets = topPixels

    let topPoints = await executeQuery({ query: `SELECT ${need} FROM users ORDER BY points DESC LIMIT 10` })
    response.diamond = topPoints

    res.send(response)
}

export default Tops