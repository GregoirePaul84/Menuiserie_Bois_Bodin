import React, { useEffect, useRef, useState } from 'react';

import Header from '../Components/Header';

import Loader from './Loader';

import Logo from '../Svg/Logo';
import topOfPage from '../Media/Icons/arrow-up.png';

import Services from '../Components/Services/Services';
import Achievements from '../Components/Achievements/Achievements';
import About from '../Components/About/About';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer';
import Company from '../Components/Home/Company';

let interval;

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [handleSlide, setHandleSlide] = useState({'play': false, 'index': 0});
    const [scrollY, setScrollY] = useState(0);
    const [categoryService, setCategoryService] = useState(undefined);

    const homeOpacityRef = useRef({isActive: true, value: 999});
    const serviceOpacityRef = useRef({isActive: false, value: 999});
    const achievementOpacityRef = useRef({isActive: false, value: 0});

    const home = document.getElementById('home');

    // Remonte en haut de la page
    function rideUp() {
        home.scrollIntoView(({behavior: "smooth"}));
    }

    // Change le slider selon le temps ou l'action utilisateur
    function changeInfo(index) {
        const homeSlider = document.querySelector('#home .home-slider');
        const video = document.getElementsByTagName('video')[0];

        switch(index) {
            case 0: 
                console.log("page d'accueil");
                video.pause();
                break;
            case 1:
                video.play();
                homeSlider.style.animation = 'homeTranslate0 1s ease-out forwards';
                document.querySelector('.swiper-nav .square:nth-child(1)').classList.add('square-active');
                document.querySelectorAll('.swiper-nav .square:not(.square:nth-child(1))').forEach((e) => e.classList.remove('square-active'));
                break;
            case 2:
                video.pause();
                homeSlider.style.animation = 'homeTranslate100 1s ease-out forwards';
                document.querySelector('.swiper-nav .square:nth-child(2)').classList.add('square-active');
                document.querySelectorAll('.swiper-nav .square:not(.square:nth-child(2))').forEach((e) => e.classList.remove('square-active'));
                break;
            case 3:
                video.pause();
                homeSlider.style.animation = 'homeTranslate200 1s ease-out forwards';
                document.querySelector('.swiper-nav .square:nth-child(3)').classList.add('square-active');
                document.querySelectorAll('.swiper-nav .square:not(.square:nth-child(3))').forEach((e) => e.classList.remove('square-active'));
                break;
            default:
                console.log('erreur');
        }
    }

    // Change les slide de manière automatique
    function timer() {
        let imgIndex = 2;

        interval = setInterval(function() { 
           if (imgIndex <= 3) { 
                console.log(imgIndex);
                changeInfo(imgIndex);
                imgIndex++;
           }
           else { 
                imgIndex = 1;
           }
        }, 5000);
    }

    // Arrête le timer lors du choix de slide manuel
    function stopTimer() {
        clearInterval(interval);
        changeInfo(handleSlide.index)
    }

    useEffect(() => {
                
        if(handleSlide.play) {
            console.log('yes');
           timer();
        }
        else {
            stopTimer();
        }
    }, [handleSlide])

    useEffect(() => {
        const topBtn = document.getElementById('top-of-page');
        // console.log(scrollY);

        if(scrollY > 0) {
            topBtn.style.visibility = 'visible';
        }

        else {
            topBtn.style.visibility = 'hidden';
        }

        // Gestion du scroll et de l'opacité sur la section d'ACCUEIL
        if(scrollY >= 0 && scrollY <= 700) {
            console.log('home on');
            homeOpacityRef.current = ({isActive: true, value: homeOpacityRef.current.value});
        }
        else {
            homeOpacityRef.current = ({isActive: false, value: homeOpacityRef.current.value});
        }

        if (homeOpacityRef.current.isActive) {
            document.querySelectorAll('.background').forEach((e) => e.style.opacity = 0 + '.' + homeOpacityRef.current.value);
            
            if(homeOpacityRef.current.value > 100) {
                homeOpacityRef.current = ({isActive: homeOpacityRef.current.isActive, value: Math.trunc(-scrollY * 1.25 + 999)});
            }
            else {
                homeOpacityRef.current = ({isActive: homeOpacityRef.current.isActive, value: '0' + Math.trunc(-scrollY * 1.25 + 999)});
            }
        }

        // Gestion du scroll et de l'opacité sur la section A PROPOS
        if(scrollY >= 800 && scrollY <= 1500) {
            console.log('about on');
            serviceOpacityRef.current = ({isActive: true, value: serviceOpacityRef.current.value});
        }
        else {
            serviceOpacityRef.current = ({isActive: false, value: serviceOpacityRef.current.value});
        }

        if (serviceOpacityRef.current.isActive) {
            document.querySelector('.inside-svg').style.opacity = 0 + '.' + serviceOpacityRef.current.value;
            
            if(serviceOpacityRef.current.value >= 100) {
                serviceOpacityRef.current = ({isActive: serviceOpacityRef.current.isActive, value: Math.trunc(-scrollY * 1.2 + 1958)});
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

        // Gestion du scroll et de l'opacité sur la section A PROPOS
        if(scrollY >= 1800 && scrollY <= 2400) {
            console.log('achievements on');
            achievementOpacityRef.current = ({isActive: true, value: achievementOpacityRef.current.value});
        }
        else {
            achievementOpacityRef.current = ({isActive: false, value: achievementOpacityRef.current.value});
        }

        if (achievementOpacityRef.current.isActive) {
            // document.querySelector('.works-background img').style.opacity = achievementOpacityRef.current.value;

            console.log(0 + '.' + Math.trunc(scrollY - 1700));

            achievementOpacityRef.current = ({isActive: achievementOpacityRef.current.isActive, value: 0 + '.' + Math.trunc(scrollY - 1700)});  
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
        <Loader isLoading={isLoading} setIsLoading={setIsLoading} setHandleSlide={setHandleSlide} />
        <div className="home-container">
            <div className="foreground">
                <Header />
                <main>
                    <section id="home">
                        <div id="top-of-page" onClick={() => {rideUp()}}>
                            <img src={topOfPage} alt="redirection vers le haut de page"/>
                            <p>Haut de page</p>
                        </div>
                        <Company isLoading={isLoading} setIsLoading={setIsLoading}/>
                        <div className="home-right-column">
                            <div className="swiper-nav">
                                <div className="square square-active" onClick={() => setHandleSlide({'play': false, 'index': 1})}></div>
                                <div className="square" onClick={() => setHandleSlide({'play': false, 'index': 2})}></div>
                                <div className="square" onClick={() => setHandleSlide({'play': false, 'index': 3})}></div> 
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
                            <div className="contact-logo">
                                <Logo />
                            </div>    
                            <div className="contact-nav">
                                <h4>
                                    <span>M</span>enuiserie
                                    <span> B</span>ois
                                    <span> B</span>odin
                                </h4>
                                <ul>
                                    <li>
                                        <svg width="52" height="50" viewBox="0 0 52 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 25.0004C0 38.785 11.4581 50 25.5426 50C39.627 50 51.0843 38.786 51.0843 25.0004C51.0843 11.215 39.627 -1.66893e-06 25.5426 -1.66893e-06C11.4581 -1.66893e-06 0 11.2159 0 25.0004ZM20.5036 14.7861L23.3041 17.5247C23.9569 18.1645 23.9569 19.1953 23.3041 19.8335L22.3002 20.817C22.2094 20.9054 22.1604 21.0142 22.1291 21.1282C21.4426 22.0346 21.5094 23.317 22.3467 24.1374L26.4217 28.1259C27.2599 28.948 28.5719 29.0139 29.4962 28.3397C29.6126 28.3091 29.7229 28.2603 29.8141 28.1736L30.8189 27.1879C31.4708 26.5516 32.5259 26.5499 33.1762 27.1879L35.9776 29.9281C36.6295 30.5685 36.6295 31.5989 35.9776 32.2371L33.966 34.2046C31.4746 36.6464 27.4175 36.6445 24.9247 34.2046L16.1372 25.6027C13.6453 23.1627 13.6453 19.1928 16.1372 16.7532L18.1465 14.7861C18.7992 14.148 19.8529 14.148 20.5036 14.7861Z" fill="#C2B887"/>
                                        </svg>
                                        06 38 25 88 73
                                    </li>
                                    <li>
                                        <svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.2469 0C8.62648 0 0.130127 8.31601 0.130127 18.711C0.130127 31.6008 7.35203 43.0353 18.1849 49.6881C18.8221 50.104 19.6717 50.104 20.5214 49.6881C31.1418 42.8274 38.3637 31.6008 38.3637 18.711C38.3637 8.31601 29.8674 0 19.2469 0ZM19.2469 27.027C14.5739 27.027 10.7506 23.2848 10.7506 18.711C10.7506 14.1372 14.5739 10.395 19.2469 10.395C23.9199 10.395 27.7433 14.1372 27.7433 18.711C27.7433 23.2848 23.9199 27.027 19.2469 27.027Z" fill="#C2B887"/>
                                        </svg>
                                        Zone A du Bon René <br />
                                        49750 Chemillé-en-Anjou
                                    </li>
                                    <li>
                                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M41.1914 36.6309C38.8574 39.1016 36.084 40.9082 32.8711 42.041C29.6582 43.1836 26.2695 43.75 22.7051 43.75C19.2969 43.75 16.1914 43.2129 13.3984 42.1289C10.6055 41.0547 8.21289 39.5508 6.24023 37.627C4.25781 35.7031 2.72461 33.3984 1.63086 30.7129C0.537109 28.0273 0 25.0977 0 21.9238C0 18.7891 0.595703 15.8887 1.78711 13.2227C2.97852 10.5566 4.59961 8.24219 6.66016 6.2793C8.7207 4.31641 11.123 2.7832 13.8867 1.66016C16.6309 0.556641 19.5801 0 22.7051 0C25.4004 0 28.0176 0.390625 30.5469 1.17188C33.0859 1.95312 35.332 3.13477 37.2949 4.69727C39.2578 6.26953 40.8203 8.22266 41.9922 10.5762C43.1641 12.9297 43.75 15.6934 43.75 18.8672C43.75 21.2207 43.4277 23.3008 42.7734 25.0977C42.1191 26.9043 41.25 28.4082 40.1562 29.6289C39.0625 30.8496 37.8223 31.7578 36.416 32.3633C35.0098 32.9688 33.5352 33.2715 31.9922 33.2715C30.4102 33.2715 29.1406 32.9004 28.1836 32.1582C27.2363 31.416 26.7578 30.4688 26.7578 29.3359H26.4648C25.8691 30.2734 24.9609 31.1719 23.7305 32.0117C22.5 32.8516 20.9961 33.2812 19.209 33.2812C16.5137 33.2812 14.4336 32.4023 12.9688 30.6348C11.5039 28.8672 10.7715 26.582 10.7715 23.75C10.7715 22.0996 11.0449 20.4785 11.6016 18.8672C12.1582 17.2559 12.9492 15.8301 13.9746 14.5703C15 13.3203 16.2305 12.3047 17.6562 11.543C19.082 10.7812 20.6641 10.4004 22.4121 10.4004C23.916 10.4004 25.1855 10.7129 26.2207 11.3379C27.2461 11.9629 27.9199 12.7344 28.2422 13.6328H28.3008L28.7793 11.2793H34.0723L31.7383 22.4023C31.6602 22.9492 31.5527 23.5547 31.416 24.2285C31.2793 24.8926 31.2109 25.5176 31.2109 26.1133C31.2109 26.7773 31.3379 27.334 31.6016 27.793C31.8555 28.2422 32.3633 28.4668 33.1152 28.4668C34.6582 28.4668 35.9375 27.6465 36.9531 25.9961C37.959 24.3457 38.4668 22.1387 38.4668 19.3555C38.4668 17.002 38.0664 14.9121 37.2754 13.0957C36.4844 11.2695 35.3809 9.74609 33.9746 8.50586C32.5684 7.27539 30.8887 6.33789 28.9551 5.71289C27.0117 5.08789 24.8926 4.77539 22.5977 4.77539C20.0977 4.77539 17.8125 5.21484 15.7324 6.09375C13.6523 6.97266 11.875 8.19336 10.4102 9.73633C8.94531 11.2891 7.80273 13.1055 6.99219 15.2051C6.17188 17.2949 5.76172 19.5605 5.76172 21.9922C5.76172 24.5801 6.19141 26.9141 7.04102 28.9941C7.89062 31.0742 9.0918 32.8418 10.6348 34.3164C12.1777 35.791 14.0234 36.9141 16.1621 37.6953C18.3008 38.4766 20.6641 38.8672 23.2324 38.8672C26.4453 38.8672 29.209 38.3594 31.5234 37.334C33.8379 36.3184 35.9668 34.9023 37.9102 33.0957L41.1914 36.6309ZM22.5879 15.2344C21.6406 15.2344 20.8008 15.5078 20.0879 16.0547C19.375 16.6016 18.7695 17.2949 18.2715 18.1445C17.7734 18.9844 17.4023 19.9219 17.1387 20.9375C16.8848 21.9531 16.748 22.9395 16.748 23.877C16.748 24.3457 16.7969 24.8438 16.8945 25.3809C16.9922 25.9082 17.1875 26.3965 17.4902 26.8555C17.7832 27.3047 18.1738 27.6758 18.6523 27.9688C19.1309 28.2617 19.7656 28.4082 20.5566 28.4082C21.6309 28.4082 22.5391 28.1445 23.291 27.6172C24.043 27.0898 24.6582 26.4258 25.1367 25.6152C25.6152 24.8145 25.957 23.9355 26.1816 22.998C26.3965 22.0605 26.5039 21.1914 26.5039 20.4102C26.5039 19.7852 26.4453 19.1699 26.3281 18.5547C26.2109 17.9492 26.0059 17.4023 25.7031 16.9043C25.4102 16.416 25 16.0156 24.4824 15.7031C23.9746 15.3906 23.3398 15.2344 22.5879 15.2344Z" fill="#C2B887"/>
                                        </svg>
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
                    <div className="transition"></div>
                </main>    
                <Footer />   
            </div>
        </div>
        </>
    );
};

export default Home;