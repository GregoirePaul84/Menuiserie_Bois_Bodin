import React, { useState } from 'react';
import { useEffect } from 'react';

import Inside from './Inside';

const About = ({scrollY}) => {

    const [homeNav, setHomeNav] = useState(undefined);

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
        const company = document.getElementById('company');
        const values = document.getElementById('values');

        h3.classList.remove('content-appears'); 
        arrowText.style.animation = "none";

        if(homeNav === 'story') {
            story.style.color = '#C2B887';
            company.style.color = 'inherit';
            values.style.color = 'inherit';

            story.classList.add('active-nav');
            story.classList.remove('inactive-nav');

            company.classList.add('inactive-nav');
            company.classList.remove('active-nav');

            values.classList.add('inactive-nav');
            values.classList.remove('active-nav');
        }

        if(homeNav === 'company') {
            story.style.color = 'inherit';
            company.style.color = '#C2B887';
            values.style.color = 'inherit';

            story.classList.add('inactive-nav');
            story.classList.remove('active-nav');

            company.classList.add('active-nav');
            company.classList.remove('inactive-nav');

            values.classList.add('inactive-nav');
            values.classList.remove('active-nav');
        }

        if(homeNav === 'values') {
            story.style.color = 'inherit';
            values.style.color = '#C2B887';
            company.style.color = 'inherit';

            story.classList.add('inactive-nav');
            story.classList.remove('active-nav');

            company.classList.add('inactive-nav');
            company.classList.remove('active-nav');

            values.classList.add('active-nav');
            values.classList.remove('inactive-nav');
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
                            L'histoire
                        </li>
                        <li onClick={() => {setHomeNav('company')}} id='company'>
                            La société
                        </li>
                        <li onClick={() => {setHomeNav('values')}} id='values'>
                            Les valeurs
                        </li>
                    </ul>     
                </div>
            </div>   
            <div className='about-img-container'>
                <Inside scrollY={scrollY} />  
                {(homeNav === 'story') ? 
                    <div className="about-content">
                        <div className="content-title">
                            <h3>
                                <span>L' </span>Histoire
                            </h3>
                        </div>
                        <div className="arrow-text">
                            <svg width="61" height="21" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                            </svg>
                            <p>
                                <strong>Menuiserie Bois Bodin </strong>
                                est née d'un menuisier passionné, Samy Bodin, qui a parcouru la France et le monde pendant plus de 10 ans pour <span>perfectionner son art</span>. 
                            </p>
                            <div className="text-separation">
                                <div className="colored-line"></div>
                            </div>
                            <p>
                                Fort de son expérience en 
                                <span>
                                    <strong> rénovation de monuments historiques</strong>
                                </span> et en 
                                <span>
                                    <strong> fabrication traditionnelle</strong>
                                </span>
                                , Samy est fier d'ouvrir son atelier dans sa région natale à <strong>Chemillé-en-Anjou</strong> pour vous accompagner dans vos projets les plus ambitieux partout en France.
                            </p>
                        </div>    
                    </div>
                    :(homeNav === 'company') ? 
                        <div className="about-content">
                            <div className="content-title">
                                <h3>
                                    <span>L</span>a 
                                    <span> S</span>ociété
                                </h3>
                            </div>
                            <div className="arrow-text">
                                <svg width="61" height="21" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                                </svg>
                                <p>
                                    <strong>Menuiserie Bois Bodin</strong> est spécialisée dans la conception et la fabrication de produits en bois sur mesure pour les particuliers et les professionnels. 
                                </p>
                                <div className="text-separation">
                                    <div className="colored-line"></div>
                                </div>
                                <p>
                                    Nous mettons notre expertise à votre disposition pour réaliser tous types de projets, qu'il s'agisse de la création de meubles sur mesure, de la rénovation d'escaliers, de la fabrication de portes, fenêtres et parquets, ou encore de la reproduction et la restauration de menuiseries anciennes dans le respect des traditions.
                                </p>
                                <div className="text-separation">
                                    <div className="colored-line"></div>
                                </div>
                                <p>
                                    Attachés aux techniques artisanales, nous travaillons avec des matériaux de qualité pour garantir une durabilité et une finition irréprochable de nos produits. Nous sommes à l'écoute de nos clients pour comprendre leurs besoins et leur proposer des solutions personnalisées et adaptées à leur budget. Avec notre entreprise, vous êtes assuré de bénéficier d'un travail de qualité, réalisé avec passion et savoir-faire.
                                </p>
                            </div>    
                        </div>
                    : (homeNav === 'values') ?
                        <div className="about-content">
                            <div className="content-title">
                                <h3>
                                    <span>L</span>es
                                    <span> V</span>aleurs
                                </h3>
                            </div>
                            <div className="arrow-text">
                                <svg width="61" height="21" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                                </svg>
                                <p>
                                    Chez <strong> Menuiserie Bois Bodin</strong>
                                        , nous sommes attachés aux techniques artisanales et travaillons avec des matériaux de qualité pour garantir une durabilité et une finition irréprochable de nos produits.
                                </p>
                                <div className="text-separation">
                                    <div className="colored-line"></div>
                                </div>
                                <p>
                                    Nous mettons notre expertise à votre disposition pour réaliser tous types de projets, qu'il s'agisse de la création de meubles sur mesure, de la rénovation d'escaliers, de la fabrication de portes, fenêtres et parquets, ou encore de la reproduction et la restauration de menuiseries anciennes dans le respect des traditions.
                                </p>
                                {/* <p>
                                    Attachés aux techniques artisanales, nous travaillons avec des matériaux de qualité pour garantir une durabilité et une finition irréprochable de nos produits. Nous sommes à l'écoute de nos clients pour comprendre leurs besoins et leur proposer des solutions personnalisées et adaptées à leur budget. Avec notre entreprise, vous êtes assuré de bénéficier d'un travail de qualité, réalisé avec passion et savoir-faire.
                                </p> */}
                            </div>        
                        </div>
                    : null
                }  
            </div>
            
        </>
    );
};

export default About;