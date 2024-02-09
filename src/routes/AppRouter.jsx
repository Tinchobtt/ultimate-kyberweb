import { Routes, Route } from "react-router-dom"
import { routes } from "./routes"
import NotFound from "../components/pages/404/NotFound"
import Layout from "../components/layout/Layout"

const AppRouter = () => {
  return (
    <Routes>
        <Route element={<Layout />}>
            {
                routes.map(({id, path, Element}) => <Route key={id} path={path} element={<Element />} />)
            }
        </Route>
        <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRouter