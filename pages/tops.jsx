import axios from "axios"
import { useEffect, useState } from "react"
import LoadingTops from "../components/loading/LoadingTops"
import HeaderMe from "../components/me/HeaderMe"
import TopUsers from "../components/me/TopsUser"

const Tops = () => {

    let [tops, setTops] = useState([])
    let [isLoading, setLoading] = useState(false)

    useEffect(() => {
        axios.get("/api/tops").then(response => { return response.data }).then(response => {
            setTops(response)
            setLoading(true)
        })
    }, ["enter"])


    return (<>

        <HeaderMe />

        <div className="margin-me">


            <div className="container-tops">
                <div className="row">
                    <div className="col-md-4">

                        <div className="credits tops">
                            <p className="title"><img src="/images/wallet/credits.png" /> Creditos</p>

                            <div className="users">
                                {isLoading == true ? <TopUsers params={tops.credits} whatIs={"credits"} /> : <LoadingTops />}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="duckets tops">
                            <p className="title"><img src="/images/wallet/duckets.png" /> Duckets</p>

                            <div className="users">
                                {isLoading == true ? <TopUsers params={tops.duckets} whatIs={"points"} /> : <LoadingTops />}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="diamond tops">
                            <p className="title"><img src="/images/wallet/diamond.png" /> Diamantes</p>

                            <div className="users">
                                {isLoading == true ? <TopUsers params={tops.diamond} whatIs={"pixels"} /> : <LoadingTops />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default Tops