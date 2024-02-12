import Hero from "./Hero/Hero"
import Services from "./Services/Services"
import Package from "./Package/Package"
import Info from "./Info/Info"
import Reviews from "./Reviews/Reviews"

const Home = () => {
  return (
    <main>
      <Hero />
      <Services />
      <Package />
      <Info />
      {/* <Reviews /> */}
    </main>
  )
}

export default Home