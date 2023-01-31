import React from 'react';

const Products = ({img, title}) => {

    return (
        <div className="product-card">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default Products;