import React, { useEffect } from 'react';
import Logo from '../Svg/Logo';

const Loader = ({isLoading, setIsLoading}) => {
    // const button = document.querySelector('.loader-container button');

    function enterWebsite() {    
        const pageblock = document.querySelector('.home-container');
        const loaderblock = document.querySelector('.loader-container');
        const header = document.getElementsByTagName('header');
        console.log(header[0]);

        const leaf1 = document.querySelector('.loader-container svg path:nth-child(11)');
        const leaf2 = document.querySelector('.loader-container svg path:nth-child(12)');
        const leaf3 = document.querySelector('.loader-container svg path:nth-child(5)');
        const leaf4 = document.querySelector('.loader-container svg path:nth-child(8)');
        const leaf5 = document.querySelector('.loader-container svg path:nth-child(6)');
        const leaf6 = document.querySelector('.loader-container svg path:nth-child(7)');
        const leaf7 = document.querySelector('.loader-container svg path:nth-child(4)');
        const leaf8 = document.querySelector('.loader-container svg path:nth-child(3)');
        const leaf9 = document.querySelector('.loader-container svg path:nth-child(1)');
        const leaf10 = document.querySelector('.loader-container svg path:nth-child(2)');
        const leaf11 = document.querySelector('.loader-container svg path:nth-child(13)');
        const leaf12 = document.querySelector('.loader-container svg path:nth-child(10)');
        const leaf13 = document.querySelector('.loader-container svg path:nth-child(9)');

        leaf1.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf1';
        leaf2.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf2';
        leaf3.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf3';
        leaf4.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf4';
        leaf5.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf5';
        leaf6.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf6';
        leaf7.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf7';
        leaf8.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf8';
        leaf9.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf9';
        leaf10.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf10';
        leaf11.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf11';
        leaf12.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf12';
        leaf13.style.animation = '3s ease-out 0s 1 normal forwards running move-leaf13';

        loaderblock.style.animation = '3s ease-out 0s 1 normal forwards running loader-disappears'; 

        pageblock.style.height = 'fit-content';

        header[0].style.position = 'fixed';

        setTimeout(() => {
            loaderblock.style.display = 'none';
        }, 3000)
    }

    // useEffect(() => {
    //     if(isLoading === false) {
    //         button.style.display = 'block';
            
    //     }
    // }, [isLoading])

    return (
        <div className='loader-container'>
            <Logo />       
            <h1>
                <span>M</span>enuiserie <span>B</span>ois <span>B</span>odin
            </h1> 
            <div className="enter-btn">
                <button>
                    <svg width="50" height="31" viewBox="0 0 61 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M61 15.499C61 15.0447 60.777 14.4648 60.4548 14.1362L47.3041 0.606042C46.5588 -0.155619 45.3522 -0.155619 44.6088 0.606042C43.8635 1.36964 43.8635 2.60492 44.6088 3.36852L54.5228 13.5659L27.3255 13.5659L14.6933 0.571246C13.948 -0.190415 12.7414 -0.190415 11.9979 0.571246C11.2526 1.33484 11.2526 2.57012 11.9979 3.33372L21.9463 13.5659H15.8884L3.25622 0.571246C2.51091 -0.190415 1.3043 -0.190415 0.560892 0.571246C-0.184422 1.33484 -0.184422 2.57012 0.560892 3.33372L12.3696 15.4836L0.558986 27.6334C-0.186329 28.3951 -0.186329 29.6323 0.558986 30.3959C1.3043 31.1576 2.51091 31.1576 3.25432 30.3959L15.8541 17.4322H21.9101L11.996 27.6315C11.2507 28.3931 11.2507 29.6304 11.996 30.394C12.7414 31.1556 13.948 31.1576 14.6914 30.394L27.2912 17.4322L54.5552 17.4322L44.6069 27.6663C43.8616 28.4279 43.8616 29.6652 44.6069 30.4288C45.3522 31.1904 46.5588 31.1904 47.3022 30.4288L60.4548 16.8986C60.817 16.5275 61 16.0152 61 15.499Z" fill="#C2B887"/>
                    </svg>
                    <span onClick={() => enterWebsite()}>
                        Entrer
                    </span>
                </button>
                

            </div>
        </div>
    );
};

export default Loader;