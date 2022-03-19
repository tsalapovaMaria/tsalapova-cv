import React from "react";
import Links from "../Links/Links";
const img = require('./../../images/IMG_9412.jpg');

const Contacts = () => {
    return (
        <section className="content-section contacts mb-lg-5">
            <div className="container">
                <article className="article">
                    <h2 id="contacts" className="article-title"><span>Contacts</span></h2>
                    <div className="row">
                        <div className="col-12 col-lg-12 d-flex justify-content-center">
                            <img className="w-50" src={img} alt=""/>
                        </div>
                        <div className="my-3 col-12 col-lg-12 d-flex align-items-lg-center justify-content-center">
                            <div className="row">
                                <div className="col-2 p-0">
                                    <Links isVertical/>
                                </div>
                                <div className="col-10 p-0">
                                    <p className="contacts-content text-left"><a href="mailto: mtsalapova@yandex.ru">tsalapovam@yandex.ru</a></p>
                                    <p className="contacts-content text-left"><a href="http://instagram.com/tsalapova.m/" rel="noreferrer noopener" target="_blank">@tsalapova.m</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Contacts