import React, { useEffect } from 'react';

import background from '../../Media/Img/main/about_img2.png';

const Inside = ({scrollY}) => {

    useEffect(() => {

        const svgLines = document.querySelectorAll('.inside-svg line');
        const svgImg = document.querySelector('.inside-svg image');

        
        if (scrollY >= 600) {
            svgImg.classList.add('img-appears');  
            svgLines.forEach((lines) => lines.style.animation = '4s ease-out 0s 1 normal forwards running strokeAnim');
            
        } 
    }, [scrollY]);


    return (
        
        <svg width="1920" height="1330" viewBox="0 0 1920 1330" fill="none" xmlns="http://www.w3.org/2000/svg" className='inside-svg' preserveAspectRatio="xMidYMin slice">

            {/*  Fenêtre de gauche */}
            <line x1="666" y1="990" x2="666" y2="615" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="652" y1="980" x2="652" y2="613" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="420" y1="1020" x2="420" y2="582" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="1000" x2="435" y2="584" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="1000" x2="653" y2="980" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="420" y1="1020" x2="666" y2="990" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="897" x2="652" y2="886" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="907" x2="652" y2="896" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="800" x2="652" y2="800" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="810" x2="652" y2="810" stroke="#C2B887" strokeWidth="0.5"/>        
            <line x1="435" y1="700" x2="652" y2="714" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="710" x2="652" y2="725" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="420" y1="582" x2="666" y2="615" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="435" y1="670" x2="652" y2="690" stroke="#C2B887" strokeWidth="0.5"/>

            {/* Charpente */}
            <line x1="920" y1="0" x2="390" y2="300" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="390" y1="330" x2="1500" y2="36" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="390" y1="300" x2="390" y2="330" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="482" y1="280" x2="420" y2="314" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="482" y1="280" x2="482" y2="296" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="482" y1="296" x2="420" y2="314" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="572" y1="234" x2="572" y2="273" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="572" y1="234" x2="635" y2="200" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="635" y1="200" x2="635" y2="257" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="635" y1="257" x2="572" y2="273" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="740" y1="145" x2="740" y2="227" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="740" y1="145" x2="815" y2="103" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="740" y1="227" x2="815" y2="207" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="815" y1="207" x2="815" y2="103" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="937" y1="38" x2="937" y2="175" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="937" y1="38" x2="1005" y2="0" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="937" y1="175" x2="1030" y2="149" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1030" y1="149" x2="1030" y2="0" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1172" y1="0" x2="1172" y2="112" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1172" y1="112" x2="1282" y2="81" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1282" y1="81" x2="1282" y2="0" stroke="#C2B887" strokeWidth="0.5"/>

            {/* Fenêtre de droite */}
            <line x1="965" y1="598" x2="965" y2="850" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="616" x2="984" y2="697" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="704" x2="984" y2="836" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1087" y1="691" x2="1087" y2="605" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1087" y1="697" x2="1087" y2="835" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="965" y1="598" x2="1100" y2="583" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1100" y1="583" x2="1100" y2="850" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="616" x2="1087" y2="605" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="697" x2="1087" y2="691" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="704" x2="1087" y2="697" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="984" y1="836" x2="1087" y2="835" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="939" y1="850" x2="1120" y2="850" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="939" y1="850" x2="939" y2="862" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1120" y1="850" x2="1120" y2="862" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="939" y1="862" x2="1120" y2="862" stroke="#C2B887" strokeWidth="0.5"/>

            {/* Plafond */}
            <line x1="382" y1="1050" x2="382" y2="414" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="382" y1="415" x2="1500" y2="175" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="382" y1="455" x2="1500" y2="220" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="380" y1="480" x2="1500" y2="245" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="380" y1="510" x2="740" y2="575" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="740" y1="575" x2="1500" y2="485" stroke="#C2B887" strokeWidth="0.5"/>
            
            {/* Parquet */}
            <line x1="130" y1="1323" x2="1400" y2="995" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="270" y1="1323" x2="1360" y2="1025" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="405" y1="1323" x2="1365" y2="1045" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="540" y1="1323" x2="1400" y2="1060" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="660" y1="1248" x2="735" y2="1263" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="800" y1="1149" x2="860" y2="1161" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1086" y1="1100" x2="1145" y2="1108" stroke="#C2B887" strokeWidth="0.5"/>
            <line x1="1350" y1="1076" x2="1288" y2="1068" stroke="#C2B887" strokeWidth="0.5"/>

            <image href={background} height="1920" width="1330"/>
        </svg>
    );
};

export default Inside;