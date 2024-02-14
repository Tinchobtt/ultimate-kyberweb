import { useState } from 'react';
import logo from '../../../assets/logo/logo.png'
import { HashLink } from 'react-router-hash-link'
import Whatsapp from '../../common/icons/Whatsapp';
import Instagram from '../../common/icons/Instagram';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useEffect } from 'react';

const Navbar = () => {
  const [menuWidgetOpen, setMenuWidgetOpen] = useState(false);//Estado de cambio del icono del Nav

  const handleWidget = ()=>{ //Cambio de aspecto del icono del Nav
    setMenuWidgetOpen(!menuWidgetOpen);
  }

  const closeMenu = () => {
    setMenuWidgetOpen(false);
  };

  const loc = useLocation().pathname

  const [resolution, setResolution] = useState(window.innerWidth);// Estado de resolucion
  useEffect(() => {
    const handleResize = () => {
      setResolution(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);
  
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
            <li className='nav-item'><HashLink to={'/services/#start'} className={loc.startsWith('/service') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Servicios</HashLink></li>
            <li className='nav-item'><HashLink to={'/portfolio/#start'} className={loc.startsWith('/portfolio') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Portfolio</HashLink></li>
            <li className='nav-item'><HashLink to={'/contact/0#start'} className={loc.startsWith('/contact') ? 'nav-link active': 'nav-link'} onClick={closeMenu}>Contacto</HashLink></li>
          </ul>
        </nav>
        {resolution < 1024 && 
          <div className="media-container">
            <Whatsapp style={{width: '2.5rem'}} />
            <Instagram style={{width: '2.5rem', marginLeft: '2rem'}}/>
          </div>
        }
      </div>
      <HashLink to={'/contact/0#start'} className='nav-btn-contact'>
        <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '30px'}}>
          Contactanos
        </Button>
      </HashLink>
    </header>
  )
}

export default Navbar