import React from "react";

const SkillsSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <article className="article">
                    <h2 id="skills" className="article-title col-12"><span>Навыки</span></h2>
                    <div className="row">
                        <div className="col-12 col-xl-6 ">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">junior frontend developer:</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12 mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span>Visual Studio, VS Code</span></li>
                                            <li className="skills-item"><span>HTML, CSS, JavaScript (основы)</span></li>
                                            <li className="skills-item"><span>grid вёрстка</span></li>
                                            <li className="skills-item"><span>адаптивная вёрстка</span></li>
                                            <li className="skills-item"><span>вёрстка сайтов и шаблонов для MODX</span></li>
                                            <li className="skills-item"><span>создание HTML-страницы на основе дизайн-макетов</span></li>
                                            <li className="skills-item"><span>чтение документации на английском языке</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12  col-xl-6">
                            <div className="skills-content">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 px-5">
                                        <h3 className="skills-list-title text-xl-left text-center">личные качества:</h3>
                                    </div>
                                    <div className="col-xl-12 col-md-6 col-12  mx-xl-auto px-xl-5 px-md-3 px-5">
                                        <ul className="skills-list text-left">
                                            <li className="skills-item"><span>творческая личность с аналитическим складом ума</span>
                                            </li>
                                            <li className="skills-item"><span>креативное мышление</span></li>
                                            <li className="skills-item"><span>желание учиться</span></li>
                                            <li className="skills-item"><span>амбициозность</span></li>
                                            <li className="skills-item"><span>насмотренность</span></li>
                                            <li className="skills-item"><span>коммуникабельность</span></li>
                                            <li className="skills-item"><span>грамотная критика, умение предлагать</span>
                                            </li>
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