import Link from "next/link"
import { look } from "../../lib/observerFunctions"

const Friends = (props) => {
    let { response } = props
    return (
        <div className="friend">
            <div className="look" style={{ background: `url(${look(response.look, "&size=m&direction=2&action=wav")})` }}></div>
            <Link href="#" className="name">@{response.username.length > 7 ? response.username.substring(0, 7) + "..." : response.username}</Link>
            <i className="online">{response.online}</i>
        </div>
    )
}


export default Friends