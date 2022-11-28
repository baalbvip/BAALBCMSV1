import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Notices from "./components/login/notice"
import Registers from "./components/login/registers"
import { useState } from "react"
import Background from "./components/login/background"
import HeaderIndex from "./components/login/HeaderIndex"


const Index = () => {

  const [selectUserRegister, setUserRegister] = useState("bobba");

  const login = (ev) => {
    ev.preventDefault()
  }



  const checkSelectUser = (ev, value) => {
    let keyCode = ev.keyCode;
    if (keyCode !== 32) {
      setUserRegister(value)
    }
  }

  const preventSpace = (ev) => {
    if (ev.keyCode == 32) {
      ev.preventDefault()
    }

    if (ev.target.value.length >= 12) {
      ev.target.value = ev.target.value.substring(0, 12)
    }
  }


  const onClickCheckUser = (ev) => {
    if (selectUserRegister.length == 0 || selectUserRegister == "bobba") {
      ev.preventDefault()
    }
  }

  return (
    <div>
      <Head>
        <title>Bienvenido a la diversion</title>
        <link rel="icon" href="/favicon.png"></link>
      </Head>
      <main className="login">

        <Background />
        <HeaderIndex />

        <div className="animation-enter">
          <div className="center">
            <div className="registerNow">
              <p className="title">Create una cuenta y entra a divertirte.</p>
              <span className="urlselect">{process.env.url}/{selectUserRegister}</span>
              <div className="selectUser">


                <input onKeyUp={(ev) => { checkSelectUser(ev, ev.target.value) }} onKeyDownCapture={(ev) => { preventSpace(ev) }} /> <Link className="gameNow" href={"/register/" + selectUserRegister} as={"/register/" + selectUserRegister}>Registrarme</Link>
              </div>
            </div>
            <div className="row">

            </div>
          </div>

          <div className="center-info">
            <div className="registersNow">
              {[0, 1, 2, 3].map(resp => (
                <Registers key={resp} />
              ))}
            </div>

            <div className="row">
              <div className="col-md-6">
                <Notices />
              </div>

              <div className="col-md-6">
                <div className="divnormal">
                  <p className="title padding text-title">  Informacion</p>

                  <div className="info">
                    <img className="img-center-block" src="https://images.habbo.com/c_images/HabboWay/habboway_5a.png" />
                    <span className="text-small padding text-opacity">Bienvenido a {process.env.sitename}, diviertete junto a nosotros, crea nuevas amistades, y comparte con tus amig@s!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="loginModal modal">
            <form method="POST" name="login">

              <div className="formInput">
                <label>Usuario</label>
                <input />
              </div>

              <div className="formInput">
                <label>Contraseña</label>
                <input />
              </div>

              <button onClick={login}></button>
            </form>
          </div>
        </div>
      </main>
    </div>

  )
}

export default Index;