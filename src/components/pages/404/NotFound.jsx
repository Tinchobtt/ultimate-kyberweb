import { HashLink } from "react-router-hash-link"

const NotFound = () => {
  return (
    <div id="notFound">
      <h2>Page Not Found</h2>
      <p className="error404">Error: 404</p>
      <p>{"Lo sentimos, la página que estás buscando no existe o ha sido movida."}</p>
      <HashLink to={'/#start'}>Volver a Home</HashLink>
    </div>
  )
}

export default NotFound