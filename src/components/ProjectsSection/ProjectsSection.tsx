import React from 'react';

const ProjectsSection = () => {
    return (
        <section className="content-section">
            <div className="container-xl">
                <article className="article">
                    <h2 id="portfolio" className="article-title col-12"><span>Projects</span></h2>
                    <div className="row">
                        <div className="col-12 col-xl-6 ">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">junior frontend developer</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12 mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span>Разработка сайта <a href="http://centrchpu.ru/">Центр ЧПУ</a></span></li>
                                            <li className="skills-item"><span>Создание своего <a href="http://tsalapova.ru/">сайта-портфолио</a> :)</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row justify-content-center">
                                <div className="col-md-8">
                                    <div className="row mb-4">
                                        <a href="/content-img/centrchpu/index.png" data-toggle="lightbox"
                                           data-gallery="example-gallery"
                                           className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/index-small.png" className="img-fluid">*/}
                                        </a>
                                        <a href="/content-img/centrchpu/katalog.png" data-toggle="lightbox"
                                           data-gallery="example-gallery"
                                           className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/katalog-small.png" className="img-fluid">*/}
                                        </a>
                                        <a href="/content-img/centrchpu/services.png" data-toggle="lightbox"
                                           data-gallery="example-gallery"
                                           className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/services-small.png" className="img-fluid">*/}
                                        </a>
                                    </div>
                                    <div className="row mb-4">
                                        <a href="/content-img/centrchpu/materials.png" data-toggle="lightbox"
                                           data-gallery="example-gallery"
                                           className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/materials-small.png" className="img-fluid">*/}
                                        </a>
                                        <a href="/content-img/centrchpu/articles.png" data-toggle="lightbox"
                                           data-gallery="example-gallery"
                                           className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/articles-small.png" className="img-fluid">*/}
                                        </a>
                                        <a href="/content-img/centrchpu/contacts.png" data-toggle="lightbox" data-gallery="example-gallery" className="col-sm-4">
                                            {/*<img src="/content-img/centrchpu/contacts-small.png" className="img-fluid">*/}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ProjectsSection;