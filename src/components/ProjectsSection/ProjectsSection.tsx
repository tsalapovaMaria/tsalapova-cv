import React from 'react';

const firstImg = require('./../../images/centrchpu/index-small.png');
const secImg = require('./../../images/centrchpu/katalog-small.png');
const thirdImg = require('./../../images/centrchpu/services-small.png');
const forthImg = require('./../../images/centrchpu/materials-small.png');
const fifthImg = require('./../../images/centrchpu/articles-small.png');
const sixthImg = require('./../../images/centrchpu/contacts-small.png');

const ProjectsSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <article className="article">
                    <h2 id="projects" className="article-title col-12"><span>Projects</span></h2>
                    <div className="row">
                        <div className="col-12 col-xl-6 ">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">frontend developer</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12 mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span><a href="https://tsalapovamaria.github.io/new-shares-app/" rel="noreferrer noopener" target="_blank">Shares app</a> development based on Figma layout (on Russian)</span></li>
                                            <li className="skills-item"><span>Site development <a href="http://centrchpu.ru/" rel="noreferrer noopener" target="_blank">CNC center</a> (it's currently unavailable)</span></li>
                                            <li className="skills-item"><span><a href="http://tsalapova.ru/" rel="noreferrer noopener" target="_blank">CV-site</a> creation :)</span></li>
                                        </ul>
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