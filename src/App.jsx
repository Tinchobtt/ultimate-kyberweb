import { BrowserRouter } from "react-router-dom"
import AppRouter from "./routes/AppRouter"
import PackageContextProvider from "./context/PackageContext"

function App() {
  return (
    <BrowserRouter>
      <PackageContextProvider>
        <AppRouter />
      </PackageContextProvider>
    </BrowserRouter>
  )
}

export default App