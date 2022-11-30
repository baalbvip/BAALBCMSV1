export const validEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email)
}

export const addClass = (target, value) => {
    target.classList.add(value)
}

export const removeClass = (target, value) => {
    target.classList.remove(value)
}

export const checkPassword = (pw) => {
    return pw.length >= 6
}

export const compareStrings = (string1, string2) => {
    return string1 === string2
}

