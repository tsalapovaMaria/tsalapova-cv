import React from "react";

const Welcome = () => {
    const mainImg = require('./../../images/IMG_1056.jpg');
    return (
        <section className="content-section welcome">
            <div className="container-xl">
                <article className="article">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end mb-3 mb-lg-0">
                            <img className="welcome-img mt-5" src={mainImg} alt="welcome-img"/>
                        </div>
                        <div className="col-12 col-lg-6 d-flex flex-column justify-content-center text-center text-lg-left">
                            <p className="article-text">I'm Maria (23 y.o.). Now living in Moscow, Russia.</p>
                            <p className="article-text">It's my CV-site. Here is information about my education, skills and contacts.</p>
                            <p className="article-text">I'm looking for a job now.</p>
                            <p className="article-text">If you want to offer me a job, please text me to <a className="email-link" href="mailto: mtsalapova@yandex.ru">my mail</a>. For now let me introduce you to the site content.</p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Welcome;