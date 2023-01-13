import executeQuery from "./lib/db"

const infoTeam = (fromId, to_id) => {
    return new Promise(async (resolve, reject) => {
        let response = []
        if (fromId !== undefined && to_id !== undefined) {
            let ranks = await executeQuery({ query: `SELECT * FROM ranks WHERE (id >= ${fromId} and id <= ${to_id}) ORDER BY id DESC`, values: "" })
            if (ranks.length) {
                response = ranks

                for (var i = 0; i < response.length; i++) {
                    let rankId = response[i].id
                    let users = await executeQuery({ query: `SELECT username, rank, last_online, last_login, look,motto,gender,online FROM users WHERE rank='${rankId}'`, values: "" })

                    response[i].users = users

                    if (response[i].users.length == 0) {
                        response[i].users = [{ nofound: "Aun no hay usuarios en este rango." }]
                    }


                }
            }
        }

        if (response) {
            resolve(response)
        } else {
            reject("vacio")
        }
    })

}

const getTeam = async (req, res) => {
    const { params } = req.body
    let response = []
    switch (params) {
        case 'admin':
            response = await infoTeam(10, 17)
            break;

        case 'alfa':
            response = await infoTeam(2, 9)
            break;
    }

    res.send(response)
}

export default getTeam