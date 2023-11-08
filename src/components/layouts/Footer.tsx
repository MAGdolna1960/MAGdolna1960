import logo from '../../img/seed_7583206.png'
const Footer = () => {
  return (
    <section className="flex flex-col">
      <div className="py-[64px] flex flex-col md:flex-row px-2">
        <div className='w-full md:w-1/4 px-4 mb-10'>
          <div className='flex mb-2'>
            <img src={logo} alt="logo" className='h-10 w-10 mr-2' />
            <a className="text-mainblue text-3xl font-bold" href="#home">MAGdalenum</a>
          </div>
          <p className='text-md max-w-sm leading-6 '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero, cumque soluta nesciunt</p>
        </div>
        <div className='w-full md:w-1/4 px-4 mb-6'>
          <h3 className='text-2xl font-bold mb-4'>Company</h3>
          <div className='flex flex-col'>
            <a className='mb-2 text-white' href="">Press Releases</a>
            <a className='mb-2 text-white' href="">Mission</a>
            <a className='mb-2  text-white' href="">Strategy</a>
          </div>

        </div>
        <div className='w-full md:w-1/4 px-4 mb-6'>
          <h3 className='text-2xl font-bold mb-4'>About</h3>
          <div className="flex flex-col">
            <a className='mb-2  text-white' href="">Carrier</a>
            <a className='mb-2  text-white' href="">Team</a>
            <a className='mb-2 text-white' href="">Clients</a>
          </div>
        </div>
        <div className='w-full md:w-1/4 px-4 mb-6'>
          <h3 className='text-2xl font-bold mb-4'>Find me on</h3>
          <a className='text-white' href="">FB</a>
          <a className='text-white' href="">YT</a>
          <a className='text-white' href="">LI</a>
        </div>
      </div>
      <div className='text-center bg-black py-2'>
        <p>Desingned and Developed by <a href="">Atix2008</a></p>
      </div>
    </section>
  )
}

export default Footer