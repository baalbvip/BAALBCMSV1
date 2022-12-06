import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { look, toastOptions } from "../../lib/observerFunctions";
import { ToastContainer, toast } from "react-toastify"
import { userInfoContext } from "../../context/contextInfo";


const HeaderIndex = (props) => {
    let lookDefault = "hd-209-10.hr-828-1356.lg-281-62.ch-3185-64"
    const Router = useRouter()
    const [lookSearch, setLook] = useState(lookDefault)
    const [login, setLogin] = useState({ user: "", password: "" })

    const [userInfo] = userInfoContext()



    console.log(userInfo)
    const change = (ev) => {
        const { value, name } = ev.target

        setLogin({ ...login, [name]: value })
    }


    const sign = async () => {
        await axios.post("/api/auth/login", login).then(response => { return response.data }).then(response => {
            if (response.status == true) {
                Router.push("/me", "/me")
            }

            if (response.msg) {
                toast(response.msg, toastOptions(response))
            }
        })
    }

    let searchLookOut = 0;

    const searchLook = (ev) => {
        ev.stopPropagation()
        clearTimeout(searchLookOut)
        searchLookOut = setTimeout(async () => {
            var look = await axios.post("/api/lookUser", { user: ev.target.value }).then(response => { return response.data })

            var { look } = look;

            if (look !== undefined) {
                setLook(look)
            } else {
                setLook(lookDefault)
            }
        }, 500)
    }



    return (<div className="headerIndex">
        <ToastContainer position="bottom-right" theme="dark" />

        <img className="logo" src="/images/logoindex2.png" onClick={(ev) => { Router.push("/") }} />
        <div className="right">
            <div className="login-header">
                <div className="form-input">
                    <div className="lookUser" style={{ background: `url(${look(lookSearch)})` }}></div>
                    <input name="user" onChange={change} onKeyDown={(ev) => { clearTimeout(searchLookOut) }} onKeyUp={searchLook} required />
                    <label className="labelMovible">Usuario</label>
                </div>

                <div className="form-input">
                    <input required onChange={change} type="password" name="password" />
                    <label className="labelMovible">Contraseña</label>
                </div>

                <button className="sign" onClick={sign}>Iniciar sesion</button>
            </div>
        </div>
    </div>)
}

export default HeaderIndex;