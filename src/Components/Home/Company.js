import React from 'react';

import forest from '../../Media/Video/forest2.mp4';
import carpenter from '../../Media/Img/main/pexels-cottonbro-studio-5089175.jpg';
import wood from '../../Media/Img/main/pexels-lumn-227577.jpg';

const Company = ({isLoading, setIsLoading}) => {

    function checkLoading() {
        setTimeout(() => {
            console.log('video chargée');
            setIsLoading(false);
        }, 4000)
        
    }
    
    return (
        <div className="home-slider">
            {/* Premier slide */}
            <div className='company-info'>
                <div className="background">
                    <video 
                        width="100%" 
                        height="100%" 
                        autoPlay muted loop 
                        onLoadedData={() => {
                            checkLoading();
                        }}
                        >
                        <source src={forest} type="video/mp4"/>
                    </video>
                </div>
                <div className="home-left-column">
                    <div className="main-info">
                        <h1>
                            <span>M</span>enuiserie <span>B</span>ois <span>B</span>odin
                        </h1>
                        <p>
                            Bienvenue chez Menuiserie Bois Bodin,
                            votre créateur de <span>pièces uniques en bois</span> pour vos projets les plus ambitieux.
                        </p>
                        <div className="contact-redirection">
                            <svg width="35" height="20" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                            </svg>
                            <button>Demander un devis</button>
                        </div>            
                    </div>
                </div>
      
            </div>

            {/* Deuxième slide */}
            <div className="company-info">
                <div className="background">
                    <img src={carpenter} alt="" />
                </div>
                <div className="home-left-column">
                    <div className="main-info">
                        <h1>
                            <span>S</span>ur-<span>m</span>esure
                        </h1>
                        <p>
                            Votre artisan est à votre écoute pour vos désirs de travaux sur-mesure, afin de créer avec vous une 
                            <span> menuiserie unique</span>.
                        </p>
                        <div className="contact-redirection">
                            <svg width="35" height="20" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                            </svg>
                            <button>Demander un devis</button>
                        </div>            
                    </div>
                </div> 
            </div>

            {/* Troisième slide */}
            <div className="company-info">
                <div className="background">
                    <img src={wood} alt="" />
                </div>
                <div className="home-left-column">
                    <div className="main-info">
                        <h1>
                            <span>S</span>avoir-<span>f</span>aire
                        </h1>
                        <p>
                            Faites confiance à votre menuisier pour vos rénovations et réalisations qui 
                            <span> durent dans le temps</span>.
                        </p>
                        <div className="contact-redirection">
                            <svg width="35" height="20" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                            </svg>
                            <button>Demander un devis</button>
                        </div>            
                    </div>
                </div> 
            </div>
        </div>      
    );
};

export default Company;