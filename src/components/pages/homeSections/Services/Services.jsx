import { Splide, SplideSlide } from "@splidejs/react-splide"
import '@splidejs/react-splide/css';
import ServiceCard from "../../../common/serviceCard/ServiceCard";
import { useEffect, useState } from "react";
import { services } from "../../../../lists/services";

const Services = () => {
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
    <section id="servicesSection" className="shadow">
      <div className="servicesSection-content">
        <h2 className="title">Descubrí Nuestros Servicios</h2>
        <Splide options={ {
          width: '100vw',
          gap   : '1rem',
          rewind: true,
          perPage: resolution < 768 ? 1 : resolution < 1024 ? 2 : resolution < 1440 ? 3 : 4,
          perMove: 1
        } }>
          {
            services.map(service => {
              return (
                <SplideSlide key={service.id}>
                  <ServiceCard  service={service}/>
                </SplideSlide>
              )
            })
          }
        </Splide>
      </div>
    </section>
  )
}

export default Services