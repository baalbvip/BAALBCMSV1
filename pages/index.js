import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import Registers from "./components/login/registers"


const Index = () => {

  const login = (ev) => {
    ev.preventDefault()
  }

  return (
    <div>
      <Head>
        <title>Bienvenido a la diversion</title>
        <link rel="icon" href="/favicon.png"></link>
      </Head>
      <main className="login">
        <div className="headerIndex">
          <img className="logo" src="/images/Habbo-Symbol.png" />
          <div className="right">
            <button className="buttonHeader greyLogin">Iniciar Sesion</button>
            <button className="buttonHeader blueLogin">Registrarse</button>
          </div>
        </div>

        <div className="background-header">

          <div className="right"></div>
          <div className="color"></div>
        </div>

        <div className="center">
          <div className="registerNow">
            <p className="title">Create una cuenta y entra a divertirte.</p>
            <input />
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
      </main>
    </div>
  )
}

export default Index;