import React, { useEffect} from 'react';
import Products from './Products';

import servicesImg from '../../Media/Img/main/pexels-cottonbro-studio-7484794_cut.png';
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
            'svg': stairsImg,
            'last': false,
            'detail': [
                'escalier colimaçon',
                'escalier droit'
            ]
        },
        {
            'id': 1,
            'title': 'Parquets',
            'svg': floorImg,
            'last': false,
            'detail': [
                'parquet massif',
                'parquet chevron'
            ]
        },
        {
            'id': 2,
            'title': 'Dressings',
            'svg': dressingImg,
            'last': false,
            'detail': [
                'dressing mural',
                'dressing sur roues'
            ]
        },
        {
            'id': 3,
            'title': 'Cuisines',
            'svg': kitchenImg,
            'last': false,
            'detail': [
                'plan de travail',
                'cuisine entière'
            ]
        },
        {
            'id': 4,
            'title': 'Aménagements intérieurs',
            'svg': insideImg,
            'last': true,
            'detail': [
                'table',
                'chaises',
                'meuble TV'
            ]
        },
    ],
    [
        {
            'id': 5,
            'title': 'Fenêtres',
            'svg': windowImg,
            'last': false,
            'detail': [
                'fenêtre classique',
                'velux'
            ]
        },
        {
            'id': 6,
            'title': 'Portes',
            'svg': doorImg,
            'last': false,
            'detail': [
                'porte de cave',
                'porte lourde'
            ]
        },
        {
            'id': 7,
            'title': 'Portails',
            'svg': gateimg,
            'last': false,
            'detail': [
                'portail d\'entrée',
                'portail lalala'
            ]
        },
        {
            'id': 8,
            'title': 'Volets',
            'svg': shutterImg,
            'last': false,
            'detail': [
                'volets intérieurs',
                'volets extérieurs'
            ]
        },
        {
            'id': 9,
            'title': 'Aménagements extérieurs',
            'svg': exteriorImg,
            'last': true,
            'detail': [
                'préau',
                'veranda'
            ]
        }
    ]
];

const Services = ({scrollY, categoryService, setCategoryService}) => {

    // const [category, setCategory] = useState(0);

    useEffect(() => {

        const inside = document.getElementById('service-inside');
        const insideSpan = document.querySelector('#service-inside span');
        const outside = document.getElementById('service-outside');
        const outsideSpan = document.querySelector('#service-outside span');

        document.querySelector('.products-list').style.animation = 'none'; 

        setTimeout(() => {
            if(categoryService === 0) {
                document.querySelector('.products-list').style.animation = 'productsUp 1.5s ease-out forwards'; 
                document.querySelectorAll('.product-card').forEach((e) => e.style.animation = 'contentAppears 2s ease-out forwards 1.5s');

                insideSpan.style.color = '#C2B887';
                outsideSpan.style.color = 'inherit';

                inside.classList.add('active-nav');
                inside.classList.remove('inactive-nav');

                outside.classList.add('inactive-nav');
                outside.classList.remove('active-nav');
            }

            else if(categoryService === 1) {
                document.querySelector('.products-list').style.animation = 'productsUp 1.5s ease-out forwards'; 
                document.querySelectorAll('.product-card').forEach((e) => e.style.animation = 'contentAppears 2s ease-out forwards 1.5s');

                outsideSpan.style.color = '#C2B887';
                insideSpan.style.color = 'inherit';

                outside.classList.add('active-nav');
                outside.classList.remove('inactive-nav');

                inside.classList.add('inactive-nav');
                inside.classList.remove('active-nav');
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
                    <li onClick={() => setCategoryService(0)} id='service-inside'>
                        <span>Menuiserie intérieure</span>
                    </li>
                    <li onClick={() => setCategoryService(1)} id='service-outside'>
                        <span>Menuiserie extérieure</span>
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
                                <Products 
                                    key={e.id} 
                                    img={e.svg} 
                                    title={e.title}
                                    last={e.last} 
                                    detail={e.detail} />      
                            )
                        })}
                    </div>
                : null }
            </div>
            <div className="products-img">
                <img src={servicesImg} alt="bois et travaux de menuiseries" />
            </div>
        </div>
        </>
    );
};

export default Services;