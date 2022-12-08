import Link from "next/link"
import HeaderMe from "../components/me/HeaderMe"
import { userInfoContext } from "../context/contextInfo"
import { look } from "../lib/observerFunctions"
import { IoLogoDiscord, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5"
import { useEffect, useState } from "react"
import ProfileSmall from "../components/me/ProfileSmall"
import Friends from "../components/me/Friends"

const Me = () => {

    let [userInfo] = userInfoContext()


    return (<>
        <HeaderMe />

        <div className="margin-me">
            <div className="row">
                <div className="col-md-7">
                    <ProfileSmall userInfo={userInfo} />
                    <div className="container-me">
                        <p className="title">Tus amig@s</p>
                        <p className="desc">Ve tus amigos en linea</p>

                        <div className="friendsOnline">

                            {userInfo.friends?.length == 0 ? (<p className="nofound">!Opps no tienes amigos <Link href="/social" as="/social">Buscar amigos</Link></p>) : ""}
                            {userInfo.friends?.map((response, key) => (<Friends key={key} response={response} />))}
                        </div>
                    </div>

                    <div className="container-me">
                        <p className="title">Compartir referido</p>
                        <p className="desc">Hola <b>@{userInfo.username}</b>, con este enlace puedes ganar recompensas. Tienes que compartirlo con tus amigos para que se registren con tu enlace</p>
                        <div className="link-referido">
                            <a href="">https://localhost.es/register?refernce=22332323</a>
                        </div>
                        <button className="button-tw">Compartir</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="news-container">
                        <div className="news">
                            <div className="image" style={{ background: "url(/images/notices/2.png)" }}>
                                <div className="information">
                                    <p className="title">Probando las noticias!</p>
                                    <p className="desc">Estamos probando las noticias...</p>

                                    <Link className="view" href="/notices" as="/notices">Leer mas</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-me">
                        <p className="title">Redes sociales</p>
                        <p className="desc">Siguenos en nuestras redes sociales!</p>

                        <div className="redes">

                            <a href=""> <IoLogoInstagram /></a>
                            <a href=""> <IoLogoFacebook /></a>

                            <a href=""><IoLogoDiscord /> </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Me