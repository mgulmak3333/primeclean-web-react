import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Lenis from 'lenis';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {



    const lenis = new Lenis();

    function raf(time: number){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

<<<<<<< Updated upstream
=======




    const handleLoad = () => {
      setIsLoading(false);
    };
>>>>>>> Stashed changes

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      
      const timeoutId = setTimeout(() => setIsLoading(false), 3000);

<<<<<<< Updated upstream


    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
      
      const timeoutId = setTimeout(() => setIsLoading(false), 3000);

=======
>>>>>>> Stashed changes
      return () => {
        lenis.destroy();
        window.removeEventListener('load', handleLoad);
        clearTimeout(timeoutId);
      };
    }
  }, []); 

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
      </div>
    );
  }

<<<<<<< Updated upstream
  
=======
  // Senin asıl bileşenlerinin ekranda basılması için bu return gerekiyordu:
>>>>>>> Stashed changes
  return (
    <>
      <Header />
      <Main />
      <About />
      <Services />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App