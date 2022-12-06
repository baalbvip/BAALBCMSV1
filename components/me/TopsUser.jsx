import Link from "next/link"
import { look } from "../../lib/observerFunctions"


const TopUsers = (props) => {
    let { params, whatIs } = props

    return params?.map((element, key) => (
        <div className="top" key={key}>
            <div className="photo" style={{ background: `url(${look(element.look)})` }}></div>

            <div className="info">
                <Link className="username" href={`/@` + element.username}>@{element.username}</Link>
                <span className="motto">{element.motto}</span>
                <span className="">{element[whatIs]}</span>
            </div>
        </div>
    ))
}

export default TopUsers