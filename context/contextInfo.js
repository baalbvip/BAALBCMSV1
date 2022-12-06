
import axios from "axios"
import { getCookie } from "cookies-next"
import React, { useContext, useEffect, useState } from "react"

const ContextInfo = React.createContext()

export const MyInfo = (props) => {
    const [userInfo, setInfo] = useState({username:"Guest"})
    let session = getCookie("session")



    // SI ANDO LOGEADO ENVIAME LA SESION

    useEffect(() => {
        if (session) {
            axios.post("/api/myInfo").then(response => { return response.data }).then(response => {
                setInfo(response)
            })
        }
    }, ["enter"])



    return <ContextInfo.Provider value={[userInfo]} {...props}></ContextInfo.Provider>
}


export const userInfoContext = () => {
    return useContext(ContextInfo)
}