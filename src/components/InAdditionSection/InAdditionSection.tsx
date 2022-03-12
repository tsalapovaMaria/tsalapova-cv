import React from 'react';

const moodFirstImg = require('./../../images/screenshots-2.jpg');
const moodSecondImg = require('./../../images/screenshots-3.jpg');

const abbaFirstImg = require('./../../images/DSC_1108.jpg');
const abbaSecondImg = require('./../../images/DSC_1099_2.jpg');
const abbaHoverFirstImg = require('./../../images/2CAB1F10-3555-4D33-A8A9-C47EADD46D0C.JPG');
const abbaHoverSecondImg = require('./../../images/IMG_1099.JPG');

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
                    <h2 id="in_addition" className="article-title"><span>In addition</span></h2>
                    <div className="in-addition-content">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                            <h3 className="about-exhibition mb-2">Videomaker</h3>
                            <p className="article-text"><a href="https://youtu.be/ILypffY_IFA">Film and edit mood video</a></p>
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
                            <p className="article-text"><a href="https://youtu.be/hCmlxREurOI">Abba Parody project</a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/hCmlxREurOI">
                                    <img
                                        onMouseOver={e => (e.currentTarget.src = abbaHoverFirstImg)}
                                        onMouseOut={e => (e.currentTarget.src = abbaFirstImg)}
                                        className="w-100"
                                        src={abbaFirstImg}
                                        alt=""
                                    />
                                </a>
                            </div>
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/hCmlxREurOI">
                                    <img
                                        onMouseOver={e => (e.currentTarget.src = abbaHoverSecondImg)}
                                        onMouseOut={e => (e.currentTarget.src = abbaSecondImg)}
                                        className="w-100"
                                        src={abbaSecondImg}
                                        alt=""
                                    />
                                </a>
                            </div>
                            {/*<div className="col-12 col-md-6 in-addition-content">*/}
                            {/*    <a href="https://youtu.be/hCmlxREurOI">*/}
                            {/*        <img className="w-100" src={abbaHoverFirstImg} alt=""/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                            {/*<div className="col-12 col-md-6 in-addition-content">*/}
                            {/*    <a href="https://youtu.be/hCmlxREurOI">*/}
                            {/*        <img className="w-100" src={abbaHoverSecondImg} alt=""/>*/}
                            {/*    </a>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className="in-addition-content d-flex flex-column align-items-center justify-content-center">
                        <h3 className="about-exhibition mb-3">Cameraman of the "The story of three sisters" movie</h3>
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
                        <h3 className="about-exhibition mb-2">Model for the photo exhibition called "Super disco 2020"</h3>
                        <p className="exhibition-author mb-2">(photograph and author is <a href="https://www.instagram.com/kirill_causelove/">Kirill</a>)</p>
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
                        <h3 className="mb-3">GQ stylist assistant on the set of Tik Tok video</h3>
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