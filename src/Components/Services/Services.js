import React, { useEffect, useState } from 'react';
import Products from './Products';

import doorImg from '../../Media/Img/Services/door.png';
import shutterImg from '../../Media/Img/Services/shutter.png';
import floorImg from '../../Media/Img/Services/floor.png';
import stairsImg from '../../Media/Img/Services/stairs.jpg';
import kitchenImg from '../../Media/Img/Services/kitchen.jpg';
import dressingImg from '../../Media/Img/Services/dressing.jpg';
import insideImg from '../../Media/Img/Services/interior.jpg';
import gateimg from '../../Media/Img/Services/gate.png';
import exteriorImg from '../../Media/Img/Services/exterior.png';
import windowImg from '../../Media/Img/Services/window.png';

const achievements = [
    [
        {
            'id': 0,
            'title': 'Escaliers',
            'svg': stairsImg
        },
        {
            'id': 1,
            'title': 'Parquets',
            'svg': floorImg
        },
        {
            'id': 2,
            'title': 'Dressings',
            'svg': dressingImg
        },
        {
            'id': 3,
            'title': 'Cuisines',
            'svg': kitchenImg
        },
        {
            'id': 4,
            'title': 'Aménagements intérieurs',
            'svg': insideImg
        },
    ],
    [
        {
            'id': 5,
            'title': 'Fenêtres',
            'svg': windowImg
        },
        {
            'id': 6,
            'title': 'Portes',
            'svg': doorImg
        },
        {
            'id': 7,
            'title': 'Portails',
            'svg': gateimg
        },
        {
            'id': 8,
            'title': 'Volets',
            'svg': shutterImg
        },
        {
            'id': 9,
            'title': 'Aménagements extérieurs',
            'svg': exteriorImg
        }
    ]
];

const Services = ({scrollY, categoryService, setCategoryService}) => {

    // const [category, setCategory] = useState(0);

    useEffect(() => {
        document.querySelector('.products-list').style.animation = 'none'; 

        setTimeout(() => {
            if(categoryService === 0) {
                document.querySelector('.products-list').style.animation = 'productsUp 1.5s ease-out forwards'; 
                document.querySelectorAll('.product-card').forEach((e) => e.style.animation = 'contentAppears 2s ease-out forwards 1.5s');
            }

            else if(categoryService === 1) {
                document.querySelector('.products-list').style.animation = 'productsUp 1.5s ease-out forwards'; 
                document.querySelectorAll('.product-card').forEach((e) => e.style.animation = 'contentAppears 2s ease-out forwards 1.5s');
            }
        }, 100)
        
    }, [categoryService]);

    useEffect(() => {
        if(scrollY <= 900) {
            document.querySelector('.services-title svg').classList.remove('diamond-active');
        }

        if(scrollY >= 1150) {
            document.querySelector('.services-title svg').classList.add('diamond-active');
        }
    }, [scrollY]);

    return (
        <>
        <div className="services-container">
            <div className="services-title">
                <svg width="220" height="50" viewBox="0 0 319 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="212" y="53.033" width="75" height="75" transform="rotate(-45 212 53.033)" fill="#B0A462" fillOpacity="0.6" />
                    <rect x="159" y="53.033" width="75" height="75" transform="rotate(-45 159 53.033)" fill="#9B9053" fillOpacity="0.7"/>
                    <rect x="106" y="54.033" width="75" height="75" transform="rotate(-45 106 54.033)" fill="#857B47" fillOpacity="0.8"/>
                    <rect x="53" y="53.033" width="75" height="75" transform="rotate(-45 53 53.033)" fill="#645D35" fillOpacity="0.9"/>
                    <rect y="54.033" width="75" height="75" transform="rotate(-45 0 54.033)" fill="#4F492B"/>
                </svg>
                <h2>
                    <span>S</span>ERVICES
                </h2>
            </div>
    
            <div className="services-nav">
                <ul>
                    <li onClick={() => setCategoryService(0)}>
                        Menuiserie intérieure
                    </li>
                    <li onClick={() => setCategoryService(1)}>
                        Menuiserie extérieure
                    </li>
                </ul>
            </div>
        </div>
        <div className="products-container">
            <div className="products-list">
                <div className="products-type">
                    {(categoryService === 0) ?
                    <h3>
                        Menuiserie <br />
                        Intérieure
                    </h3>
                :
                    <h3>
                        Menuiserie <br />
                        Extérieure
                    </h3> }
                </div>
                {(categoryService !== undefined) ?
                    <div className="products">
                        {achievements[categoryService].map((e) => {
                            return (
                                <Products key={e.id} img={e.svg} title={e.title}/>      
                            )
                        })}
                    </div>
                : null }
            </div>
        </div>
        </>
    );
};

export default Services;