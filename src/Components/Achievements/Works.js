import React, { useRef, useState } from 'react';

// Images travaux d'intérieur
import img1 from '../../Media/Img/Works/img1.webp';
import img2 from '../../Media/Img/Works/img2.webp';
import img3 from '../../Media/Img/Works/img3.webp';
import img4 from '../../Media/Img/Works/img4.webp';
import img5 from '../../Media/Img/Works/img5.webp';

// Images travaux d'extérieur
import img6 from '../../Media/Img/Works/img6.webp';
import img7 from '../../Media/Img/Works/img7.webp';
import img8 from '../../Media/Img/Works/img8.webp';
import img9 from '../../Media/Img/Works/img9.webp';
import img10 from '../../Media/Img/Works/img10.webp';

// Images travaux de rénovations
import img11 from '../../Media/Img/Works/img11.jpg';
import img12 from '../../Media/Img/Works/img12.jpg';
import img13 from '../../Media/Img/Works/img13.jpg';
import img14 from '../../Media/Img/Works/img14.jpg';
import img15 from '../../Media/Img/Works/img15.jpg';

const worksArray = [
    // Intérieur
    [
        {
            'id' : 'img1',
            'img' : img1,
            'legend' : 'Moulurations et porte',
            'detail' : [
                {
                    'name': 'Moulurations et porte',
                    'context': 'Fabrication et pose d\'une fausse porte avec reproduction de moulurations.',
                }
            ]
        },
        {
            'id' : 'img2',
            'img' : img2,
            'legend' : 'Restauration de lambris',
            'detail' : [
                {
                    'name': 'Restauration de lambris',
                    'context': 'Restauration de lambris, réalisation de greffes, remplacement des pièces usées.',
                }
            ]
        },
        {
            'id' : 'img3',
            'img' : img3,
            'legend' : 'Escalier quart tournant',
            'detail' : [
                {
                    'name': 'Escalier quart tournant',
                    'context': 'Fabrication et pose d\'un escalier en chêne.',
                }
            ]
        },
        {
            'id' : 'img4',
            'img' : img4,
            'legend' : 'Escalier rampe sur rampe',
            'detail' : [
                {
                    'name': 'Escalier rampe sur rampe',
                    'context': 'Fabrication et pose d\'un escalier avec avec palier.',
                }
            ]
        },
        {
            'id' : 'img5',
            'img' : img5,
            'legend' : 'Porte à galandage sur mesure',
            'detail' : [
                {
                    'name': 'Porte à galandage sur mesure',
                    'context': 'Réalisation d\'une porte à galandage avec habillage cintré.',
                }
            ]
        }
    ],
    // Extérieur
    [
        {
            'id' : 'img6',
            'img' : img6,
            'legend' : 'Fenêtres',
            'detail' : [
                {
                    'name': 'Fenêtres',
                    'context': 'Fabrication de fenêtres en chêne.',
                }
            ]
        },
        {
            'id' : 'img7',
            'img' : img7,
            'legend' : 'Restauration de fenêtres',
            'detail' : [
                {
                    'name': 'Restauration de fenêtres',
                    'context': 'Greffes, intégration de joints tubulaires mise en jeu.',
                }
            ]
        },
        {
            'id' : 'img8',
            'img' : img8,
            'legend' : 'Porte de cave',
            'detail' : [
                {
                    'name': 'Porte de cave',
                    'context': 'Réalisation d\'une porte de cave sur pivot en chêne.',
                }
            ]
        },
        {
            'id' : 'img9',
            'img' : img9,
            'legend' : 'Pose de fenêtres',
            'detail' : [
                {
                    'name': 'Pose de fenêtres',
                    'context': 'Remplacement de menuiseries, démontage des habillages tout en les conservant pour pouvoir les réutiliser. ',
                }
            ]
        },
        {
            'id' : 'img10',
            'img' : img10,
            'legend' : 'Œil de bœuf',
            'detail' : [
                {
                    'name': 'Œil de bœuf',
                    'context': 'Restauration d\'un œil de bœuf sur le clocher d\'une église. Greffe, changement des pièces usagées.',
                }
            ]
        }
    ],
    // Rénovations
    [
        {
            'id' : 'img11',
            'img' : img11,
            'legend' : 'Légende 1',
            'detail' : [
                {
                    'name': 'Table longue',
                    'context': 'fabrication d\'une table de cuisine',
                }
            ]
        },
        {
            'id' : 'img12',
            'img' : img12,
            'legend' : 'Légende 2',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                }
            ]
        },
        {
            'id' : 'img13',
            'img' : img13,
            'legend' : 'Légende 3',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                }
            ]
        },
        {
            'id' : 'img14',
            'img' : img14,
            'legend' : 'Légende 4',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                }
            ]
        },
        {
            'id' : 'img15',
            'img' : img15,
            'legend' : 'Légende 5',
            'detail' : [
                {
                    'name': 'Porte de cave',
                    'context': 'fabrication d\'une porte de cave à vin',
                }
            ]
        }
    ]
    
];


const Works = ({category, setCategory}) => {

    const [displayDetail, setDisplayDetail] = useState({img: undefined, isActive: false});
    const figure = document.querySelector('.carousel-figure');
    const theta =  2 * Math.PI / 5;
    const imageRef = useRef(0)

    function rotateCarousel(e) {
        e.stopPropagation();
        const t = e.target;
      
        if (t.tagName.toUpperCase() !== 'BUTTON')
            return;
        
        if (t.classList.contains('next')) {
            imageRef.current = imageRef.current + 1;
        }
        else {
            imageRef.current = imageRef.current - 1;
        }
        
        figure.style.transform = `rotateY(${imageRef.current * -theta}rad)`;
    }   

    return (
        <div className='works-container'>
            <div className="works-title">
                {(category === 0) ? 
                    <h3>Menuiseries intérieures</h3>
                    : (category === 1) ? 
                    <h3>Menuiseries extérieures</h3>
                    : (category === 2) ? 
                    <h3>Rénovation de monuments</h3>
                    : null
                }
            </div>    
            <div className="works-carousel">  
                <figure className='carousel-figure'>
                    {worksArray[category].map((e) => 
                    <div className="rotating-card" 
                        key={e.id}
                        onMouseEnter={() => setDisplayDetail({img: e.id, isActive: true})}
                        onMouseLeave={() => setDisplayDetail({img: e.id, isActive: false})} >
                        <p className='legend'>{e.legend}</p>
                        <div className="works-img">
                            {(displayDetail.img === e.id && displayDetail.isActive ) ? 
                            <div className="work-detail">
                                <div className="detail-content">
                                    <h5>{e.detail[0].name}</h5>
                                    <div className="detail-info">
                                        <svg width="11" height="24" viewBox="0 0 11 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.35484 12C2.10339 12 2.70968 12.6712 2.70968 13.5V19.5C2.70968 20.3288 2.10339 21 1.35484 21H0V24H10.8387V21H9.48929C8.74277 21 8.13445 20.3288 8.13445 19.5L8.12903 9H0V12H1.35484Z" fill="#C2B887"/>
                                            <path d="M5.41936 6C6.91588 6 8.12904 4.65685 8.12904 3C8.12904 1.34315 6.91588 0 5.41936 0C3.92285 0 2.70969 1.34315 2.70969 3C2.70969 4.65685 3.92285 6 5.41936 6Z" fill="#C2B887"/>
                                        </svg>
                                        <p>{e.detail[0].context}</p>
                                    </div>
                                </div>    
                            </div>
                            : null
                            }
                            <a
                                href={e.img}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img src={e.img} key={e.id}/>
                            </a>
                        </div>
                    </div>
                    )}
                </figure>
                <nav className='carousel-nav'>
                    <button className="nav prev" onClick={(e) => rotateCarousel(e)}>Précédent</button>
                    <button className="nav next" onClick={(e) => rotateCarousel(e)}>Suivant</button>
                </nav>
            </div> 
        </div>
    );
};

export default Works;