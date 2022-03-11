import React from 'react';

const Education = () => {
    const img = require('../../images/education.JPG');

    return (
        <article className="article row">
            <h2 id="education" className="article-title col-12"><span>Education</span></h2>
            <div className="col-12 col-lg-7 d-flex flex-column justify-content-center align-items-center text-center text-lg-right">
                <p className="article-text">Graduated with honors from Moscow Polytechnic University. Bachelor in  <b>"Information system and technologies in the media industry"</b>.</p>
            </div>
            <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <img className=" w-75 content-img" src={img} alt="welcome-img"/>
            </div>
        </article>
    )
}

export default Education;