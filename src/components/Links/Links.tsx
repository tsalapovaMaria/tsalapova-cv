import React from 'react';

interface Props {
    isVertical?: boolean;
}

const Links: React.FC<Props> = ({isVertical}) => {
    return (
        <>
            <a href="mailto: mtsalapova@yandex.ru" className="email-link d-flex justify-content-center">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path style={{fill: "none", stroke: "#7E8E85", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin:"round", strokeMiterlimit: 10}} d="M25,27H7c-2.2,0-4-1.8-4-4V9c0-2.2,1.8-4,4-4h18c2.2,0,4,1.8,4,4v14C29,25.2,27.2,27,25,27z"/>
                    <polyline style={{fill: "none", stroke: "#7E8E85", strokeWidth: 2, strokeLinejoin: "round", strokeMiterlimit: 10}} points="3,10 16,18 29,10 "/>
                </svg>
            </a>
            <a href="http://instagram.com/tsalapova.m/" rel="noreferrer noopener" target="_blank" className="inst-link position-relative" style={ isVertical ? {bottom: -6} : {}}>
                <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path style={{fill: "#7E8E85"}} d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"/>
                    <path style={{fill: "#7E8E85"}} d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z"/>
                    <path style={{fill: "#7E8E85"}} d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z"/>
                </svg>
            </a>
        </>
    )
};

export default Links;