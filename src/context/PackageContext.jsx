import { createContext, useState } from 'react'

export const PackageContext = createContext()

const PackageContextProvider = ({children}) => {
    const [packageUnit, setPackageUnit] = useState([])

    let data = {
        packageUnit,
        setPackageUnit
    }
    
    return (
    <PackageContext.Provider value={data}>
        {children}
    </PackageContext.Provider>
    )
}

export default PackageContextProvider