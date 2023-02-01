import React from 'react';

import instagram from '../Media/Img/Icons/insta-color.png';
import facebook from '../Media/Img/Icons/facebook.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-column'>
                <h4>
                    <span>M</span>enuiserie
                    <span> B</span>ois
                    <span> B</span>odin
                </h4>
                <ul>
                    <li>
                        06 38 25 88 73
                    </li>
                    <li>
                        Zone A du Bon René <br />
                        49750 Chemillé-en-Anjou
                    </li>
                    <li>
                        menuiserieboisbodin@gmail.com
                    </li>
                </ul>     
            </div>
            <div className='footer-column'>
                <h4>
                    <span>Z</span>one
                    <span> D</span>'intervention
                </h4>
                <p>
                    La Menuiserie Bois Bodin vous propose ses services dans tout le territoire français ainsi que dans les pays limitrophes.
                </p>
            </div>
            <div className='footer-column'>
                <h4>
                    <span>R</span>éseaux 
                    <span> S</span>ociaux
                </h4>
                <p>
                    Rejoignez votre entreprise sur les réseaux sociaux !
                </p>
                <div className="social-networks">
                    <img src={instagram} alt="" />
                    <img src={facebook} alt="" />
                </div>
            </div>
            <div className='signature'>
                <h4></h4>
            </div>
        </footer>
    );
};

export default Footer;