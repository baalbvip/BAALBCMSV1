import axios from "axios"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Friends from "../components/me/Friends"
import HeaderMe from "../components/me/HeaderMe"
import Posts from "../components/me/Posts"
import ProfileSmall from "../components/me/ProfileSmall"

const Profiles = () => {
    const [userInfo, setInfo] = useState([])

    const Router = useRouter()


    useEffect(() => {

        if (Router.asPath.indexOf("[") < 0) {
            let user = Router.asPath
            user = user.replace(/[@/]/g, "")


            axios.post("/api/profile", { user }).then(response => { return response.data }).then(response => {
                setInfo(response)
            })
        }

    }, [Router])

    return (<>
        <HeaderMe />

        <div className="margin-me">

            <div className="row">
                <div className="col-md-7">
                    <ProfileSmall userInfo={userInfo} />

                    <div className="container-posts">
                        <p className="title">Publicaciones</p>
                        {userInfo?.posts?.length >= 1 ? <Posts state={userInfo} /> : ""}
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="container-me">
                        <p className="title">Amigos</p>
                        <span className="desc">Estos son algunos amigos de este usuario</span>

                        <div className="friendsOnline profiles">
                            {userInfo.friends?.length >= 1 ? userInfo.friends?.map((element, key) => (<Friends key={key} response={element} />)) : <p className="nofound">No tiene amig@s</p>}
                        </div>

                    </div>

                    <div className="container-me">
                        <p className="title">Placas</p>
                        <span className="desc">Estas son algunas placas de este usuario</span>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default Profiles