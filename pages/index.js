import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Notices from "../components/login/notice"
import Registers from "../components/login/registers"
import { useContext, useState } from "react"
import Background from "../components/login/background"
import HeaderIndex from "../components/login/HeaderIndex"
import { filterUsername, toastOptions } from "../lib/observerFunctions"
import { toast } from "react-toastify"
import MenuContext from "../context/my-context"


const Index = () => {
  const [selectUserRegister, setUserRegister] = useState("bobba");
  const login = (ev) => {
    ev.preventDefault()
  }



  const checkSelectUser = (ev, value) => {
    let keyCode = ev.keyCode;

    ev.target.value = filterUsername(ev.target.value)
    if (keyCode !== 32) {
      setUserRegister(filterUsername(ev.target.value))
    }
  }

  const checkNext = (ev) => {
    if (selectUserRegister === "bobba" || selectUserRegister == "") {
      ev.preventDefault()
      toast("!Opps error con este nombre de usuario", toastOptions({ msg_type: "error" }))
    } else {
      toast("Procesando...", toastOptions({ msg_type: "success" }))
    }
  }



  return (
    <div>
      <Head>
        <title>{`${process.env.sitename} | Bienvenido a la diversion!`}</title>
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


                <input onChange={(ev) => { checkSelectUser(ev, ev.target.value) }} /> <Link onClick={checkNext} className="gameNow" href={"/register/" + selectUserRegister} as={"/register/" + selectUserRegister}>Registrarme</Link>
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

        </div>
      </main>
    </div>

  )
}

export default Index;