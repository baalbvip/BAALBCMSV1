import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'




function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="loading"></div>
      <Component {...pageProps} /></>)
}

export default MyApp
