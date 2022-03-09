import React from 'react';

const Thesis = () => {
    return (
        <article className="article">
            <h3 className="h3 d-flex justify-content-xl-start justify-content-center">Thesis</h3>
            <div className="row">
                <div className="col-xl-6 col-12">
                    <div className="nav-app-description row">
                        <div className="col-12">
                            <div className="d-flex justify-content-center">
                                <img src="/content-img/nav-app.png" alt="nav-app-img" className="ml-lg-2 mb-2 nav-app-img"/>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="article-text">Разработка <b>навигационного AR-приложения</b> по Московскому Политехническому Университету. Приложение не требует использования мобильного интернета, а также GPS-навигации - работа приложения осуществляется с помощью технологии дополненной реальности. </p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-12 mx-auto">
                    <div id="carouselControlsApp" className="carousel slide d-flex justify-content-around" data-ride="carousel">
                        <a className="carousel-control-prev" href="#carouselControlsApp" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"/>
                            <span className="sr-only">Previous</span>
                        </a>
                        <div className="carousel-inner">
                            {/*<div className="carousel-item active">*/}
                            {/*    <img src="/content-img/navApp/white/IMG_0168.JPG" className="d-block w-100" alt="">*/}
                            {/*</div>*/}
                            {/*<div className="carousel-item">*/}
                            {/*    <img src="content-img/navApp/white/IMG_0169.JPG" className="d-block w-100" alt="">*/}
                            {/*</div>*/}
                            {/*<div className="carousel-item">*/}
                            {/*    <img src="content-img/navApp/white/IMG_0170.JPG" className="d-block w-100" alt="">*/}
                            {/*</div>*/}
                            {/*<div className="carousel-item">*/}
                            {/*    <img src="content-img/navApp/white/IMG_0171.JPG" className="d-block w-100" alt="">*/}
                            {/*</div>*/}
                            {/*<div className="carousel-item">*/}
                            {/*    <img src="content-img/navApp/white/IMG_0172.JPG" className="d-block w-100" alt="">*/}
                            {/*</div>*/}
                        </div>
                        <a className="carousel-control-next" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"/>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Thesis;