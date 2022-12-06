import Link from "next/link"
import HeaderMe from "../components/me/HeaderMe"
import { userInfoContext } from "../context/contextInfo"
import { look } from "../lib/observerFunctions"
import { IoLogoDiscord, IoLogoFacebook, IoLogoInstagram } from "react-icons/io5"
import { useEffect, useState } from "react"

const Me = () => {

    let [userInfo] = userInfoContext()


    return (<>
        <HeaderMe />

        <div className="margin-me">
            <div className="row">
                <div className="col-md-7">
                    <div className="profile-small">
                        <div className="image">
                            <div className="left">
                                <div className="look" style={{ background: `url(${look(userInfo.look, "&size=l&direction=2&action=wav")})` }}></div>
                            </div>
                            <div className="right">
                                <div className="container">
                                    <p className="username">{userInfo.username}</p>
                                    <p className="motto">{userInfo.motto}</p>
                                </div>
                            </div>
                        </div>
                        <div className="wallet">
                            <div className="value credits"><img src="/images/wallet/credits.png" /> {userInfo.credits}</div>
                            <div className="value duckets"><img src="/images/wallet/duckets.png" /> {userInfo.pixels}</div>
                            <div className="value diamond"><img src="/images/wallet/diamond.png" /> {userInfo.points}</div>
                        </div>
                    </div>
                    <div className="container-me">
                        <p className="title">Tus amig@s</p>
                        <p className="desc">Ve tus amigos en linea</p>

                        <div className="friendsOnline">

                            {userInfo.friends?.length == 0 ? (<p className="nofound">!Opps no tienes amigos <Link href="/social" as="/social">Buscar amigos</Link></p>) : ""}
                            {userInfo.friends?.map((response, key) => (
                                <div className="friend" key={key}>
                                    <div className="look" style={{ background: `url(${look(response.look, "&size=m&direction=2&action=wav")})` }}></div>
                                    <Link href="#" className="name">@{response.username.length > 7 ? response.username.substring(0, 7) + "..." : response.username}</Link>
                                    <i className="online">{response.online}</i>
                                </div>
                            ))}
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