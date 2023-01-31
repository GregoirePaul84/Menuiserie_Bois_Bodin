import React, {useEffect, useState } from 'react';

import ambassyImg from '../../Media/Img/Works/swiss_ambassy.gif';
import marchepied from '../../Media/Img/Works/marchepied.jpg';
import volets from '../../Media/Img/Works/volets.gif';
import escaliers from '../../Media/Img/Works/escalier.jpg';
import porte from '../../Media/Img/Works/porte.gif';

const worksArray = [
    // Intérieur
    [
        {
            'id' : 0,
            'img' : ambassyImg,
            'legend' : 'Légende 1',
        },
        {
            'id' : 1,
            'img' : marchepied,
            'legend' : 'Légende 2',
        },
        {
            'id' : 2,
            'img' : volets,
            'legend' : 'Légende 3',
        },
        {
            'id' : 3,
            'img' : escaliers,
            'legend' : 'Légende 4',
        },
        ,
        {
            'id' : 4,
            'img' : porte,
            'legend' : 'Légende 5',
        },
        {
            'id' : 5,
            'img' : ambassyImg,
            'legend' : 'Légende 6',
        }
    ],
    // Extérieur
    [

    ]
    
];

let timer;
let timeCut;

const Works = () => {

    const [time, setTime] = useState(1);
    const [category, setCategory] = useState(0);

    const filledCircle1 = document.querySelector('#circle-nav circle:nth-child(10)');
    const filledCircle2 = document.querySelector('#circle-nav circle:nth-child(11)');
    const filledCircle3 = document.querySelector('#circle-nav circle:nth-child(12)');
    const filledCircle4 = document.querySelector('#circle-nav circle:nth-child(13)');
    const filledCircle5 = document.querySelector('#circle-nav circle:nth-child(14)');

    const filledline1 = document.querySelector('#circle-nav line:nth-child(15)');
    const filledline2 = document.querySelector('#circle-nav line:nth-child(16)');
    const filledline3 = document.querySelector('#circle-nav line:nth-child(17)');
    const filledline4 = document.querySelector('#circle-nav line:nth-child(18)');

    const pSlider = document.querySelector('.work-title');

    const imgSlider = document.querySelector('.img-slider');

    function incrementTimer() {
        timer = setTimeout(() => {
            setTime(time + 1);
        }, 1000);
    }

    function reviveTimer(newTime) {
        clearTimeout(timeCut);
       
        timeCut = setTimeout(() => {
            document.querySelectorAll('#circle-nav .filled-circle').forEach((e) => e.style.animation = 'none');
            setTime(newTime);
            console.log('reprise timer');
        }, 7000);
    }

    function displaySlide1() {
        pSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide1';
        imgSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide1';
        filledCircle2.style.animation = '1s ease-out 0s 1 normal forwards running fillCircle';
        
    }

    function displaySlide2() {
        pSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide2';
        imgSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide2';
        filledCircle3.style.animation = '1s ease-out 0s 1 normal forwards running fillCircle';

    }

    function displaySlide3() {
        pSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide3';
        imgSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide3';
        filledCircle4.style.animation = '1s ease-out 0s 1 normal forwards running fillCircle';
        
    }

    function displaySlide4() {
        pSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide4';
        imgSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide4';
        filledCircle5.style.animation = '1s ease-out 0s 1 normal forwards running fillCircle';
    }

    function displaySlide5() {
        pSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide5';
        imgSlider.style.animation = '1s ease-in-out 0s 1 normal forwards running slide5';
        filledCircle1.style.animation = '1s ease-out 0s 1 normal forwards running fillCircle';
    }

    useEffect(() => {
        // console.log(time);

        if(time === 5) {
            displaySlide1();
            filledCircle1.style.animation = 'none';
            filledline1.style.animation = 'none';
            filledline2.style.animation = '5s linear 0s 1 normal forwards running fillLine';
        }

        if(time === 10) {
            displaySlide2();
            filledCircle2.style.animation = 'none';
            filledline2.style.animation = 'none';
            filledline3.style.animation = '5s linear 0s 1 normal forwards running fillLine';
        }

        if(time === 15) {
            displaySlide3();
            filledCircle3.style.animation = 'none';
            filledline3.style.animation = 'none';
            filledline4.style.animation = '5s linear 0s 1 normal forwards running fillLine';
        }

        if(time === 20) {
            displaySlide4();
            filledCircle4.style.animation = 'none';
            filledline4.style.animation = 'none';
        }

        if(time === 25) {
            displaySlide5();
            filledCircle5.style.animation = 'none';
            filledline1.style.animation = '5s linear 0s 1 normal forwards running fillLine';
            setTime(0);      
        }
            
        incrementTimer();
    }, [time]);


    function cutCarousel(newTime) {
        clearTimeout(timer);
        reviveTimer(newTime);
        console.log('timer coupé');
        
        // Affichage du premier élément lors du clic
        if(newTime === 0) {
            
            // Premier élément
            displaySlide5();

            // Supprime toutes les anims en cours excepté la première
            document.querySelectorAll('#circle-nav .filled-circle:not(circle:nth-child(10)').forEach((e) => e.style.animation = 'none');
            document.querySelectorAll('#circle-nav .filled-line:not(line:nth-child(15)').forEach((e) => e.style.animation = 'none');

            // Augmente la taille du cercle au clic
            document.querySelector('#circle-nav .filled-circle:nth-child(10)').style.animation = '1s ease-out 0s 1 normal forwards running increaseSize';
        }

        // Affichage du deuxième élément lors du clic
        if(newTime === 5) {

            // 2e élément
            displaySlide1();

            // Supprime toutes les anims en cours excepté la deuxième
            document.querySelectorAll('#circle-nav .filled-circle:not(circle:nth-child(11)').forEach((e) => e.style.animation = 'none');
            document.querySelectorAll('#circle-nav .filled-line:not(line:nth-child(16)').forEach((e) => e.style.animation = 'none');

            document.querySelector('#circle-nav .filled-circle:nth-child(11)').style.animation = '1s ease-out 0s 1 normal forwards running increaseSize';
        }

        if(newTime === 10) {

             // 3e élément
             displaySlide2();

             // Supprime toutes les anims en cours excepté la deuxième
             document.querySelectorAll('#circle-nav .filled-circle:not(circle:nth-child(12)').forEach((e) => e.style.animation = 'none');
             document.querySelectorAll('#circle-nav .filled-line:not(line:nth-child(17)').forEach((e) => e.style.animation = 'none');

             document.querySelector('#circle-nav .filled-circle:nth-child(12)').style.animation = '1s ease-out 0s 1 normal forwards running increaseSize';
        }

        if(newTime === 15) {

             // 3e élément
             displaySlide3();

             // Supprime toutes les anims en cours excepté la deuxième
             document.querySelectorAll('#circle-nav .filled-circle:not(circle:nth-child(13)').forEach((e) => e.style.animation = 'none');
             document.querySelectorAll('#circle-nav .filled-line:not(line:nth-child(18)').forEach((e) => e.style.animation = 'none');

             document.querySelector('#circle-nav .filled-circle:nth-child(13)').style.animation = '1s ease-out 0s 1 normal forwards running increaseSize';

        }

        if(newTime === 20) {

            // 3e élément
            displaySlide4();

            // Supprime toutes les anims en cours excepté la deuxième
            document.querySelectorAll('#circle-nav .filled-circle:not(circle:nth-child(14)').forEach((e) => e.style.animation = 'none');
            document.querySelectorAll('#circle-nav .filled-line:not(line:nth-child(19)').forEach((e) => e.style.animation = 'none');

            document.querySelector('#circle-nav .filled-circle:nth-child(14)').style.animation = '1s ease-out 0s 1 normal forwards running increaseSize';
       }
    }
   
    return (
        <div className='works-container'>
            <div className="works-all-img">
                {worksArray[category].map((e) => 
                    <img src={e.img} alt="" key={e.id}/>
                    )}
            </div>
            <div className="works-description">
                <div className="work-title">
                    {worksArray[category].map((e) => 
                        <p key={e.id}>{e.legend}</p>
                    )}
                </div>
                <div className="left-arrow">
                    <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M31.1373 0.831344L0.895726 29.5785C-0.298541 30.7141 -0.298541 32.5512 0.895726 33.6868L31.1161 62.411C33.0379 64.3085 36.4146 62.8767 36.3388 60.3007L36.3388 2.96459C36.4085 0.397217 33.0561 -0.994278 31.1373 0.831344ZM7.37326 31.6312L30.2583 9.87896L30.2583 53.3835L7.37326 31.6312Z" fill="white"/>
                    </svg>
                </div>
                <div className="works-img">
                    <div className="img-slider">
                        {worksArray[category].map((e) => 
                        <img src={e.img} key={e.id}/>
                        )}
                    </div>
                </div>
                <div className="right-arrow">
                    <svg width="37" height="64" viewBox="0 0 37 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.20288 62.4501L35.4457 33.703C36.64 32.5674 36.64 30.7302 35.4457 29.5946L5.2241 0.870478C3.30229 -1.02702 -0.0745272 0.404728 0.00125406 2.98073V60.3169C-0.0684647 62.8842 3.2841 64.2757 5.20288 62.4501ZM28.9679 31.6502L6.08194 53.4025V9.89798L28.9679 31.6502Z" fill="white"/>
                    </svg>
                </div>
                <div className="img-nav">
                    <svg width="414" height="25" viewBox="0 0 414 25" fill="none" xmlns="http://www.w3.org/2000/svg" id='circle-nav'>
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#dfdfdf" onClick={() => cutCarousel(0)}/>
                        <circle cx="109.5" cy="12.5" r="12.5" fill="#dfdfdf" onClick={() => cutCarousel(5)}/>
                        <circle cx="206.5" cy="12.5" r="12.5" fill="#dfdfdf" onClick={() => cutCarousel(10)}/>
                        <circle cx="303.5" cy="12.5" r="12.5" fill="#dfdfdf" onClick={() => cutCarousel(15)}/>
                        <circle cx="401.5" cy="12.5" r="12.5" fill="#dfdfdf" onClick={() => cutCarousel(20)}/>
                        <line x1="25" y1="12" x2="98" y2="12" stroke="#dfdfdf" strokeWidth="2"/>
                        <line x1="122" y1="12" x2="195" y2="12" stroke="#dfdfdf" strokeWidth="2"/>
                        <line x1="219" y1="12" x2="292" y2="12" stroke="#dfdfdf" strokeWidth="2"/>
                        <line x1="316" y1="12" x2="389" y2="12" stroke="#dfdfdf" strokeWidth="2"/>
                        <circle cx="12.5" cy="12.5" r="12.5" fill="#C2B887" className='filled-circle'/>
                        <circle cx="109.5" cy="12.5" r="12.5" fill="#C2B887" className='filled-circle'/>
                        <circle cx="206.5" cy="12.5" r="12.5" fill="#C2B887" className='filled-circle'/>
                        <circle cx="303.5" cy="12.5" r="12.5" fill="#C2B887" className='filled-circle'/>
                        <circle cx="401.5" cy="12.5" r="12.5" fill="#C2B887" className='filled-circle'/>
                        <line x1="25" y1="12" x2="98" y2="12" stroke="#C2B887" strokeWidth="2" className='filled-line'/>
                        <line x1="122" y1="12" x2="195" y2="12" stroke="#C2B887" strokeWidth="2" className='filled-line' />
                        <line x1="219" y1="12" x2="292" y2="12" stroke="#C2B887" strokeWidth="2" className='filled-line' />
                        <line x1="316" y1="12" x2="389" y2="12" stroke="#C2B887" strokeWidth="2" className='filled-line' />
                    </svg>
                </div>
            </div>   
        </div>
    );
};

export default Works;