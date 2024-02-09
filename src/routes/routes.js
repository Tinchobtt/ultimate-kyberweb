import Home from "../components/pages/homeSections/Home";
import ServiceDetail from "../components/pages/serviceDetail/ServiceDetail";
import Portfolio from "../components/pages/portfolio/Portfolio";
import Contact from "../components/pages/contact/Contact";

export const routes = [
    {
        id: 'Home',
        path: '/',
        Element: Home
    },
    {
        id: 'Service',
        path: '/serviceDetail/:id',
        Element: ServiceDetail
    },
    {
        id: 'Portfolio',
        path: '/portfolio',
        Element: Portfolio
    },
    {
        id: 'Contact',
        path: '/contact',
        Element: Contact
    }
]