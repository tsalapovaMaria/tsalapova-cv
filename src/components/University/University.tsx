import React from "react";

const University = () => {
    return (
        <article className="article">
            <div className="row">
                <div className="col-12">
                    <div className="skills-content">
                        <div className="row align-items-center flex-column">
                            <div className="col-12 px-5">
                                <h4 className="skills-list-title text-xl-left text-center mb-4">Чем я занималась в университете?</h4>
                            </div>
                            <div className="col-12 mx-xl-auto px-5">
                                <ul className="skills-list text-left">
                                    <li className="skills-item"><span>создание низкополигональных <b>3D моделей</b></span></li>
                                    <li className="skills-item"><span>написание клиентских приложений на <b>JavaScript</b> для решения алгоритмических задач</span></li>
                                    <li className="skills-item"><span>разработка игры в <b>Unity 3D</b> (написание скриптов на С#)</span></li>
                                    <li className="skills-item"><span>разработка оконного приложения на <b>C#</b>, позволяющее выполнять логические операции <b>над нечёткими множествами</b></span></li>
                                    <li className="skills-item"><span>создание <b>GUI</b>, позволяющее редактировать изображение (создание гистограммы яркости, применение эквализации, реализация сглаживания, наложение фильтров)</span></li>
                                    <li className="skills-item"><span>разработка автоматизированной информационно-справочной системы на базе языка <b>UML</b></span></li>
                                    <li className="skills-item"><span>съёмка и озвучивание <b>видео-уроков</b></span></li>
                                    <li className="skills-item"><span>выступление на дне открытых дверей с <b>мастер-классом</b> "Моделирование в Blender 3D"</span></li>
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