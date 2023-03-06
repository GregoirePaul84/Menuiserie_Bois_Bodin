import React, { useEffect, useState } from 'react';

import Logo from '../Svg/Logo';

const Header = () => {

    const [menuActive, setMenuActive] = useState(false);
    
    function scrollSection(section) {
        const aboutSection = document.getElementById('transition-about');
        const serviceSection = document.getElementById('transition-services');
        const achievementSection = document.getElementById('transition-achievements');
        const contactSection = document.getElementById('transition-contact');

        if (section === 'about') {
            aboutSection.scrollIntoView(({behavior: "smooth"}));

            if(menuActive) {
                const about = document.getElementById('about-tablet');
                const otherLis = document.querySelectorAll('#tablet-nav li:not(#about-tablet)');

                about.style.backgroundColor = '#C2B887';
                otherLis.forEach((li) => li.style.backgroundColor = 'inherit');
            }
        }
           
        if (section === 'services') {
            serviceSection.scrollIntoView(({behavior: "smooth"}));

            if(menuActive) {
                const services = document.getElementById('services-tablet');
                const otherLis = document.querySelectorAll('#tablet-nav li:not(#services-tablet)');

                services.style.backgroundColor = '#C2B887';
                otherLis.forEach((li) => li.style.backgroundColor = 'inherit');
            }
        }
            
        if (section === 'achievements') {
            achievementSection.scrollIntoView(({behavior: "smooth"}));

            if(menuActive) {
                const achievements = document.getElementById('achievements-tablet');
                const otherLis = document.querySelectorAll('#tablet-nav li:not(#achievements-tablet)');

                achievements.style.backgroundColor = '#C2B887';
                otherLis.forEach((li) => li.style.backgroundColor = 'inherit');
            }
        }
            
        if (section === 'contact') {
            contactSection.scrollIntoView(({behavior: "smooth"}));

            if(menuActive) {
                const contact = document.getElementById('contact-tablet');
                const otherLis = document.querySelectorAll('#tablet-nav li:not(#contact-tablet)');

                contact.style.backgroundColor = '#C2B887';
                otherLis.forEach((li) => li.style.backgroundColor = 'inherit');
            }
        }
            
    }

    useEffect(() => {
        console.log(menuActive);
    }, [menuActive]);

    return (
        <header>
            <div className='logo-container'>
                <Logo />
                <h3>
                    Menuiserie Bois <br />
                    Bodin
                </h3>
            </div>
            {(window.innerWidth > 1024) ? 
            <nav id='desktop-nav'>
                <ul>
                    <li id='about-link' onClick={() => scrollSection('about')}>À propos</li>
                    <li id='services-link' onClick={() => scrollSection('services')}>Services</li>
                    <li id='achievements-link' onClick={() => scrollSection('achievements')}>Réalisations</li>
                    <li id='contact-link' onClick={() => scrollSection('contact')}>Contact</li>
                </ul>
            </nav>
            :
            <div className="hamburger-menu">
                <svg width="45" height="70" viewBox="0 0 81 71" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setMenuActive(!menuActive)}>
                    <path d="M0 0H81V11.7711H0V0Z" fill="#C2B887" fillOpacity="0.8"/>
                    <path d="M0 29.5211H81V41.4789H0V29.5211Z" fill="#C2B887" fillOpacity="0.8"/>
                    <path d="M0 59.2289H81V71H0V59.2289Z" fill="#C2B887" fillOpacity="0.8"/>
                </svg>
                {(menuActive) ?
                    <nav id='tablet-nav'>
                        <ul>
                            <li id='about-tablet' onClick={() => scrollSection('about')}>À propos</li>
                            <li id='services-tablet' onClick={() => scrollSection('services')}>Services</li>
                            <li id='achievements-tablet' onClick={() => scrollSection('achievements')}>Réalisations</li>
                            <li id='contact-tablet' onClick={() => scrollSection('contact')}>Contact</li>
                        </ul>
                    </nav>
                    : null
                }
                
            </div>
           
            }
            
        </header>
    );
};

export default Header;