import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DetailedService from './DetailedService';

const Products = ({id, anchor, img, title, detail}) => {

    const [isShown, setIsShown] = useState(false);

    // Gestion de la superposition de la modale si survol de la dernière card
    useEffect(() => {
        const card2 = document.querySelector('.product-card:nth-child(2) .detailed-services');
        const card3 = document.querySelector('.product-card:nth-child(3)');
        const card4 = document.querySelector('.product-card:nth-child(4) .detailed-services');
        const lastCard = document.querySelector('.product-card:nth-child(5)');

        if (isShown && id === 4) {
            console.log('id', id);
            card3.style.zIndex = "0";
            lastCard.style.zIndex = "6";
        }
        else if(isShown && (id === 1)) {
            card2.style.left = '-18px';
            card2.style.top = '97px';
        }
        else if(isShown && (id === 3)) {
            card4.style.left = '-18px';
            card4.style.top = '97px';
        }
        else {
            card3.style.zIndex = "3";
            lastCard.style.zIndex = "0"; 
        }

    }, [isShown]);

    return (
        <div className="product-card">
            {(isShown) ? 
                <DetailedService id={id} title={title} detail={detail} />
                : null
            }
            <a
                href={`/all_services/${anchor}`}
                target="_blank"
                rel="noreferrer"
            >
                <div 
                    className="product-img" 
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    <img src={img} alt="" className={id === 4 ? "last-img" : null}/>
                </div>
            </a>
            <div className="product-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Products;