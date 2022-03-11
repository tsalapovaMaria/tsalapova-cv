import React from 'react';
import Education from "../Education/Education";
import Thesis from "../Thesis/Thesis";
import University from "../University/University";

const EducationSection = () => {
    return (
        <section className="content-section">
            <div className="container">
                <Education/>
                <Thesis/>
                <University/>
            </div>
        </section>
    )
}

export default EducationSection;