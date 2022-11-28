import Router from "next/router";

const HeaderIndex = () => {
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

                <button >Jugar</button>
            </div>
        </div>
    </div>)
}

export default HeaderIndex;