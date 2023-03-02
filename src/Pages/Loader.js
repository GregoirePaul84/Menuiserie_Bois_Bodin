import React from 'react';
import Logo from '../Svg/Logo';

const Loader = ({isLoading, setIsEntered}) => {
    // const button = document.querySelector('.loader-container button');

    function enterWebsite() {    
        const pageblock = document.querySelector('.home-container');
        const loaderblock = document.querySelector('.loader-container');
        const header = document.getElementsByTagName('header');
        const video = document.getElementsByTagName('video')[0];

        const leaves = document.querySelectorAll('.loader-container svg path');

        leaves.forEach((leaf, index) => {
            leaf.style.animation = `3s ease-out 0s 1 normal forwards running move-leaf${index+1}`;
        });

        loaderblock.style.animation = '3s ease-out 0s 1 normal forwards running loader-disappears'; 

        pageblock.style.height = 'fit-content';
        header[0].style.position = 'fixed';
        video.play();

        setIsEntered(true);

        setTimeout(() => {
            loaderblock.style.display = 'none';
        }, 3000)
    }

    return (
        <div className='loader-container'>
            <Logo />       
            <h1>
                <span>M</span>enuiserie <span>B</span>ois <span>B</span>odin
            </h1> 
            <div className='btn-container'>
            {(!isLoading) ?
                <button id='enter-btn'>
                    <svg width="50" height="31" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                    </svg>                  
                    <span onClick={() => enterWebsite()}>
                    Entrer
                    </span>
                </button>
                :
                <p className="loading">Chargement</p>
            }
            </div>
        </div>
    );
};

export default Loader;