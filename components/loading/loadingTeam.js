
const LoadingTeam = (params) => {
    const { loading } = params
    if (!loading) {
        return (<p>cargando... {console.log("cargando")}</p>)
    }
}


export default LoadingTeam