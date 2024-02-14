import { MenuItem, Select, ThemeProvider, createTheme } from "@mui/material"
import { useState } from "react";
import { services } from "../../../lists/services";
import { proyects } from "../../../lists/proyects";
import ProyectCard from "../../../components/common/proyectCard/ProyectCard";

const Portfolio = () => {
  const [service, setService] = useState('Todos');
  const [proyectList, setProyectList] = useState(proyects);
  
  const handleChange = (event) => {
    setService(event.target.value);
    setProyectList(filterProyects(event.target.value))
  };

  const filterProyects = (category) =>{
    if(category === 'Todos') return proyects
 
    return proyects.filter( proy => proy.category.includes(category))
  }

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <main id="portfolio">
      <section>
        <h3 className="title">Portfolio</h3>
        <ThemeProvider theme={darkTheme}>
          <Select
            value={service}
            onChange={handleChange}
            displayEmpty
            sx={{margin: '1rem 0'}}
          >
            <MenuItem value="Todos">Todos</MenuItem>
            {
              services.map( serv => {
                return <MenuItem key={serv.id} value={serv.name}>{serv.name}</MenuItem>
              })
            }
          </Select>
        </ThemeProvider>
        <div className="proyects-container">
          {
            proyectList.length > 0 ? (
              proyectList.map( proy => {
                return  (
                  <ProyectCard key={proy.id} proyect={proy} />
                )
              })
            ) : (
              <p className={"notice shadow"}>¡Ups! Esta categoría está vacía. 😅<br /> ¡Sé el primero en dejarnos llenarla con tu increíble proyecto!</p>
            )
          }
        </div>
      </section>
    </main>
  )
}

export default Portfolio