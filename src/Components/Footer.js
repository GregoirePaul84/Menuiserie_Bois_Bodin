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
                    <a href="https://www.instagram.com/menuiserie_bois_bodin/?hl=fr" target="_blank" rel="noopener noreferrer">
                        <img src={instagram} alt="Instagram" />
                    </a>
                    <a href="https://www.facebook.com/people/Menuiserie-Bois-Bodin/100088037667738/" target="_blank" rel="noopener noreferrer">
                        <img src={facebook} alt="Facebook" />
                    </a>
                </div>
            </div>
            <div className='signature'>
                <div>
                    <p>© 2022 - Menuiserie Bois Bodin </p>
                </div>
                <div className="terms">
                    <a href="/menuiserie_bois_bodin/cgv" target="_blank" rel="noreferrer">
                        <p>Conditions générales de vente</p>
                    </a>
                    <span> | </span>
                    <p>Mentions légales</p>
                </div>
                <div>
                    <a href="mailto:gregoirepaulet84@gmail.com">
                        <p>
                            <span>Site développé par Grégoire Paulet</span>
                        </p>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;