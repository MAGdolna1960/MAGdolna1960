import { useRef, useEffect} from "react"

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
        className='py-1 text-2xl text-mainblue font-sans'
      >
        Home</a>
      <a
        href="#menu1"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        menu1</a>
      <a
        href="#menu2"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        menu2</a>
      <a
        href="#menu3"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        menu3</a>
      <a
        href="#menu4"
        onClick={() => setOpen(false)}
        className='py-1 text-2xl text-mainblue font-sans'>
        menu4</a>
    </div>
  )
}

export default MobileMenu