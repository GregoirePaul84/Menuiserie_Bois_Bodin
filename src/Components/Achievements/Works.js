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
            'legend' : 'Légende 1',
            'detail' : [
                {
                    'name': 'Table longue',
                    'context': 'fabrication d\'une table de cuisine',
                    'wood': 'pin sylvestre',
                    'size': '2 x 1.2 m'
                }
            ]
        },
        {
            'id' : 'img2',
            'img' : img2,
            'legend' : 'Légende 2',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                    'wood': 'pin sylvestre',
                    'size': '2 x 1.5 m'
                }
            ]
        },
        {
            'id' : 'img3',
            'img' : img3,
            'legend' : 'Légende 3',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                    'wood': 'pin sylvestre',
                    'size': '2 x 1.5 m'
                }
            ]
        },
        {
            'id' : 'img4',
            'img' : img4,
            'legend' : 'Légende 4',
            'detail' : [
                {
                    'name': 'Cloison',
                    'context': 'fabrication d\'une cloison',
                    'wood': 'pin sylvestre',
                    'size': '2 x 1.5 m'
                }
            ]
        },
        ,
        {
            'id' : 'img5',
            'img' : img5,
            'legend' : 'Légende 5',
            'detail' : [
                {
                    'name': 'Porte de cave',
                    'context': 'fabrication d\'une porte de cave à vin',
                    'wood': 'chêne massif',
                    'size': '2 x 1 m'
                }
            ]
        },
    ],
    // Extérieur
    [

    ]
    
];


const Works = () => {

    const [category, setCategory] = useState(0);
    const [displayDetail, setDisplayDetail] = useState({img: undefined, isActive: false});
    const figure = document.querySelector('.carousel-figure');
    const theta =  2 * Math.PI / 5;
    const imageRef = useRef(0)
    // let currImage = 0;

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
                    :
                    <h3>Menuiseries extérieures</h3>
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
                                    <div className="detail-wood">
                                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.01672 8.54171C8.83184 8.34781 8.66364 8.14297 8.5114 7.92949L2.68857 14.0364L1.96746 13.2801L7.96828 6.98657C7.49564 5.94614 7.34434 4.78415 7.51437 3.66575L6.24709 4.99486L4.53619 3.2005L3.27557 4.52261L3.82007 7.54027L1.27199 10.2127C-0.423996 11.9914 -0.423996 14.8855 1.27199 16.6642C2.96797 18.443 5.72752 18.443 7.42351 16.6642L13.6659 10.1174C12.0228 10.3922 10.2806 9.8672 9.01672 8.54171ZM5.5778 14.8031L4.85669 14.0468L8.6676 10.05L9.38871 10.8063L5.5778 14.8031Z" fill="#C2B887"/>
                                            <path d="M15.8893 1.33387C14.2353 -0.4008 11.5699 -0.443441 9.86584 1.20535C9.8226 1.24722 9.77976 1.28986 9.7378 1.33387C8.0391 3.11543 8.0391 6.00387 9.7378 7.78543C11.4365 9.56696 14.1906 9.567 15.8893 7.78543C15.9423 7.72982 15.9937 7.67312 16.0434 7.6154C17.5836 5.82691 17.5323 3.05701 15.8893 1.33387ZM14.8108 6.65434C13.7095 7.80934 11.9176 7.80934 10.8163 6.65434C9.71501 5.49931 9.71501 3.61999 10.8163 2.46499C11.9176 1.31 13.7095 1.31 14.8108 2.46503C15.9121 3.61999 15.9121 5.49931 14.8108 6.65434Z" fill="#C2B887"/>
                                            <path d="M14.0897 3.22123C13.386 2.48323 12.2411 2.48323 11.5375 3.2212C10.8338 3.95917 10.8338 5.15997 11.5375 5.89797C12.2411 6.63595 13.3861 6.63595 14.0897 5.89797C14.7934 5.16 14.7934 3.9592 14.0897 3.22123Z" fill="#C2B887"/>
                                        </svg>
                                        <p>{e.detail[0].wood}</p>
                                    </div>
                                    <div className="detail-size">
                                        <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.9092 3.2668L13.3378 0.291714C13.0016 -0.0972381 12.4565 -0.0972381 12.1205 0.291714L11.1343 1.43278L12.0602 2.50413C12.2172 2.68563 12.2172 2.97987 12.0602 3.16138C11.9034 3.34288 11.649 3.34288 11.4922 3.16138L10.5662 2.09003L9.00391 3.89755L9.92994 4.9689C10.0869 5.15041 10.0869 5.44465 9.92994 5.62615C9.77302 5.80766 9.5187 5.80766 9.36187 5.62615L8.43589 4.5548L6.87362 6.36228L7.7996 7.43363C7.95647 7.61513 7.95647 7.90938 7.7996 8.09088C7.64272 8.27239 7.38841 8.27239 7.23153 8.09088L6.30555 7.01953L4.74332 8.82706L5.6693 9.89846C5.82618 10.08 5.82618 10.3743 5.6693 10.5557C5.51243 10.7372 5.25811 10.7372 5.10123 10.5557L4.17525 9.48426L2.61298 11.2917L3.53896 12.3632C3.69584 12.5447 3.69584 12.8389 3.53896 13.0204C3.38209 13.2019 3.12777 13.2019 2.97089 13.0204L2.04491 11.949L1.05859 13.09C0.722413 13.479 0.722413 14.1097 1.05859 14.4985L3.62999 17.4735C3.96617 17.8625 4.51117 17.8625 4.8473 17.4735L15.9092 4.67511C16.2453 4.28626 16.2453 3.6557 15.9092 3.2668Z" fill="#C2B887"/>
                                        </svg>
                                        <p>{e.detail[0].size}</p>
                                    </div>
                                </div>    
                            </div>
                            : null
                            }
                            <img src={e.img} key={e.id} />
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