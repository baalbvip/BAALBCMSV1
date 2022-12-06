import { useState } from "react"

export const useAlert = () => {
    const [Alerts, setAlerts] = useState([])

    return Alerts
}