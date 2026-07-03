import '../assets/css/contact.css'

function contact(){
    return(
        <>
            <section className="section-content" id="contact-p">
                <div className="banner-2">
                    <h2>İletişim</h2>
                </div>

                <div className="area">
                    <div className="area-cont container">
                        <div className="text-content">

                            <div className="text-1">
                                <div className="head-t">
                                    <h3>Bize Nasıl Ulaşabilirsiniz?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo officiis sequi iusto quasi tenetur nisi quae blanditiis optio error architecto.</p>
                                </div>
                                <address className="content-info">
                                    <a href="tel:+12245678846"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" /></svg> (224) 567-8846</a>
                                    <a href="mailto:purtemizlik@hotmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10" /><path d="M3 7l9 6l9 -6" /></svg> primeclean@hotmail.com</a>
                                </address>
                            </div>

                            <div className="text-1">
                                <div className="head-t">
                                    <h3>Adres</h3>
                                </div>
                                <address className="content-info">
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-8"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12l-3 2" /><path d="M12 7v5" /></svg> Pazartesi - Cuma: 08:00 - 17:00</a>
                                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" /></svg> Türkiye/Mersin</a>
                                </address>
                            </div>
                        </div>


                        <div className="location-if">
                            <iframe className="trs" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d42993.11248963749!2d34.602540119782404!3d36.78321219575251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1527f4a4c0be6e9f%3A0x4dbef2b1f81e7d77!2sMersin%2C%20Akdeniz%2FMersin!5e0!3m2!1str!2str!4v1781364148742!5m2!1str!2str" width="0" height="0" style={{border: "2px solid rgb(0, 68, 255)", borderRadius: "10px", boxShadow: "0px 0px 10px 0px rgba(0, 31, 66, 0.527)"}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default contact