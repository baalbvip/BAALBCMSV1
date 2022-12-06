import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import LoadingTeam from "../components/loading/loadingTeam"
import HeaderMe from "../components/me/HeaderMe"
import TeamSpace from "../components/me/TeamSpace"
import { Suspense } from "react"
import Link from "next/link"

const Team = () => {
    let [teams, setTeams] = useState([])
    const Router = useRouter()
    let { params } = Router.query

    useEffect(() => {
        if (params?.length || Router.asPath.split("/").length == 2) {
            if (params == undefined) {
                params = "admin"
            }

            axios.post("/api/getTeam", { params }).then(response => { return response.data }).then(response => {
                setTeams(response)
            })
        }

    }, [params])


    return (<>
        <HeaderMe fallback={<p>xd</p>} />
        <div className="margin-me">
            <div className="row">
                <div className="col-md-7">
                    <div className="container-team">
                        <TeamSpace props={teams} />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="container-me">
                        <p className="title">Informacion</p>
                        <span className="desc">Este es el equipo administrativo de {process.env.sitename}, estas personas estan certificadas a ayudarte o moderar dentro de el hotel, recuerda que ninguna de estas personas verificadas te pedira informacion privada ejemplo: Contrasenas, Correos, Edad, Ubicacio!</span>
                    </div>

                    <div className="container-me">
                        <p className="title">Interesante</p>
                        <span className="desc">Tambien puedes ver los otros miembros del equipo</span>
                        <div className="options-team">
                            <Link href="/team/admin" as="/team/admin">Equipo Staff</Link>
                            <Link href="/team/alfa" as="/team/alfa">Equipo Alfa</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Team