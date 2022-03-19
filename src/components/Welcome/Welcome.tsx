import React from "react";
// const mainImg = require('./../../images/IMG_1056.jpg');
const mainImg1 = require('./../../images/IMG_0240.JPG');

const Welcome = () => {
    return (
        <section className="content-section welcome">
            <div className="container">
                <article className="article">
                    <div className="row">
                        <div className="col-12 col-lg-4 d-flex align-items-center justify-content-center justify-content-lg-end mb-3 mb-lg-0">
                            <img className="welcome-img" src={mainImg1} alt="welcome-img"/>
                        </div>
                        <div className="col-12 col-lg-8 d-flex flex-column justify-content-center text-center text-lg-left">
                            <p className="article-text">I'm Maria (23 y.o.). Now living in Moscow, Russia.</p>
                            <p className="article-text">It's my CV-site. Here is information about my <a href="#education">education</a>, <a href="#skills">skills</a> and <a href="#contacts">contacts</a>.</p>
                            <p className="article-text">I'm open to job opportunities.</p>
                            <p className="article-text">If you think that I am a god fit to your team, please text me to <a className="email-link" href="mailto: mtsalapova@yandex.ru">my mail</a>. For now let me introduce you to the site content.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Welcome;