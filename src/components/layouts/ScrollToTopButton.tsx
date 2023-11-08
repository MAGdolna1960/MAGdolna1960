import { useState, useEffect } from 'react';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Az oldal görgetésének figyelése
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Ha az oldalt legalább 100 pixelt lefelé görgetik, megjelenítjük a gombot
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Eseménykezelő hozzáadása az oldal görgetéséhez
    window.addEventListener('scroll', handleScroll);

    return () => {
      // Eseménykezelő eltávolítása, amikor a komponens megszűnik
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Az oldal tetejére görgetés
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
      className='absolute right-5 bottom-5 text-mainblue font-bold border border-mainblue p-2 rounded-2xl'
    >
      Up
    </button>
  );
}

export default ScrollToTopButton;
