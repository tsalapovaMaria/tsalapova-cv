import React from "react";

const SkillsSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <article className="article">
                    <h2 id="skills" className="article-title col-12"><span>Skills</span></h2>
                    <div className="row">
                        <div className="col-12 col-xl-6 ">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">Hard skills:</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12 mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span>HTML, CSS, JavaScript, TypeScript, React</span></li>
                                            <li className="skills-item"><span>Node.js, NextJS, Express</span></li>
                                            <li className="skills-item"><span>VS Code, PHP Storm</span></li>
                                            <li className="skills-item"><span>Git, Jira</span></li>
                                            <li className="skills-item"><span>OWOX events creation</span></li>
                                            <li className="skills-item"><span>Grid and adaptive layout based on Figma layout</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-xl-6">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">Soft skills:</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12  mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span>creative thinking</span></li>
                                            <li className="skills-item"><span>ambitious</span></li>
                                            <li className="skills-item"><span>responsible</span></li>
                                            <li className="skills-item"><span>communicative</span></li>
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

export default SkillsSection;