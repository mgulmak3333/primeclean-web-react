import '../assets/css/header.css'
import { useEffect } from 'react';
import { useRef } from 'react';


function Header(){
    
    const navHeader = useRef<HTMLDivElement>(null);

    const navOpen = useRef<HTMLButtonElement>(null);
    const navClose = useRef<HTMLButtonElement>(null);
    const navMobileMenu = useRef<HTMLElement>(null);

    

    


    useEffect(() =>{

        let globalNavObserver: IntersectionObserver | null  = null;
        let globalCardObserver: IntersectionObserver | null = null;


        const handleScroll = () =>{
            if(window.scrollY > 50){
                navHeader.current?.classList.add('head-scroll');
            } else {
                navHeader.current?.classList.remove('head-scroll');
            }
        };

        window.addEventListener('scroll', handleScroll);






        if(navOpen){
            navOpen.current?.addEventListener('click', (e) =>{
                e.preventDefault();
                navMobileMenu.current?.classList.add('nav-mobil-active');
                navHeader.current?.classList.add('head-radius');

                navOpen.current?.style.setProperty('display', 'none');
                navClose.current?.style.setProperty('display', 'block');
            });
        } 

        if(navClose){
            navClose.current?.addEventListener('click', (e) =>{
                e.preventDefault();
                navMobileMenu.current?.classList.remove('nav-mobil-active');
                navHeader.current?.classList.remove('head-radius');

                navOpen.current?.style.setProperty('display', 'block');
                navClose.current?.style.setProperty('display', 'none');
            });
        }


        function scrollNavActive() {
            const navPropLinks = document.querySelectorAll('.navbar a, .nav-mobil a');
            const allSectional = document.querySelectorAll('main, section');

            const navObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        const area_id = entry.target.getAttribute('id');
                        navPropLinks.forEach(link => link.classList.remove('active-a'));

                        const navActives = document.querySelectorAll(`.navbar a[href="#${area_id}"]`);
                        navActives.forEach(link => link.classList.add('active-a'))
                    }

                    
                });
            }, {threshold: 0.6});

            allSectional.forEach(oneSection => {
                navObserver.observe(oneSection);
            });

            globalNavObserver = navObserver;
        } scrollNavActive()


        
        
        function cardScrollAnim(){

            const animCard = document.querySelectorAll('.blog')

            const cardObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry =>{
                    if(!entry.isIntersecting) return;

                    entry.target.classList.add('active-blogger');
                })
            }, {threshold: 0.5});

            animCard.forEach(oneCard =>{
                cardObserver.observe(oneCard);

            globalCardObserver = cardObserver;
        });
        } cardScrollAnim()





        return () =>{
            window.removeEventListener('scroll', handleScroll);
            if(globalNavObserver) globalNavObserver.disconnect;
            if(globalCardObserver) globalCardObserver.disconnect;
        };

    }, []);


    return(
        <>
            <header  className="head">
                <div ref={navHeader} className='heads'>
                    <div className="container d-flex align-items-center justify-content-between">

                        <a href="/" className="logo d-flex align-items-center text-decoration-none">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-sparkles"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 19a1 1 0 0 1 0 -2a1 1 0 0 0 1 -1c0 -1.333 2 -1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0 -1 1c0 1.333 -2 1.333 -2 0a1 1 0 0 0 -1 -1" /><path d="M3 11a5 5 0 0 0 5 -5c0 -1.333 2 -1.333 2 0a5 5 0 0 0 5 5c1.333 0 1.333 2 0 2a5 5 0 0 0 -5 5a1 1 0 0 1 -2 0a5 5 0 0 0 -5 -5c-1.333 0 -1.333 -2 0 -2" /><path d="M16 7a1 1 0 0 1 0 -2a1 1 0 0 0 1 -1c0 -1.333 2 -1.333 2 0a1 1 0 0 0 1 1c1.333 0 1.333 2 0 2a1 1 0 0 0 -1 1c0 1.333 -2 1.333 -2 0a1 1 0 0 0 -1 -1" /></svg>
                            <h1 className="m-0">PrimeClean</h1>
                        </a>

                        <nav ref={navMobileMenu} className='nav-mobil'>
                            <ul className="navLi">
                                <li><a href="#home-p">Home</a></li>
                                <li><a href="#about-p">About</a></li>
                                <li><a href="#blog-p">Blog</a></li>
                                <li><a href="#services-p">Services</a></li>
                                <li><a href="#contact-p">Contact</a></li>
                            </ul>
                        </nav>

                        <nav className="navbar">
                            <ul className="d-flex list-unstyled gap-5 m-0">
                                <li><a href="#home-p">Home</a></li>
                                <li><a href="#about-p">About</a></li>
                                <li><a href="#blog-p">Blog</a></li>
                                <li><a href="#services-p">Services</a></li>
                                <li><a href="#contact-p">Contact</a></li>
                            </ul>
                        </nav>

                        <div className="mobil-ico text-decoration-none">
                            <button ref={navOpen} aria-label='openBar' className='open-i'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                            </button>
                            <button ref={navClose} aria-label='closeBar' className='close-i'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </button>
                        </div>

                    </div>
                </div>
            </header>
        </>
    )
}

export default Header