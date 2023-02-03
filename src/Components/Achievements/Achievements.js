import React, { useEffect, useState } from 'react';
import Works from './Works';

const Achievements = ({scrollY}) => {

    const [category, setCategory] = useState(0);

    useEffect(() => {
        if(scrollY <= 1700) {
            document.querySelector('.achievements-title svg').classList.remove('diamond-active');
        }

        if(scrollY >= 2000) {
            document.querySelector('.achievements-title svg').classList.add('diamond-active');
        } 
    });

    useEffect(() => {

        const inside = document.getElementById('achievement-inside');
        const outside = document.getElementById('achievement-outside');

        if(category === 0) {
            inside.style.color = '#C2B887';
            outside.style.color = 'inherit';

            inside.classList.add('active-nav');
            inside.classList.remove('inactive-nav');

            outside.classList.add('inactive-nav');
            outside.classList.remove('active-nav');
        }

        if(category === 1) {
            return;
        }
    }, [category]);

    return (
        <>
            <div className="achievements-container">
                <div className="achievements-title">
                    <svg width="220" height="50" viewBox="0 0 319 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="212" y="53.033" width="75" height="75" transform="rotate(-45 212 53.033)" fill="#B0A462" fillOpacity="0.6" />
                        <rect x="159" y="53.033" width="75" height="75" transform="rotate(-45 159 53.033)" fill="#9B9053" fillOpacity="0.7"/>
                        <rect x="106" y="54.033" width="75" height="75" transform="rotate(-45 106 54.033)" fill="#857B47" fillOpacity="0.8"/>
                        <rect x="53" y="53.033" width="75" height="75" transform="rotate(-45 53 53.033)" fill="#645D35" fillOpacity="0.9"/>
                        <rect y="54.033" width="75" height="75" transform="rotate(-45 0 54.033)" fill="#4F492B"/>
                    </svg>
                    <h2>
                        <span>R</span>ÉALISATIONS
                    </h2>
                </div>
                <div className="achievements-nav">
                    <ul>
                        <li id='achievement-inside'>Menuiserie intérieure</li>
                        <li id='achievement-outside'>Menuiserie extérieure</li>
                    </ul>     
                </div>
            </div>
            <Works category={category} setCategory={setCategory} />
        </>
    );
};

export default Achievements;