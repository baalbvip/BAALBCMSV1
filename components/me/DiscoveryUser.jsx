import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { look } from "../../lib/observerFunctions";

export default function DiscoveryUser({ params }) {

    return (<>
        {params.map((element, key) => (
            <div className="user">
                <div className="blur"></div>
                <div className="info">
                    <div className="photo" style={{ background: `url(${look(element.look)})` }}></div>
                    <Link className="username" as={`@${element.username}`} href={`@${element.username}`}>@{element.username}</Link>
                    <span className="motto">{element.motto}</span>
                    <Link className="go-profile" as={`@${element.username}`} href={`@${element.username}`}><IoChevronForwardOutline /></Link>
                </div>
            </div>
        ))}
    </>)
}