import Home from "../components/pages/homeSections/Home";
import Service from "../components/pages/services/Services";
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
        id: 'Services',
        path: '/services',
        Element: Service
    },
    {
        id: 'ServiceDetail',
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
        path: '/contact/:type',
        Element: Contact
    }
]