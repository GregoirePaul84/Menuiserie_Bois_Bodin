import React from 'react';
import Logo from '../../Svg/Logo';

const Success = () => {
    return (
        <div id='success-container'>
            <div className='logo-container'>
                <Logo />
                <h2>
                    <span>M</span>
                    enuiserie <br />
                    <span>B</span>
                    ois <br />
                    <span>B</span>
                    odin
                </h2>
            </div>
            <div className="success-txt">
                <h3>Merci pour votre message !</h3>
                <p>Nous reviendrons vers vous dans les meilleurs délais.</p>
            </div>
        </div>
    );
};

export default Success;