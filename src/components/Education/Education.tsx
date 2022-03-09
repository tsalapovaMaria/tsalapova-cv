import React from 'react';

const Education = () => {
    const img = require('../../images/education.JPG');

    return (
        <article className="article row">
            <h2 id="education" className="article-title col-12"><span>образование</span></h2>
            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center text-lg-right">
                <p className="article-text">С отличием окончила Московский Политехнический Университет. Бакалавр по специальности <b>"Информационные системы и Технологии в Медиаиндустрии"</b>.</p>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start mb-3 mb-lg-0">
                <img className=" w-75 content-img" src={img} alt="welcome-img"/>
            </div>
        </article>
    )
}

export default Education;