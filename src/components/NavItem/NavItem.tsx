import React from 'react';
import '../../styles/style.css';

interface Props {
    text: string;
    anchor: string;
}

const NavItem: React.FC<Props> = (props) => {
    return (
        <li className="nav-item col-sm-auto text-center">
            <a href={`#${props.anchor}`} className="nav-link">{props.text}</a>
        </li>
    )
}

export default NavItem;