
import Hero from "./Hero";
import Testimonial from "./Testimonial";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Workshop from "./Workshop";
import About from "./About";
import Service from "./service/Service";
import Upcoming from "./upcoming/Upcoming";
import Faq from "./FAQ";
import Languages from "./language/Languages";

const Home = () => {

  return (
    <div>
      <Hero />
      <Upcoming />
      <About />
      <Languages />
      <Service />
      <Testimonial />
      <Workshop />
      <Gallery />
      <Faq />
      <Contact />

    </div>

  )
}

export default Home


{/* <h1>{t("welcome")}</h1> */ }