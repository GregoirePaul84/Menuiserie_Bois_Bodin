import React, { useState } from 'react';
import { useEffect } from 'react';

import chairs from '../../Media/Img/main/IMG_5793.webp';

const About = ({scrollY}) => {

    const [homeNav, setHomeNav] = useState(undefined);

    function handleNav(anchor) {
        const serviceSection = document.getElementById('transition-services');
        const contactSection = document.getElementById('transition-contact');

        if(anchor === 'services') {
            serviceSection.scrollIntoView(({behavior: "smooth"}));
        }

        if(anchor === 'contact') {
            contactSection.scrollIntoView(({behavior: "smooth"}));
        }
    }

    useEffect(() => {

        if(scrollY <= 100) {
            document.querySelector('.about-title svg').classList.remove('diamond-active');
        }

        if(scrollY >= 300) {
            document.querySelector('.about-title svg').classList.add('diamond-active');
        } 
        
        if (scrollY >= 600 && homeNav === undefined) {
            setHomeNav('story');
        } 
        
    }, [scrollY]);


    useEffect(() => {
        if (homeNav === undefined) return;

        const h3 = document.querySelector('.content-title h3');
        const arrowText = document.querySelector('.arrow-text');
        const story = document.getElementById('story');
        const storySpan = document.querySelector('#story span');
        const expertise = document.getElementById('expertise');
        const expertiseSpan = document.querySelector('#expertise span');
        const service = document.getElementById('service');
        const serviceSpan = document.querySelector('#service span');
        const engagements = document.getElementById('engagements');
        const engagementsSpan = document.querySelector('#engagements span');

        h3.classList.remove('content-appears'); 
        arrowText.style.animation = "none";

        if(homeNav === 'story') {
            storySpan.style.color = '#C2B887';
            expertiseSpan.style.color = 'inherit';
            serviceSpan.style.color = 'inherit';
            engagementsSpan.style.color = 'inherit';

            story.classList.add('active-nav');
            story.classList.remove('inactive-nav');

            expertise.classList.add('inactive-nav');
            expertise.classList.remove('active-nav');

            service.classList.add('inactive-nav');
            service.classList.remove('active-nav');

            engagements.classList.add('inactive-nav');
            engagements.classList.remove('active-nav');
        }

        if(homeNav === 'expertise') {
            storySpan.style.color = 'inherit';
            expertiseSpan.style.color = '#C2B887';
            serviceSpan.style.color = 'inherit';
            engagementsSpan.style.color = 'inherit';

            story.classList.add('inactive-nav');
            story.classList.remove('active-nav');

            expertise.classList.add('active-nav');
            expertise.classList.remove('inactive-nav');

            service.classList.add('inactive-nav');
            service.classList.remove('active-nav');

            engagements.classList.add('inactive-nav');
            engagements.classList.remove('active-nav');
        }

        if(homeNav === 'service') {
            storySpan.style.color = 'inherit';
            serviceSpan.style.color = '#C2B887';
            expertiseSpan.style.color = 'inherit';
            engagementsSpan.style.color = 'inherit';

            story.classList.add('inactive-nav');
            story.classList.remove('active-nav');

            expertise.classList.add('inactive-nav');
            expertise.classList.remove('active-nav');

            service.classList.add('active-nav');
            service.classList.remove('inactive-nav');

            engagements.classList.add('inactive-nav');
            engagements.classList.remove('active-nav');
        }

        if(homeNav === 'engagements') {
            storySpan.style.color = 'inherit';
            serviceSpan.style.color = 'inherit';
            expertiseSpan.style.color = 'inherit';
            engagementsSpan.style.color = '#C2B887';

            story.classList.add('inactive-nav');
            story.classList.remove('active-nav');

            expertise.classList.add('inactive-nav');
            expertise.classList.remove('active-nav');

            service.classList.add('inactive-nav');
            service.classList.remove('active-nav');

            engagements.classList.add('active-nav');
            engagements.classList.remove('inactive-nav');
        }

        setTimeout(() => {
            h3.classList.add('content-appears'); 
            arrowText.style.animation = "opa0to1 3s ease forwards";
        }, 100)

    }, [homeNav]);

    return (
        <>
            <div className="about-container">
                <div className="about-title">
                    <svg width="220" height="50" viewBox="0 0 319 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="212" y="53.033" width="75" height="75" transform="rotate(-45 212 53.033)" fill="#B0A462" fillOpacity="0.6" />
                        <rect x="159" y="53.033" width="75" height="75" transform="rotate(-45 159 53.033)" fill="#9B9053" fillOpacity="0.7"/>
                        <rect x="106" y="54.033" width="75" height="75" transform="rotate(-45 106 54.033)" fill="#857B47" fillOpacity="0.8"/>
                        <rect x="53" y="53.033" width="75" height="75" transform="rotate(-45 53 53.033)" fill="#645D35" fillOpacity="0.9"/>
                        <rect y="54.033" width="75" height="75" transform="rotate(-45 0 54.033)" fill="#4F492B"/>
                    </svg>
                    <h2>
                        <span>À</span> PROPOS
                    </h2>
                </div>
                <div className="about-nav">
                    <ul>
                        <li onClick={() => {setHomeNav('story')}} id='story'>
                            <span>Notre histoire</span>
                        </li>
                        <li onClick={() => {setHomeNav('expertise')}} id='expertise'>
                            <span>Notre expertise</span>
                        </li>
                        <li onClick={() => {setHomeNav('service')}} id='service'>
                            <span>Nos services</span>
                        </li>
                        <li onClick={() => {setHomeNav('engagements')}} id='engagements'>
                            <span>Nos engagements</span>
                        </li>
                    </ul>     
                </div>
            </div>   
            <div className='about-img-container'>
                <div className="background">
                    <img src={chairs} alt="" />
                </div>
                {(homeNav === 'story') ? 
                    <div className="about-content">
                        <div className="content-title">
                            <h3>
                                <span>N</span>otre <span>h</span>istoire
                            </h3>
                        </div>
                        <div className="arrow-text">
                            <h4>Bienvenue chez <strong><span>M</span>enuiserie <span>B</span>ois <span>B</span>odin !</strong></h4>
                            <div className="text-separation">
                                <div className="colored-line"></div>
                            </div>
                            <p>
                                Fondé en janvier 2023 par Samy Bodin, <strong>Menuiserie Bois Bodin</strong> est une entreprise qui puise sa force dans une décennie d'expérience personnelle en menuiserie. Nous sommes fiers de mettre notre passion pour le bois et notre expertise <span>au service de nos clients.</span>
                            </p>
                            <div className="text-separation">
                                <div className="colored-line"></div>
                            </div>
                            <p>
                                Avec une <span>carrière de 10 ans en menuiserie</span>, Samy Bodin a développé une passion inébranlable pour le bois et l'artisanat. L'ouverture de <strong>Menuiserie Bois Bodin</strong> marque le début d'une nouvelle aventure, combinant une riche expérience et un engagement envers l'excellence. 
                            </p>
                        </div>    
                    </div>
                    :(homeNav === 'expertise') ? 
                        <div className="about-content">
                            <div className="content-title">
                                <h3>
                                    <span>N</span>otre 
                                    <span> e</span>xpertise
                                </h3>
                            </div>
                            <div className="arrow-text">
                                <p>
                                    Fort de notre expérience, nous avons acquis une compréhension profonde des subtilités de la menuiserie bois. Nous sommes spécialisés dans la <strong><span>restauration du patrimoine</span></strong> et la <strong><span>création de menuiserie sur mesure</span></strong>, en utilisant des techniques traditionnelles et des matériaux de qualité. 
                                </p>
                                <div className="text-separation">
                                    <div className="colored-line"></div>
                                </div>
                                <p>
                                    Attachés aux techniques artisanales, nous garantissons une <span>durabilité</span> et une <span>finition irréprochable</span> de nos produits. Nous sommes à l'écoute de nos clients pour comprendre leurs besoins et leur proposer des solutions personnalisées et adaptées à leur budget. Avec <strong>Menuiserie Bois Bodin</strong>, vous êtes assuré de bénéficier d'un travail de qualité, réalisé avec passion et savoir-faire.
                                </p>
                            </div>    
                        </div>
                    : (homeNav === 'service') ?
                        <div className="about-content">
                            <div className="content-title">
                                <h3>
                                    <span>N</span>os
                                    <span> s</span>ervices
                                </h3>
                            </div>
                            <div className="arrow-text">
                                <ul>
                                    <li>
                                        <h5>Restauration du Patrimoine :</h5>
                                        <p>Nous apportons une touche de respect historique à chaque projet, en préservant l'essence même des éléments en bois anciens.</p>
                                    </li>
                                    <li>
                                        <h5>Menuiserie sur Mesure :</h5>
                                        <p>Chaque pièce que nous créons est unique, conçue spécialement pour s'adapter à vos besoins et à votre esthétique.</p>
                                    </li>
                                    <li>
                                        <h5>Conseils et Expertise :</h5>
                                        <p>Notre expérience nous permet de vous conseiller judicieusement sur les meilleures pratiques en <strong>menuiserie</strong> et sur les choix de matériaux.</p>
                                    </li>
                                </ul>
                                <button className='about-btn' onClick={() => handleNav('services')}>
                                    Découvrir
                                </button>
                            </div>        
                        </div>
                    : (homeNav === 'engagements') ?
                    <div className="about-content">
                        <div className="content-title">
                            <h3>
                                <span>N</span>os
                                <span> e</span>ngagements
                            </h3>
                        </div>
                        <div className="arrow-text">
                            <p>
                                Le bois est notre passion, et nous nous engageons à utiliser des matériaux durables tout en préservant l'artisanat traditionnel. Notre objectif est de créer des pièces qui <span>durent dans le temps et qui transmettent un héritage</span>. 
                            </p>
                            <div className="text-separation">
                                <div className="colored-line"></div>
                            </div>
                            <h5 className='about-contact'>Contactez nous !</h5>
                            <p>
                                Découvrez comment <strong>Menuiserie Bois Bodin</strong> peut donner vie à vos projets en bois. <span>Contactez-nous dès aujourd'hui</span> pour discuter de vos besoins ou pour obtenir un devis personnalisé. Nous sommes impatients de collaborer avec vous pour préserver le patrimoine et créer des pièces uniques en bois. 
                            </p>
                            <button className='about-btn' onClick={() => handleNav('contact')}>
                                Nous contacter
                            </button>
                        </div>        
                    </div>
                    : null
                }  
            </div>
            
        </>
    );
};

export default About;