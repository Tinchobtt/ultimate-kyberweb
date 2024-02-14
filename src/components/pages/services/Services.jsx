import { services } from "../../../lists/services"
import ServiceCard from "../../common/serviceCard/ServiceCard"

const Services = () => {
  return (
    <main id="services">
      <section>
        <h3 className="title">Servicios</h3>
        <div className="cards-container">
        {
          services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))
        }
        </div>
      </section>
    </main>
  )
}

export default Services