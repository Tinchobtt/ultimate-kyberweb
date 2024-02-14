import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-position">
        <div className="hero-intro">
          {/* <h2 className="title">Your fingerprint<br />in the cyberspace</h2> */}
          <h2 className="title">Tu huella digital<br />en el ciberespacio</h2>
          <h1 className="sub-title">Kyber Web, Agencia de Desarrollo y Diseño Web</h1>
        </div>
        <HashLink to={'/contact/0#start'}>
          <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '30px'}}>
            Contactanos
          </Button>
        </HashLink>
      </div>
    </section>
  )
}

export default Hero