import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
    <header id="header" className='fixed w-full top-0 z-10 bg-teal-700 text-white font-Nunito'>
      <Header />
    </header>
    <main className='font-Nunito radial-blue min-h-screen'>
      <Outlet />
    </main>
    <footer className='font-Nunito bg-teal-700 text-xl text-white'>
      <Footer />
    </footer>
  </>
  )
}

export default Layout