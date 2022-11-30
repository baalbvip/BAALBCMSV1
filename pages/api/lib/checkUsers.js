import executeQuery from "./db"

export const checkUsedUsername = async (username) => {
    let used = false;
    await executeQuery({ query: `SELECT * FROM users WHERE username='${username}'`, values: "" }).then(response => {
        if (response.length !== 0) {
            used = true
        } else {
            used = false
        }
    })
    return { used }
}