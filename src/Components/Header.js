import React from 'react';

import Logo from '../Svg/Logo';

const Header = () => {
    
    function scrollSection(section) {
        const aboutSection = document.getElementById('transition-about');
        const serviceSection = document.getElementById('transition-services');
        const achievementSection = document.getElementById('transition-achievements');
        const contactSection = document.getElementById('transition-contact');

        if (section === 'about') 
            aboutSection.scrollIntoView(({behavior: "smooth"}));
        if (section === 'services')
            serviceSection.scrollIntoView(({behavior: "smooth"}));
        if (section === 'achievements')
            achievementSection.scrollIntoView(({behavior: "smooth"}));
        if (section === 'contact')
            contactSection.scrollIntoView(({behavior: "smooth"}));
    }

    return (
        <header>
            <div className='logo-container'>
                <Logo />
            </div>
            <nav>
                <ul>
                    <li id='about-link' onClick={() => scrollSection('about')}>À propos</li>
                    <li id='services-link' onClick={() => scrollSection('services')}>Services</li>
                    <li id='achievements-link' onClick={() => scrollSection('achievements')}>Réalisations</li>
                    <li id='contact-link' onClick={() => scrollSection('contact')}>Contact</li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;