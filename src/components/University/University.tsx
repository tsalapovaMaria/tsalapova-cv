import React from "react";

const University = () => {
    return (
        <article className="article">
            <div className="row">
                <div className="col-12">
                    <div className="skills-content">
                        <div className="row align-items-center flex-column">
                            <div className="col-12 px-5">
                                <h4 className="skills-list-title text-xl-left text-center mb-4">Projects at the University</h4>
                            </div>
                            <div className="col-12 mx-xl-auto px-5">
                                <ul className="skills-list text-left">
                                    <li className="skills-item"><span>Low poly <b>3D modules</b> creation</span></li>
                                    <li className="skills-item"><span>Client <b>JavaScript</b> app creation that solves algorithmic tasks</span></li>
                                    <li className="skills-item"><span>Game development using <b>Unity 3D</b> (С# scripts)</span></li>
                                    <li className="skills-item"><span>Window <b>C#</b> app creation that perform logical operations <b>on fuzzy sets</b></span></li>
                                    <li className="skills-item"><span><b>GUI</b> creation used to edit images (brightness histogram creation, applying equalization, smoothing and filters)</span></li>
                                    <li className="skills-item"><span>Automated information and reference system based on <b>UML</b></span></li>
                                    <li className="skills-item"><span>Filming and voice-over of <b>video lessons</b></span></li>
                                    <li className="skills-item"><span>Presentation on Open Day with <b>Master Class</b> about "Making 3D modules using Blender 3D"</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default University;