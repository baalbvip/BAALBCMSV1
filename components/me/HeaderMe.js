import Head from "next/head"
import Link from "next/link"
import { userInfoContext } from "../../context/contextInfo"
import { look } from "../../lib/observerFunctions"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
const HeaderMe = () => {
    let defaultPages = { my: false, me: false, community: false, tops: false, team: false }
    const [pageActive, setPageActive] = useState(defaultPages)
    const [userInfo] = userInfoContext()
    const Router = useRouter()

    // SET ACTIVE IN PAGE

    const resetPageActive = () => {
        setPageActive(defaultPages)
    }

    useEffect(() => {
        let { pathname } = Router

        if (pathname) {
            pathname = pathname.split("/")

            setPageActive({ ...pageActive, [pathname[1]]: 'active' })
        }

    }, [Router.pathname])

    return (<>
        <Head>
            <link rel="icon" href="/favicon.png"></link>
        </Head>
        <div className="header-me">
            <div className="image">
                <div className="image-left"></div>

                <div className="center">
                    <img src="/images/logoindex.png" />

                    <p>Hay 10 usuarios jugando!</p>
                </div>
            </div>
        </div>

        <div className="header-me-bottom">
            <div className="options">
                <div className="space">
                    <Link className={`button ${pageActive.my}`} href="/@baalb" as={`/@${userInfo?.username}`}> <img className="look" src={look(userInfo.look)} /> <span>{userInfo?.username}</span></Link>
                    <Link className={`button ${pageActive.me}`} href="/me" as="/me"><img src="/images/me/home.png" /> <span>Home</span></Link>
                    <Link className={`button ${pageActive.community}`} href="/community" as="/community"><img src="/images/me/community.png" /> <span>Comunidad</span></Link>
                    <Link className={`button ${pageActive.tops}`} href="/tops" as="/tops"><img src="/images/me/tops.png" /> <span>Tops</span></Link>
                    <Link className={`button ${pageActive.team}`} href="/team" as="/team"><img src="/images/me/team.png" /> <span>Equipo</span></Link>
                </div>
                <div className="space">
                    <Link className="game" href="/game" as="/game">Jugar ahora!</Link>
                </div>
            </div>
        </div>
    </>)
}

export default HeaderMe