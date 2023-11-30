import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import stairs1 from '../../Media/Img/Services/All_Services/quart_tournant_1.webp';
import stairs2 from '../../Media/Img/Services/All_Services/quart_tournant_2.webp';

import stairs3 from '../../Media/Img/Services/All_Services/quart_tournant_3.webp';
import stairs4 from '../../Media/Img/Services/All_Services/quart_tournant_4.webp';
import stairs5 from '../../Media/Img/Services/All_Services/quart_tournant_3.webp';
import stairs6 from '../../Media/Img/Services/All_Services/quart_tournant_6.webp';

import stairs7 from '../../Media/Img/Services/All_Services/rampe_1.webp';
import stairs8 from '../../Media/Img/Services/All_Services/rampe_2.webp';

import floor1 from '../../Media/Img/Services/All_Services/floor_1.webp';
import floor2 from '../../Media/Img/Services/All_Services/floor_2.webp';
import floor3 from '../../Media/Img/Services/All_Services/floor_3.webp';
import floor4 from '../../Media/Img/Services/All_Services/floor_4.webp';
import floor5 from '../../Media/Img/Services/All_Services/floor_5.webp';

import lambris1 from '../../Media/Img/Services/All_Services/lambris_1.webp';
import lambris2 from '../../Media/Img/Services/All_Services/lambris_2.webp';
import lambris3 from '../../Media/Img/Services/All_Services/lambris_3.webp';

import mouluration1 from '../../Media/Img/Services/All_Services/mouluration_1.webp';
import mouluration2 from '../../Media/Img/Services/All_Services/mouluration_2.webp';

import mouluration4 from '../../Media/Img/Services/All_Services/mouluration_4.webp';

import window1 from '../../Media/Img/Services/All_Services/window_1.webp';

const allServicesPictures = [
    // Escalier un quart tournant
    [
        {
            id: 0,
            img: stairs1,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
        {
            id: 1,
            img: stairs2,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
    ],
    // Escalier deux quarts tournant
    [
        {
            id: 0,
            img: stairs3,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
        {
            id: 1,
            img: stairs4,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
        {
            id: 2,
            img: stairs5,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
        {
            id: 3,
            img: stairs6,
            alt: 'Fabrication d\'un escalier quart tournant en chêne'
        },
    ],
    // Rampe sur rampe
    [
        {
            id: 0,
            img: stairs7,
            alt: 'Fabrication d\'un escalier rampe sur rampe en frêne'
        },
        {
            id: 1,
            img: stairs8,
            alt: 'Fabrication d\'un escalier rampe sur rampe en frêne'
        },
    ],
    // Parquets de Versailles
    [
        {
            id: 0,
            img: floor1,
            alt: 'Restauration du parquet de Versailles au Château de Versailles'
        },
        {
            id: 1,
            img: floor2,
            alt: 'Restauration du parquet de Versailles au Château de Versailles'
        },
    ],
    // Pointe de Hongrie
    [
        {
            id: 0,
            img: floor3,
            alt: 'Restauration du parquet en pointe de Hongrie à l\'ambassade de Suisse'
        },
        {
            id: 1,
            img: floor4,
            alt: 'Restauration du parquet en pointe de Hongrie à l\'ambassade de Suisse'
        },
        {
            id: 1,
            img: floor5,
            alt: 'Restauration du parquet en pointe de Hongrie à l\'ambassade de Suisse'
        },
    ],
    // Lambris
    [
        {
            id: 0,
            img: lambris1,
            alt: 'Restauration d\'un lambris en chêne dans une église'
        },
        {
            id: 1,
            img: lambris2,
            alt: 'Restauration d\'un lambris en chêne dans une église'
        },
        {
            id: 2,
            img: lambris3,
            alt: 'Restauration d\'un lambris en chêne dans une église'
        },
    ],
    // Fabrication de mouluration et d'une fausse porte
    [
        {
            id: 0,
            img: mouluration1,
            alt: 'Moulurations'
        },
        {
            id: 1,
            img: mouluration2,
            alt: 'Moulurations'
        },
        {
            id: 3,
            img: mouluration4,
            alt: 'Fabrication de moulurations et d\'une fausse porte'
        },
    ],
    // Portes et fenêtres
    [
        {
            id: 0,
            img: window1,
            alt: 'Restauration des fenêtres d\'un hôtel particulier à paris.'
        },
    ],
]

const AllServices = () => {
    const anchor = useParams();

    const [sideNav, setSideNav] = useState('stairs');

    function handleNav(anchor) {
        const stairs = document.getElementById('all-services-stairs');
        const floors = document.getElementById('all-services-floors');
        const lambris = document.getElementById('all-services-lambris');
        const doors = document.getElementById('all-services-doors');

        switch(anchor) {
            case 'stairs':
                setSideNav('stairs');
                stairs.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'floors':
                setSideNav('floors');
                floors.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'lambris':
                setSideNav('lambris');
                lambris.scrollIntoView(({behavior: "smooth"}));
                break;

            case 'doors':
                setSideNav('doors');
                doors.scrollIntoView(({behavior: "smooth"}));
                break;

            default:
                break;
        }
    }

    useEffect(() => {
        const stairs = document.getElementById('stairs');
        const stairsSpan = document.querySelector('#stairs span');

        const floors = document.getElementById('floors');
        const floorsSpan = document.querySelector('#floors span');

        const lambris = document.getElementById('lambris');
        const lambrisSpan = document.querySelector('#lambris span');

        const doors = document.getElementById('doors');
        const doorsSpan = document.querySelector('#doors span');

        console.log('sideNav', sideNav);

        if(sideNav === 'stairs') {
            stairsSpan.style.color = '#C2B887';
            floorsSpan.style.color = 'inherit';
            lambrisSpan.style.color = 'inherit';
            doorsSpan.style.color = 'inherit';

            stairs.classList.add('active-nav');
            stairs.classList.remove('inactive-nav');

            floors.classList.add('inactive-nav');
            floors.classList.remove('active-nav');

            lambris.classList.add('inactive-nav');
            lambris.classList.remove('active-nav');

            doors.classList.add('inactive-nav');
            doors.classList.remove('active-nav');
        }

        if(sideNav === 'floors') {
            stairsSpan.style.color = 'inherit';
            floorsSpan.style.color = '#C2B887';
            lambrisSpan.style.color = 'inherit';
            doorsSpan.style.color = 'inherit';

            stairs.classList.add('inactive-nav');
            stairs.classList.remove('active-nav');

            floors.classList.add('active-nav');
            floors.classList.remove('inactive-nav');

            lambris.classList.add('inactive-nav');
            lambris.classList.remove('active-nav');

            doors.classList.add('inactive-nav');
            doors.classList.remove('active-nav');
        }

        if(sideNav === 'lambris') {
            stairsSpan.style.color = 'inherit';
            floorsSpan.style.color = 'inherit';
            lambrisSpan.style.color = '#C2B887';
            doorsSpan.style.color = 'inherit';

            stairs.classList.add('inactive-nav');
            stairs.classList.remove('active-nav');

            floors.classList.add('inactive-nav');
            floors.classList.remove('active-nav');

            lambris.classList.add('active-nav');
            lambris.classList.remove('inactive-nav');

            doors.classList.add('inactive-nav');
            doors.classList.remove('active-nav');
        }

        if(sideNav === 'doors') {
            stairsSpan.style.color = 'inherit';
            floorsSpan.style.color = 'inherit';
            lambrisSpan.style.color = 'inherit';
            doorsSpan.style.color = '#C2B887';

            stairs.classList.add('inactive-nav');
            stairs.classList.remove('active-nav');

            floors.classList.add('inactive-nav');
            floors.classList.remove('active-nav');

            lambris.classList.add('inactive-nav');
            lambris.classList.remove('active-nav');

            doors.classList.add('active-nav');
            doors.classList.remove('inactive-nav');
        }
    }, [sideNav]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            handleNav(anchor.string);
        }, 100)

        return () => clearTimeout(timeout);
        
    }, [])

    return (
        <div className='all-services-container' >
            <div className="all-services-nav">
                <ul>
                    <li id='stairs' className='inactive-nav' onClick={() => handleNav('stairs')}>
                        <span>Escaliers</span>
                    </li>
                    <li id='floors' className='inactive-nav' onClick={() => handleNav('floors')}>
                        <span>Parquets</span>
                    </li>
                    <li id='lambris' className='inactive-nav' onClick={() => handleNav('lambris')}>
                        <span>Lambris & moulurations</span>
                    </li>
                    <li id='doors' className='inactive-nav' onClick={() => handleNav('doors')}>
                        <span>Portes & fenêtres</span>
                    </li>
                </ul>     
            </div>
            <div className='all-services-content'>     
                <section id='all-services-stairs'>
                    <div className="all-services-title">
                        <h2>Escaliers</h2>
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Fabrication d'un <strong><span>escalier un quart tournant</span></strong> en chêne</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[0].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Fabrication d'un <strong><span>escalier deux quarts tournant</span></strong> en chêne</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[1].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Fabrication d'un <strong><span>escalier rampe sur rampe</span></strong> en frêne</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[2].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                </section>
                <section id='all-services-floors'>
                    <div className="all-services-title">
                        <h2>Parquets</h2>
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Restauration du <strong><span>parquet de Versailles</span></strong> au Château de Versailles</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[3].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Restauration du <strong><span>parquet en pointe de Hongrie</span></strong> à l'ambassade de Suisse</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[4].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                </section>
                <section id='all-services-lambris'>
                    <div className="all-services-title">
                        <h2>Lambris & moulurations</h2>
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Restauration d'un <strong><span>lambris en chêne</span></strong> dans une église</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[5].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                    <div className="all-services-subtitle">
                        <h3>Fabrication de mouluration et d'une fausse porte</h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[6].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                </section>
                <section id='all-services-doors'>
                    <div className="all-services-title">
                        <h2>Portes & fenêtres</h2>
                    </div>
                    <div className="all-services-subtitle">
                        <h3><strong><span>Restauration de fenêtres</span></strong> d'un hôtel particulier à Paris. </h3>
                    </div>
                    <div className="all-services-img-container">
                        {allServicesPictures[7].map((picture) => {
                            return(
                                <img key={picture.id} src={picture.img} alt={picture.alt} />
                            )
                        })}
                    </div>
                </section>
            </div>
        </div>
        
    );
};

export default AllServices;