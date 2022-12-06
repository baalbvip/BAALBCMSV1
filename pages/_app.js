import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { MyInfo } from '../context/contextInfo';


function MyApp({ Component, pageProps }) {


  return (
    <MyInfo>
      <Component {...pageProps} />
    </MyInfo>

  )
}

export default MyApp
