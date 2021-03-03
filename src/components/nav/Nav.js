import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
    {
        name: 'Lessons',
        path: './all-lessons'
    }, {
        name: 'Resources',
        path: './resources'
    }, {
        name: 'About',
        path: './about'
    }
];

function Nav() {

    return (
        <nav>
            <ul className="nav">
                {
                    navLinks.map((link, index) => (
                        <li key={ index }>
                            <Link className="nav-link" to={ link.path }>{ link.name }</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Nav;
