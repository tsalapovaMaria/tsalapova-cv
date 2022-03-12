import React from 'react';
import {Carousel} from 'react-carousel-minimal';


const firstImg = require('./../../images/nav-app.png');

const secImg = require('./../../images/navApp/IMG_1100.JPG');
const thirdImg = require('./../../images/navApp/IMG_1101.JPG');
const forthImg = require('./../../images/navApp/IMG_1102.JPG');
const fifthImg = require('./../../images/navApp/IMG_1103.JPG');
const sixthImg = require('./../../images/navApp/IMG_1104.JPG');

const images = [
    {
        image: secImg,
    },
    {
        image: thirdImg,
    },
    {
        image: forthImg,
    },
    {
        image: fifthImg,
    },
    {
        image: sixthImg,
    },
];

const Thesis = () => {
    return (
        <article className="article">
            <h3 className="h3 d-flex justify-content-xl-start justify-content-center">Thesis</h3>
            <div className="row">
                <div className="col-xl-6 col-12">
                    <div className="nav-app-description row">
                        <div className="col-12 mb-4">
                            <div className="d-flex justify-content-center">
                                <img src={firstImg} alt="nav-app-img" className="ml-lg-2 mb-2 nav-app-img"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="article-text">Development of <b>navigation AR-app</b> for the Moscow Polytechnic University. The app is not required the use of mobile Internet and GPS - it's operated using AR technology.</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-12">
                    <Carousel
                        // time={10000}
                        width={500}
                        height={500}
                        radius={30}
                        dots={true}
                        slideBackgroundColor="none"
                        data={images}
                    />
                    {/*<Carousel>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*</Carousel>*/}
                    {/*<div id="carouselControlsApp" className="carousel slide d-flex justify-content-around" data-ride="carousel">*/}
                    {/*    <a className="carousel-control-prev" href="#carouselControlsApp" role="button" data-slide="prev">*/}
                    {/*        <span className="carousel-control-prev-icon" aria-hidden="true"/>*/}
                    {/*        <span className="sr-only">Previous</span>*/}
                    {/*    </a>*/}
                    {/*    <div className="carousel-inner">*/}
                    {/*        <div className="carousel-item active">*/}
                    {/*            <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="carousel-item">*/}
                    {/*            <img src={thirdImg} className="d-block w-100" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="carousel-item">*/}
                    {/*            <img src={forthImg} className="d-block w-100" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="carousel-item">*/}
                    {/*            <img src={fifthImg} className="d-block w-100" alt=""/>*/}
                    {/*        </div>*/}
                    {/*        <div className="carousel-item">*/}
                    {/*            <img src={sixthImg} className="d-block w-100" alt=""/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <a className="carousel-control-next" role="button" data-slide="next">*/}
                    {/*        <span className="carousel-control-next-icon" aria-hidden="true"/>*/}
                    {/*        <span className="sr-only">Next</span>*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </article>
    )
}

export default Thesis;