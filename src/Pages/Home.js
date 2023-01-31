import React, { useEffect, useRef, useState } from 'react';
import forest from '../Media/Video/forest.mp4';

import Header from '../Components/Header';

import Loader from './Loader';
import Services from '../Components/Services/Services';


import Achievements from '../Components/Achievements/Achievements';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';


const Home = () => {

    // const [isLoading, setIsLoading] = useState(true);
    const [scrollY, setScrollY] = useState(0);
    const [categoryService, setCategoryService] = useState(undefined);

    const homeOpacityRef = useRef({isActive: true, value: 999});
    const serviceOpacityRef = useRef({isActive: false, value: 999});

    useEffect(() => {
        console.log(scrollY);

        // Gestion du scroll et de l'opacité sur la section d'ACCUEIL
        if(scrollY >= 0 && scrollY <= 700) {
            homeOpacityRef.current = ({isActive: true, value: homeOpacityRef.current.value});
        }
        else {
            homeOpacityRef.current = ({isActive: false, value: homeOpacityRef.current.value});
        }

        if (homeOpacityRef.current.isActive) {
            document.querySelector('.background video').style.opacity = 0 + '.' + homeOpacityRef.current.value;
            
            if(homeOpacityRef.current.value > 100) {
                homeOpacityRef.current = ({isActive: homeOpacityRef.current.isActive, value: Math.trunc(-scrollY * 1.25 + 999)});
            }
            else {
                homeOpacityRef.current = ({isActive: homeOpacityRef.current.isActive, value: '0' + Math.trunc(-scrollY * 1.25 + 999)});
            }
        }

        // Gestion du scroll et de l'opacité sur la section A PROPOS
        if(scrollY >= 800 && scrollY <= 1500) {
            serviceOpacityRef.current = ({isActive: true, value: serviceOpacityRef.current.value});
        }
        else {
            serviceOpacityRef.current = ({isActive: false, value: serviceOpacityRef.current.value});
        }

        if (serviceOpacityRef.current.isActive) {
            document.querySelector('.inside-svg').style.opacity = 0 + '.' + serviceOpacityRef.current.value;
            // console.log(serviceOpacityRef.current.value);
            
            if(serviceOpacityRef.current.value >= 100) {
                serviceOpacityRef.current = ({isActive: serviceOpacityRef.current.isActive, value: Math.trunc(-scrollY * 1.2 + 1958)});
            }
            else if(serviceOpacityRef.current.value === 0) {
                serviceOpacityRef.current = 0;
            }
            else {
                serviceOpacityRef.current = ({isActive: serviceOpacityRef.current.isActive, value: '0' + Math.trunc(-scrollY * 1.2 + 1958)});
            }
        }

        if (scrollY >= 1400) {
            if (!document.querySelector('.services-container').classList.contains('category-added')) {
                document.querySelector('.services-container').classList.add('category-added');
                setCategoryService(0);
            }
        }

        if(scrollY <= 2550) {
            document.querySelector('.contact-title svg').classList.remove('diamond-active');
        }

        if(scrollY >= 2850) {
            document.querySelector('.contact-title svg').classList.add('diamond-active');
        } 
           
    }, [scrollY, homeOpacityRef.current.value, serviceOpacityRef.current.value]);

    const handleScroll = () => {    
        setScrollY(window.scrollY);
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll, {
        });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
        <Loader />
        <div className="home-container">
            <div className="background">
                <video 
                    className='home-video'
                    width="100%" 
                    height="100%" 
                    autoPlay muted loop 
                    // onLoadedData={() => {
                    //     checkLoading();
                    // }}
                    >
                    <source src={forest} type="video/mp4"/>
                </video>
            </div>
            <div className="foreground">
                <Header />
                <main>
                    <section className="home">
                        <div className="home-left-column">
                            <div className="main-info">
                                <h1>
                                    <span>M</span>enuiserie <span>B</span>ois <span>B</span>odin
                                </h1>
                                <p>
                                    Votre service de menuiserie pour 
                                    <br /> 
                                    clients exigeants.
                                </p>
                                <div className="contact-redirection">
                                    <svg width="35" height="20" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                                    </svg>
                                    <button>Demander un devis</button>
                                </div>            
                            </div>
                        </div>
                        <div className="home-right-column">
                            <div className="swiper-nav">
                                <div className="square square-active"></div>
                                <div className="square"></div>
                                <div className="square"></div>
                            </div>
                        </div>
                    </section>
                    <div className='transition' id="transition-about"></div>
                    <section id='about'>
                        <About scrollY={scrollY} />
                    </section>
                    <div className='transition' id="transition-services"></div>
                    <section id="services">
                        <Services scrollY={scrollY} categoryService={categoryService} setCategoryService={setCategoryService} />
                    </section>
                    <div className='transition' id="transition-achievements"></div>
                    <section id="achievements">
                        <Achievements scrollY={scrollY} />
                    </section>
                    <div className='transition' id="transition-contact"></div>                    
                    <section id="contact">
                        <div className="contact-container">
                            <div className="contact-title">
                                <svg width="220" height="50" viewBox="0 0 319 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="212" y="53.033" width="75" height="75" transform="rotate(-45 212 53.033)" fill="#B0A462" fillOpacity="0.6" />
                                    <rect x="159" y="53.033" width="75" height="75" transform="rotate(-45 159 53.033)" fill="#9B9053" fillOpacity="0.7"/>
                                    <rect x="106" y="54.033" width="75" height="75" transform="rotate(-45 106 54.033)" fill="#857B47" fillOpacity="0.8"/>
                                    <rect x="53" y="53.033" width="75" height="75" transform="rotate(-45 53 53.033)" fill="#645D35" fillOpacity="0.9"/>
                                    <rect y="54.033" width="75" height="75" transform="rotate(-45 0 54.033)" fill="#4F492B"/>
                                </svg>
                                <h2>
                                    <span>C</span>ONTACT
                                </h2>
                            </div>
                            <div className="contact-nav">
                                <h4>
                                    <span>M</span>enuiserie
                                    <span> B</span>ois
                                    <span> B</span>odin
                                </h4>
                                <ul>
                                    <li>
                                        06 38 25 88 73
                                    </li>
                                    <li>
                                        Zone A du Bon René <br />
                                        49750 Chemillé-en-Anjou
                                    </li>
                                    <li>
                                        menuiserieboisbodin@gmail.com
                                    </li>
                                </ul>     
                            </div>
                        </div>
                        <div className="form-container">
                            <div className="contact-us">
                                <p>
                                    Une demande particulière ? Besoin d'un devis gratuit?
                                </p>
                                <p>
                                    Contactez-nous !
                                </p>
                            </div>
                            <Contact />
                        </div>
                    </section>
                </main>       
            </div>
        </div>
        </>
    );
};

export default Home;