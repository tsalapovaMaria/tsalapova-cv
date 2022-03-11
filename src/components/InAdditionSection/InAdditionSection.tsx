import React from 'react';

const moodFirstImg = require('./../../images/screenshots-2.jpg');
const moodSecondImg = require('./../../images/screenshots-3.jpg');

const abbaFirstImg = require('./../../images/DSC_1108.jpg');
const abbaSecondImg = require('./../../images/DSC_1099_2.jpg');

const cameraManFirstImg = require('./../../images/IMG_1577.JPG');
const cameraManSecondImg = require('./../../images/IMG_1578.JPG');

const modelFirstImg = require('./../../images/DSC_2007.jpg');
const modelSecondImg = require('./../../images/DSC_2132.jpg');
const modelThirdImg = require('./../../images/DSC_6464.jpg');
const modelForthImg = require('./../../images/DSC_2138.jpg');
const modelFifthImg = require('./../../images/000491000029.jpg');

const gqFirstImg = require('./../../images/IMG_0487.JPG');
const gqSecondImg = require('./../../images/IMG_0509.JPG');
const gqThirdImg = require('./../../images/IMG_1096.JPG');

const InAdditionSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <article className="article">
                    <h2 id="in_addition" className="article-title"><span>В дополнение</span></h2>
                    <div className="in-addition-content">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                            <h3 className="about-exhibition mb-2">Videomaker</h3>
                            <p className="article-text"><a href="https://youtu.be/ILypffY_IFA">Съёмка и монтаж mood видео</a></p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/ILypffY_IFA">
                                    <img className="w-100" src={moodFirstImg} alt=""/>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/ILypffY_IFA">
                                    <img className="w-100" src={moodSecondImg} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                            <p className="article-text"><a href="https://youtu.be/hCmlxREurOI">Проект Abba Parody</a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/hCmlxREurOI">
                                    <img className="w-100" src={abbaFirstImg} alt=""/>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/hCmlxREurOI">
                                    <img className="w-100" src={abbaSecondImg} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content d-flex flex-column align-items-center justify-content-center">
                        <h3 className="about-exhibition mb-3">Оператор для бюджетного фильма "История трёх сестёр"</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src={cameraManFirstImg} className="w-100" alt=""/>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src={cameraManSecondImg} className="w-100" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content d-flex flex-column align-items-center justify-content-center">
                        <h3 className="about-exhibition mb-2">Модель для фотовыставки "Супердискотека 2020"</h3>
                        <p className="exhibition-author mb-2">(автор и фотограф - <a href="https://www.instagram.com/kirill_causelove/">Кирилл</a>)</p>
                        <div className="row superdisco-container">
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={modelFirstImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={modelSecondImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={modelThirdImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                        </div>
                        <div className="row superdisco-container mt-lg-2">
                            <div className="col-12 col-md-6 in-addition-content d-flex justify-content-center">
                                <img src={modelForthImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                            <div className="col-12 col-md-6 in-addition-content d-flex justify-content-center">
                                <img src={modelFifthImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content text-center">
                        <h3 className="mb-3">Ассистент стилиста GQ на видео съёмках для Tik Tok</h3>
                        <div className="row">
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={gqFirstImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={gqSecondImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                            <div className="col-12 col-md-4 in-addition-content d-flex justify-content-center">
                                <img src={gqThirdImg} className="w-100 in-addition-img m-2 m-lg-0" alt=""/>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default InAdditionSection