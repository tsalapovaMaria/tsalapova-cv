import React from 'react';
import NavItem from "../NavItem/NavItem";

const Nav = () => {
    return (
        <div className="nav-container">
            <div className="burger-menu-close">
                <span className="line-close"/>
                <span className="line-close"/>
            </div>
            <div className="burger-menu">
                <span className="line"/>
                <span className="line"/>
                <span className="line"/>
            </div>
            <nav className="container">
                <ul className="d-none d-md-flex nav-list row justify-content-between">
                    <NavItem text="education" anchor="education"/>
                    <NavItem text="skills" anchor="skills"/>
                    <NavItem text="projects" anchor="projects"/>
                    <NavItem text="other projects" anchor="other_projects"/>
                    <NavItem text="contacts" anchor="contacts"/>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;