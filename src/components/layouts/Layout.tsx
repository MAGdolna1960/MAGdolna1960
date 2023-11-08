import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <header id="header" className='fixed max-w-7xl w-full top-0 z-10 h-20 px-5 bg-[#EBF8FF] text-white font-Nunito'>
      <Header />
    </header>
    <main className='font-Nunito radial-blue min-h-screen relative'>
      <Outlet />
    </main>
    <footer className='font-Nunito bg-[#2d3748] text-xl text-white'>
      <Footer />
    </footer>
  </>
  )
}

export default Layout





