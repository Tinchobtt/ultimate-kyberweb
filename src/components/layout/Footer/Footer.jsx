import { HashLink } from "react-router-hash-link"
import logo from '../../../assets/logo/logo.png'
import Whatsapp from "../../common/icons/Whatsapp"
import { useLocation } from "react-router-dom"
import Instagram from "../../common/icons/Instagram"

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <HashLink to={'/#start'}>
          <img src={logo} alt="logo" />
        </HashLink>
      </div>
      <nav>
        <ul>
          <li className='nav-item'><HashLink to={'/'}>Home</HashLink></li>
          <li className='nav-item'><HashLink to={'/Services'}>Servicios</HashLink></li>
          <li className='nav-item'><HashLink to={'/portfolio'}>Portfolio</HashLink></li>
          <li className='nav-item'><HashLink to={'/contact'}>Contacto</HashLink></li>
        </ul>
      </nav>
      <div className="media-container">
        <Whatsapp style={{width: '2.3rem'}} />
        <Instagram style={{width: '2.5rem', marginLeft: '2rem'}}/>
      </div>
      <span>© 2024 - KyberWeb. Todos los derechos reservados.</span>
    </footer>
  )
}

export default Footer