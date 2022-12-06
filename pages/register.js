import Background from "../components/login/background";
import HeaderIndex from "../components/login/HeaderIndex";
import { useEffect, useState } from "react";
import axios from "axios"
import { useRouter } from "next/router";
import { addClass, filterUsername, removeClass, validEmail, toastOptions } from "../lib/observerFunctions";
import Head from "next/head";
import { toast } from "react-toastify"
import { ToastContainer } from 'react-toastify';


const Register = () => {

    const Router = useRouter();
    const [credentials, setCredentials] = useState({ user: '', email: '', pw: '', pw2: '' })
    const [comparePassword, setCompare] = useState()
    const [verifiedUser, setVerifiedUser] = useState()
    const [sendRegister, setRegister] = useState()

    var searchNow;


    const searchUser = async (user) => {
        let response = await axios.post("/api/auth/existsUser", { user: user })
        return response
    }




    const search = (ev) => {
        ev.stopPropagation()
        clearTimeout(searchNow)
        setVerifiedUser("")
        searchNow = setTimeout(async () => {
            let response = await searchUser(ev.target.value).then((response) => { return response.data })
            if (response.used) {
                setVerifiedUser("error")
            } else {
                setVerifiedUser("check")
            }
        }, 1000)

    }

    const submit = (ev) => {
        ev.stopPropagation()
        ev.target.blur()
        setRegister("await")
        axios.post("/api/auth/register", credentials).then(response => { return response.data }).then(response => {
            if (response.status) {
                Router.push("/me")
            }

            if (response.msg) {
                toast(response.msg, toastOptions(response))
            }

            setTimeout(() => {
                setRegister("")
            }, 500)

        }).catch((err) => {
            setRegister("")
        })

    }

    const setState = (ev) => {
        let { value, name } = ev.target




        if (value && name) {
            setCredentials({ ...credentials, [name]: value })
        }

        switch (name) {

            case 'user':
                value = filterUsername(value)
                ev.target.value = value
                break;

            case 'email':
                if (!validEmail(value)) {
                    addClass(ev.target, "error")
                } else {
                    removeClass(ev.target, "error")
                }
                break

            case 'pw2':
                if (credentials.pw !== value) {
                    setCompare("error")

                } else {
                    setCompare("check")
                }
                break;

            case 'pw':
                if (credentials.pw2 !== value) {
                    setCompare("error")
                } else {
                    setCompare("check")
                }
                break;
        }


    }

    useEffect(() => {

        const construct = async () => {
            let username = Router.query

            try {

                username = username.params[0]
                setCredentials({ ...credentials, ['user']: username })
                document.querySelector(".register input[name='user']").value = username
                let response = await searchUser(username).then(response => { return response.data })
                if (response.used) {
                    setVerifiedUser("error")
                } else {
                    setVerifiedUser("check")
                }
            } catch {

            }
        }


        construct()

    }, [Router.query])

    return (
        <>

            <Head>
                <title>{`${process.env.sitename} | Bienvenido a la diversion!`}</title>
                <link rel="icon" href="/favicon.png"></link>
            </Head>

            <ToastContainer position="bottom-right" theme="dark" />

            <div className="login">
                <Background />
                <HeaderIndex /><div>

                </div>


                <div className="form-login animation-enter">
                    <div className="row register">
                        <div className="col-md-5">

                            <p className="title">Unete ahora!</p>

                            <div className="form-input">
                                <span className="info">Necesitarás usar este nombre de usuario para poder registrarte</span>
                                <label className="label-normal">Usuario</label>
                                <p className={`pwfail ${verifiedUser}`}>No disponible (<b>{credentials.user}</b>)</p>
                                <input className={verifiedUser} name="user" onChange={setState} onKeyDown={(ev) => { clearTimeout(searchNow) }} onKeyUp={search} />
                                {/* <CheckmarkCircleOutline className={`icon-checkusername ${verifiedUser}`} /> */} 
                            </div>

                            <div className="form-input">
                                <span className="info">Necesitarás usar este email para conectarte a Habbo en el futuro. Por favor, utiliza un email que sea válido</span>
                                <label className="label-normal">Email</label>
                                <input name="email" onChange={setState} />

                            </div>

                            <div className="focus">
                                <div className="form-input">
                                    <label className="label-normal">Contraseña</label>
                                    <input className={comparePassword} type="password" name="pw" onChange={setState} />

                                </div>

                                <div className="form-input">
                                    <label className="label-normal">Contraseña repitela</label>
                                    <input className={comparePassword} type="password" name="pw2" onChange={setState} />
                                </div>

                                <p className={`pwfail ${comparePassword}`}>Tus Contraseñas no son iguales..</p>
                            </div>


                            <button onClick={submit} className={`button-large gameNowBorder text-title ${sendRegister}`}>Registrarme <div className="loading"></div></button>
                        </div>

                        <div className="col-md-7">
                            <p className="desc-right">Unete ya!, {process.env.sitename} te ofrecera tus mejores momentos junto a nosotros, construye, crea, y has amigos!</p>
                            <img src="/images/register.png" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register;