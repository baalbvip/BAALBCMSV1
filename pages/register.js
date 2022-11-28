import Link from "next/link"
import { useRouter } from "next/router";
import Background from "./components/login/background";
import HeaderIndex from "./components/login/HeaderIndex";
import Img from "next/image";

const Register = () => {

    const router = useRouter();

    return (
        <div className="login">

            <Background />
            <HeaderIndex />


            <div className="form-login animation-enter">
                <div className="row">
                    <div className="col-md-6">

                        <p className="title">Unete ahora!</p>


                        <div className="form-input">
                            <span className="info">Necesitarás usar este nombre de usuario para poder registrarte</span>
                            <label className="label-normal">Usuario</label>
                            <input />
                        </div>

                        <div className="form-input">
                            <span className="info">Necesitarás usar este email para conectarte a Habbo en el futuro. Por favor, utiliza un email que sea válido</span>
                            <label className="label-normal">Email</label>
                            <input />

                        </div>

                        <div className="focus">
                            <div className="form-input">
                                <label className="label-normal">Contraseña</label>
                                <input />

                            </div>

                            <div className="form-input">
                                <label className="label-normal">Contraseña repitela</label>
                                <input />
                            </div>
                        </div>


                        <button className="button-large gameNowBorder text-title">Registrarme</button>
                    </div>

                    <div className="col-md-4">
                        <p>lorem    </p>
                        <Img width="544" height="465" src="/images/register.png" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Register;