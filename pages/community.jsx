import axios from "axios"
import Link from "next/link"
import { useEffect, useState } from "react"
import DiscoveryUser from "../components/me/DiscoveryUser"
import HeaderMe from "../components/me/HeaderMe"
import Posts from "../components/me/Posts"
import { addClass, getPosts, removeClass } from "../lib/observerFunctions"

const Community = () => {

    const [upload, setUpload] = useState({ text: undefined })
    const [posts, setPosts] = useState([])
    const [myPosts, setMyPosts] = useState([])
    const [discovery, setDiscovery] = useState([])
    const [count, setCount] = useState(0)

    function writing(ev) {
        ev.stopPropagation()
        let { innerText } = ev.target
        let value = innerText
        setUpload({ ...upload, text: value })
    }

    function uploadNow(ev) {
        ev.stopPropagation()
        addClass(ev.target, "await")
        if (upload.text !== undefined) {
            axios.post("/api/uploadPost", upload).then(response => { return response.data }).then(response => {
                removeClass(ev.target, "await")
                setUpload("")

                if (response.status) {
                    document.querySelector(".post .input").innerText = ""
                    setMyPosts(myPosts => [...myPosts, response.post[0]])
                }

            }).catch((err) => {
                removeClass(ev.target, "await")

            })
        } else {
            removeClass(ev.target, "await")
        }
    }



    useEffect(() => {
        (async function () {
            let response = await getPosts("global")
            setPosts(response)

        }())


        axios.post("/api/discovery").then(response => { return response.data }).then(response => {
            setDiscovery(response)
        })



    }, [])



    return (
        <>
            <HeaderMe />

            <div className="margin-me">
                <div className="row">
                    <div className="col-md-7">
                        <div className="container-me">
                            <p className="title" style={{ marginBottom: "5" }}>Publicar</p>
                            <span className="desc">Lee nuestras reglas antes de publicar.</span>
                            <div className="post">
                                <div className="input" contentEditable={true} name="text" onKeyUp={writing}></div>
                                <div className="upload">
                                    <button className="button-upload" onClick={uploadNow}>Publicar <div className="loading"></div></button>
                                </div>
                            </div>
                        </div>

                        <div className="container-posts">
                            <Posts state={{ setMyPosts, myPosts }} />
                            <Posts state={{ setPosts, posts }} />
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="container-me">
                            <p className="title">Lugares interesantes</p>

                            <div className="optionsLugares">
                                <Link href="x"><img src="/images/me/home.png" /></Link>
                                <Link href="x"><img src="/images/me/team.png" /></Link>
                            </div>
                        </div>

                        <div className="container-me">
                            <p className="title">Quizas conoces</p>

                            <div className="friendsOnline profiles discovery">
                                <DiscoveryUser params={discovery} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community