import Link from "next/link";
import { useEffect, useState } from "react";
import { look } from "../../lib/observerFunctions";
import LoadingTeam from "../loading/loadingTeam";

const TeamSpace = (params) => {
    const [isLoading, setLoading] = useState(false)
    const { props } = params;
    useEffect(() => {
        if (props.length) {
            setLoading(true)
        }
    }, [props])


    return (<>

        {<LoadingTeam loading={isLoading} />}
        {
            props.map((element, key) => (
                <div className="team" key={key}>
                    <p className="title">{element.name}</p>
                    <img className="badge" src={"/images/team/" + element.badgeid} />

                    <div className="row">
                        {element.users.map((user, key) => (
                            user.nofound == undefined ?
                                <div className="users col-md-6" key={key}>

                                    <div className="photo" style={{ background: `url(${look(user.look, "&size=m&direction=2&action=wav")})` }}>
                                    </div>

                                    <div className="info">
                                        <Link className="username" href={`@${user.username}`} as={`@${user.username}`}>@{user.username}</Link>
                                        <span className="motto">{user.motto.length >= 5 ? user.motto.substring(0, 25) + "..." : user.motto}</span>
                                        <span className="timeview">Ultima Conexion: {user.online == 0 ? user.last_login : <b>Jugando!</b>}</span>
                                    </div>


                                </div>
                                : <p className="nofound" key={key}>{user.nofound}</p>

                        ))}
                    </div>

                </div>
            ))
        }</>)

}

export default TeamSpace