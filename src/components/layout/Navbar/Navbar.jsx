import { useState } from 'react';
import logo from '../../../assets/logo/logo.png'
import { HashLink } from 'react-router-hash-link'
import Whatsapp from '../../common/icons/Whatsapp';
import Instagram from '../../common/icons/Instagram';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const [menuWidgetOpen, setMenuWidgetOpen] = useState(false);//Estado de cambio del icono del Nav

  const handleWidget = ()=>{ //Cambio de aspecto del icono del Nav
    setMenuWidgetOpen(!menuWidgetOpen);
  }

  const closeMenu = () => {
    setMenuWidgetOpen(false);
  };

  const loc = useLocation().pathname
  
  return (
    <header>
      <div className="logo">
        <HashLink to={'/#start'} onClick={closeMenu}>
          <img src={logo} alt="logo" />
        </HashLink>
      </div>
      <div className="menu-icon" onClick={handleWidget}>
        <span className={menuWidgetOpen ? "line line1 activeLine1" : "line line1"}></span>
        <span className={menuWidgetOpen ? "line line2 activeLine2" : "line line2"}></span>
        <span className={menuWidgetOpen ? "line line3 activeLine3" : "line line3"}></span>
      </div>
      <div className={menuWidgetOpen ? "nav-open navbar": "navbar"}>
        <nav>
          <ul>
            <li className='nav-item'><HashLink to={'/'} className={loc === '/' ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Home</HashLink></li>
            <li className='nav-item'><HashLink to={'/services'} className={loc.startsWith('/service') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Servicios</HashLink></li>
            <li className='nav-item'><HashLink to={'/portfolio'} className={loc.startsWith('/portfolio') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Portfolio</HashLink></li>
            <li className='nav-item'><HashLink to={'/contact'} className={loc.startsWith('/contact') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Contacto</HashLink></li>
          </ul>
        </nav>
        <div className="media-container">
          <Whatsapp style={{width: '2.5rem'}} />
          <Instagram style={{width: '2.5rem', marginLeft: '2rem'}}/>
        </div>
      </div>
    </header>
  )
}

export default Navbar