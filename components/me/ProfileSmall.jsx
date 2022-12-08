import { look } from "../../lib/observerFunctions";

const ProfileSmall = (props) => {

    let { userInfo } = props;
    return (<div className="profile-small">
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
    </div>)
}

export default ProfileSmall