import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Blog from './components/Blog';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Lenis from 'lenis';

import { useEffect } from 'react';





function App() {


  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () =>{
      lenis.destroy();
    };
  }, []);


  

  return (
    <>
      <Header />
      <Main />
      <About />
      <Blog />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}

export default App
