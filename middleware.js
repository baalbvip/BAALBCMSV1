import { NextResponse } from "next/server";
import { checkSession } from "./lib/observerFunctions";

export const middleware = async (request) => {
    let { href, origin } = request.nextUrl

    let logged = false
    let myToken, userId;
    try {
        myToken = request.cookies.get("session").value
    } catch (err) {
        myToken = undefined
    }


    if (myToken !== undefined) {
        logged = await checkSession(myToken)
        if (logged !== undefined) {
            logged = logged.params
            userId = logged.user_id
        }
    }

    if (href === origin + "/me") {
        if (userId == undefined) {
            return NextResponse.redirect(new URL("/", request.url))
        }
    }


    if (href == origin + "/" || href == origin + "/register" || href.includes(origin + "/register/")) {
        if (userId !== undefined) {
            return NextResponse.redirect(new URL("/me", request.url))
        }
    }



    return NextResponse.next()
}