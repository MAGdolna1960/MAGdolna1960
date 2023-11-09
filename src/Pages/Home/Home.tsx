

import ScrollToTopButton from "../../components/layouts/ScrollToTopButton";
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Workshop from "./Workshop";
import About from "./About";
import Service from "./Service";

const Home = () => {
  
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Testimonial />
      <Workshop/>
      <Gallery/>
      <Contact/>
      <ScrollToTopButton/>
    </div>
    
  )
}

export default Home


{/* <h1>{t("welcome")}</h1> */}