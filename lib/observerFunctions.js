import { jwtVerify } from "jose"

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

export const timeNow = (type) => {
    switch (type) {
        case 's':
            return Math.floor(new Date() / 1000);
            break
    }
}


export const filterUsername = (string) => {

    string = string.slice(0, 15)
    return string.replace(/ /g, "").replace(/[^0-9A-Za-z]/, "")
}

export const checkSession = async (cookie) => {
    try {
        let { payload } = await jwtVerify(cookie, new TextEncoder().encode(process.env.keySession))
        return payload
    } catch {
        let payload = undefined
        return payload
    }
}



export const look = (look, options = undefined) => {
    switch (options) {
        case undefined:
            return process.env.apiLook + look + "&size=n&direction=2&&headonly=1"
            break;

        default:
            return process.env.apiLook + look + options
        break
    }
}

export const toastOptions = (response) => {
    return { hideProgressBar: true, autoClose: 1000, type: response.msg_type }
}