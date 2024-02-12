import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-position">
        <div className="hero-intro">
          <h2 className="title">Your fingerprint<br />in the cyberspace</h2>
          <h1 className="sub-title">Web development and design agency</h1>
        </div>
        <HashLink to={'/contact/0#start'}>
          <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '30px'}}>
            Contact us
          </Button>
        </HashLink>
      </div>
    </section>
  )
}

export default Hero