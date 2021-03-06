import React from 'react';

const moodFirstImg = require('./../../images/moodVideo/image_2022-03-19_14-23-10 (1).png');
const moodFirstHoverImg = require('./../../images/moodVideo/image_2022-03-19_14-23-10.png');
const moodSecondImg = require('./../../images/moodVideo/image_2022-03-19_14-23-18 (1).png');
const moodSecondHoverImg = require('./../../images/moodVideo/image_2022-03-19_14-23-18.png');

const abbaFirstImg = require('./../../images/DSC_1108.jpg');
const abbaSecondImg = require('./../../images/DSC_1099_2.jpg');
const abbaHoverFirstImg = require('./../../images/2CAB1F10-3555-4D33-A8A9-C47EADD46D0C.JPG');
const abbaHoverSecondImg = require('./../../images/IMG_1099.JPG');

const cameraManFirstImg = require('./../../images/IMG_1577.JPG');
const cameraManSecondImg = require('./../../images/IMG_1578.JPG');
const cameraManHoverFirstImg = require('./../../images/IMG_0232.jpg');
const cameraManHoverSecondImg = require('./../../images/IMG_0233.jpg');

const modelFirstImg = require('./../../images/DSC_2007.jpg');
const modelSecondImg = require('./../../images/DSC_2132.jpg');
const modelThirdImg = require('./../../images/DSC_6464.jpg');
const modelForthImg = require('./../../images/DSC_2138.jpg');
const modelFifthImg = require('./../../images/000491000029.jpg');

const gqFirstImg = require('./../../images/IMG_0487.JPG');
const gqSecondImg = require('./../../images/IMG_0509.JPG');
const gqThirdImg = require('./../../images/IMG_1096.JPG');

const OtherProjectsSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <article className="article">
                    <h2 id="other_projects" className="article-title"><span>Other passions and projects</span></h2>
                    <div className="in-addition-content">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                            <h3 className="about-exhibition mb-2">Videomaker</h3>
                            <p className="article-text"><a href="https://youtu.be/ILypffY_IFA" rel="noreferrer noopener" target="_blank">Film and edit mood video</a></p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/ILypffY_IFA" rel="noreferrer noopener" target="_blank">
                                    <img
                                        onMouseOver={e => (e.currentTarget.src = moodFirstHoverImg)}
                                        onMouseOut={e => (e.currentTarget.src = moodFirstImg)}
                                        className="w-100" src={moodFirstImg} alt=""/>
                                </a>
                            </div>
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/ILypffY_IFA" rel="noreferrer noopener" target="_blank">
                                    <img
                                        onMouseOver={e => (e.currentTarget.src = moodSecondHoverImg)}
                                        onMouseOut={e => (e.currentTarget.src = moodSecondImg)}
                                        className="w-100" src={moodSecondImg} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content">
                        <div className="d-flex flex-column align-items-center justify-content-center mb-3">
                            <p className="article-text"><a href="https://youtu.be/hCmlxREurOI" rel="noreferrer noopener" target="_blank">Abba Parody project</a>
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 in-addition-content">
                                <a href="https://youtu.be/hCmlxREurOI" rel="noreferrer noopener" target="_blank">
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
                                <a href="https://youtu.be/hCmlxREurOI" rel="noreferrer noopener" target="_blank">
                                    <img
                                        onMouseOver={e => (e.currentTarget.src = abbaHoverSecondImg)}
                                        onMouseOut={e => (e.currentTarget.src = abbaSecondImg)}
                                        className="w-100"
                                        src={abbaSecondImg}
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content d-flex flex-column align-items-center justify-content-center">
                        <h3 className="about-exhibition mb-3">Cameraman of the "The story of three sisters" movie</h3>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img
                                    onMouseOver={e => (e.currentTarget.src = cameraManHoverFirstImg)}
                                    onMouseOut={e => (e.currentTarget.src = cameraManFirstImg)}
                                    src={cameraManFirstImg}
                                    className="w-100"
                                    alt=""
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <img
                                    onMouseOver={e => (e.currentTarget.src = cameraManHoverSecondImg)}
                                    onMouseOut={e => (e.currentTarget.src = cameraManSecondImg)}
                                    src={cameraManSecondImg}
                                    className="w-100"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="in-addition-content d-flex flex-column align-items-center justify-content-center">
                        <h3 className="about-exhibition mb-2">Model for the photo exhibition called "Super disco 2020"</h3>
                        <p className="exhibition-author mb-2">(photograph and author is <a href="https://www.instagram.com/kirill_causelove/" rel="noreferrer noopener" target="_blank">Kirill</a>)</p>
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

export default OtherProjectsSection