import axios from "axios";
import Router from "next/router";
import jwt from "jsonwebtoken"

const HeaderIndex = () => {

    const sign = async () => {
        await axios.get("/api/auth/login").then(response => { return response.data }).then(response => {
            let token = response.token;
            console.log(jwt.decode(token))
        })
    }

    return (<div className="headerIndex">
        <img className="logo" src="/images/logoindex2.png" onClick={(ev) => { Router.push("/") }} />
        <div className="right">
            <div className="login-header">
                <div className="form-input">
                    <input required />
                    <label className="labelMovible">Usuario</label>
                </div>

                <div className="form-input">
                    <input required />
                    <label className="labelMovible">Contraseña</label>
                </div>

                <button onClick={sign}>Jugar</button>
            </div>
        </div>
    </div>)
}

export default HeaderIndex;