import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DetailedService from './DetailedService';

const Products = ({id, img, title, last, detail}) => {

    const [isShown, setIsShown] = useState(false);

    // Gestion de la superposition de la modale si survol de la dernière card
    useEffect(() => {
        const lastCard = document.querySelector('.product-card:nth-child(5)');

        if (last) {
            lastCard.style.zIndex = "6";
        }
        else {
            lastCard.style.zIndex = "0"; 
        }

    }, [isShown]);

    return (
        <div className="product-card">
            {(isShown) ? 
                    <DetailedService last={last} title={title} detail={detail} />
                    : null
                    }
            <div className="product-img" 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
                >
                    
                <img src={img} alt="" className={(last) ? "last-img" : null}/>
            </div>
            <div className="product-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Products;