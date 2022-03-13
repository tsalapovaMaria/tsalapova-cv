import React from 'react';
import { Navigation } from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";

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
                    <Swiper navigation modules={[Navigation]}>
                        <SwiperSlide><img src={secImg} className="d-block w-100" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={thirdImg} className="d-block w-100" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={forthImg} className="d-block w-100" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={fifthImg} className="d-block w-100" alt=""/></SwiperSlide>
                        <SwiperSlide><img src={sixthImg} className="d-block w-100" alt=""/></SwiperSlide>
                    </Swiper>
                    {/*<Carousel>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*    <img src={secImg} className="d-block w-100" alt=""/>*/}
                    {/*</Carousel>*/}
                </div>
            </div>
        </article>
    )
}

export default Thesis;