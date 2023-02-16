import React, {useEffect, useRef, useState } from 'react';

import achievementImg from '../../Media/Img/main/pexels-sabrina-martins-14328849.png';

import img1 from '../../Media/Img/Works/img1.jpg';
import img2 from '../../Media/Img/Works/img2.jpg';
import img3 from '../../Media/Img/Works/img3.jpg';
import img4 from '../../Media/Img/Works/img4.jpg';
import img5 from '../../Media/Img/Works/img5.jpg';

const worksArray = [
    // Intérieur
    [
        {
            'id' : 'img1',
            'img' : img1,
            'legend' : 'Légende 1'
        },
        {
            'id' : 'img2',
            'img' : img2,
            'legend' : 'Légende 2'
        },
        {
            'id' : 'img3',
            'img' : img3,
            'legend' : 'Légende 3'
        },
        {
            'id' : 'img4',
            'img' : img4,
            'legend' : 'Légende 4'
        },
        ,
        {
            'id' : 'img5',
            'img' : img5,
            'legend' : 'Légende 5'
        },
    ],
    // Extérieur
    [

    ]
    
];


const Works = () => {

    const [category, setCategory] = useState(0);
    const figure = document.querySelector('.carousel-figure');
    const theta =  2 * Math.PI / 5;
    let currImage = 0;

    function rotateCarousel(e) {
        e.stopPropagation();
        const t = e.target;
      
        if (t.tagName.toUpperCase() !== 'BUTTON')
            return;
        
        if (t.classList.contains('next')) {
            currImage++;
        }
        else {
            currImage--;
        }
        
        figure.style.transform = `rotateY(${currImage * -theta}rad)`;
    }   

    return (
        <div className='works-container'>
            <div className="works-carousel">  
                <figure className='carousel-figure'>
                    {worksArray[category].map((e) => 
                    <div className="rotating-card" key={e.id}>
                        <p>{e.legend}</p>
                        <img src={e.img} key={e.id} />
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