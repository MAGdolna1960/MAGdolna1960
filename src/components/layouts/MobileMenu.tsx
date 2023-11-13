import { useRef, useEffect } from "react"

interface MobileMenuPropsMain {
  toggleRef: React.RefObject<HTMLSpanElement>,
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const MobileMenu = ({ toggleRef, open, setOpen }: MobileMenuPropsMain) => {
  const menuref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuref.current?.contains(e.target) && !toggleRef.current?.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  if (!open) return null

  return (
    <div
      ref={menuref}
      className='w-full flex flex-col bg-white shadow-sm border px-10 py-5 items-center'>
      <a
        href="#home"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Home</a>
      <a
        href="#upcoming"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Upcoming Events</a>
      <a
        href="#languages"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Languages</a>
      <a
        href="#service"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Services</a>
      <a
        href="#gallery"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Gallery</a>
      <a
        href="#workshops"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        Workshops</a>
      <a
        href="#about"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        About</a>
      <a
        href="#faq"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        FAQ</a>
    </div>
  )
}

export default MobileMenu