import { useParams } from "react-router-dom"
import { services } from "../../../lists/services"
import { Button } from "@mui/material"
import { HashLink } from "react-router-hash-link"
import { PackageContext } from "../../../context/PackageContext"
import { useContext } from "react"

const ServiceDetail = () => {
  const {id} = useParams()
  let service = services.find(service => service.id === +id)

  const { setPackageUnit } = useContext(PackageContext)
  
  return (
    <main id="serviceDetail">
      <section className="portada">
          <h2>{service.name}</h2>
      </section>
      <section className="service-content">
        <div className="label">
          <h3>¿Qué es {service.name}?</h3>
        </div>
        <div className="content">
          <p>
            {service.whatIs}
          </p>
        </div>
        <div className="label">
          <h3>Proceso de contratación</h3>
        </div>
        <div className="content">
          <p>
            {service.steps}
          </p>
        </div>
        <div className="button-container" style={{display: 'flex', justifyContent: 'center'}}>
          <HashLink to={`/contact/${service.id}#start`}>
            <Button variant="contained" sx={{textTransform: 'unset', borderRadius: '30px'}} onClick={ ()=> setPackageUnit(service.name) }>
              Contratar Servicio
            </Button>
          </HashLink>
        </div>
      </section>
    </main>
  )
}

export default ServiceDetail