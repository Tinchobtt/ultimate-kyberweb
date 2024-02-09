import { Outlet } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

const Layout = () => {
  return (
    <div id="start" style={{display: 'grid', gridTemplateRows: 'auto 1fr auto', minHeight: '100vh'}}>
        <Navbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout