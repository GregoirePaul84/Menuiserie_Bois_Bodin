import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Products = ({img, title}) => {

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
        console.log(isShown);
    }, [isShown]);

    return (
        <div className="product-card">
            <div className="product-img" 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    
                <img src={img} alt="" />
            </div>
            <div className="product-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Products;