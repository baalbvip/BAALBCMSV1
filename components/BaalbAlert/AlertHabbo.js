import React, { useEffect, useState } from "react"
import { useAlert } from "./userAlert"

let alerts = "xd"

function AlertHabbo() {
    
    let [test, setTest] = useState([])
    useEffect(() => {

        console.log(alerts)
        setTest(alerts)
    }, [alerts])

    return (<p>{test}</p>)

    function newAlert() {


    }

  
}



export default AlertHabbo



