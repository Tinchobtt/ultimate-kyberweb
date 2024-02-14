import { HashLink } from "react-router-hash-link"
import logo from '../../../assets/logo/logo.png'
import Whatsapp from "../../common/icons/Whatsapp"
import Instagram from "../../common/icons/Instagram"
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import { services } from "../../../lists/services";

const Footer = () => {
  return (
    <footer className="shadow">
      <div className="footer-content">
        <div className="logo-container">
          <HashLink to={'/#start'} className='logo-link'>
            <img src={logo} alt="kyberweb logo" />
          </HashLink>
        </div>
        <nav className="nav-footer">
          <div className="nav-footer-item">
            <h3 className="subtitle"><HashLink to="/#start">Home</HashLink></h3>
            <ul className="nav-list">
              <li><HashLink smooth to="/#servicesSection">Servicios</HashLink></li>
              <li><HashLink smooth to="/#packageSection">Paquetes</HashLink></li>
              <li><HashLink smooth to="/#infoSection">Información</HashLink></li>
            </ul>
          </div>
          <div className="nav-footer-item">
            <h3 className="subtitle"><HashLink to="/services">Servicios</HashLink></h3>
            <ul className="nav-list">
              {
                services.map(service => <li key={service.id}><HashLink to={`/serviceDetail/${service.id}#start`}>{service.name}</HashLink></li>)
              }
            </ul>
          </div>
          <div className="nav-footer-item">
            <h3 className="subtitle"><HashLink to="/contact/0#start">Contacto</HashLink></h3>
            <ul className="nav-list">
              <li><a href="https://wa.me/393312091265" className="nav-list-contact" target='_BLANCK'><LocalPhoneIcon style={{marginRight: '.5rem'}}/>+39 33-1209-1265</a></li>
              <li><a href="mailto:kyber.web1@gmail.com" className="nav-list-contact" target='_BLANCK'><MailOutlineRoundedIcon style={{marginRight: '.5rem'}}/>kyber.web1@gmail.com</a></li>
            </ul>
          </div>
        </nav>
        <div className="red-box-container">
          <div className="red-box">
            <Whatsapp style={{width: '2rem'}}/>
            <a href="https://wa.me/393312091265" className='red-box-link' target='_BLANCK'>+39 33-1209-1265</a>
          </div>
          <div className="red-box">
            <Instagram style={{width: '2.2rem'}}/>
            <a href="https://www.instagram.com/kyberweb/?hl=es-la" className='red-box-link' target='_BLANCK'>@kyberweb</a>
          </div>
        </div>
        <span style={{opacity: .5, textAlign: 'center'}}>© 2024 - KyberWeb. Todos los derechos reservados.</span>
      </div>
    </footer>
  )
}

export default Footer