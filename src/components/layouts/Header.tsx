import logo from '../../img/seed_7583206.png'

import { useState, useRef } from 'react'

import MobileMenu from './mobileMenu'


const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);


  return (
    <>
      <div className="flex justify-between py-4 relative">
        <div className='flex'>
          <img src={logo} className='h-8 w-8 mr-2' alt="Logo" />
          <a className="text-mainblue text-2xl font-bold" href="#home">MAGdalenum</a>
        </div>
        <div className='hidden md:block'>
          <a href="#home" className='px-5 text-2xl text-mainblue font-sans'>Home</a>
          <a href="#menu1" className='px-5 text-2xl text-mainblue font-sans'>menu1</a>
          <a href="#menu2" className='px-5 text-2xl text-mainblue font-sans'>menu2</a>
          <a href="#menu3" className='px-5 text-2xl text-mainblue font-sans'>menu3</a>
          <a href="#menu4" className='px-5 text-2xl text-mainblue font-sans'>menu4</a>
        </div>
        <div>
          <button className='hidden xl:block text-mainblue border border-mainblue py-2 px-8 rounded-full'>FAQ</button>
          <button
            id="hamburger-button"
            onClick={() => { setOpen((prev) => !prev) }}
            ref={toggleButtonRef}
            className={`relative h-8 w-8 cursor-pointer text-3xl md:hidden ${open ? 'toggle-btn' : ''} `}>
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-black transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-black before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-black after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
        </div>
      </div>
      <MobileMenu 
       toggleRef={toggleButtonRef}
       open={open}
       setOpen={setOpen}
      />

    </>
  )
}

export default Header


// switch between languages

// import { useTranslation } from "react-i18next";

// const lngs = [
//   { code: "hu", native: "Magyar" },
//   { code: "en", native: "English" },
// ];



// const { i18n } = useTranslation();

//   const handleTrans = (code: string) => {
//     i18n.changeLanguage(code);
//   };


//   {lngs.map((lng) => {
//     const { code, native } = lng;
//     return <button onClick={() => handleTrans(code)}>{native}</button>;
//   })}








