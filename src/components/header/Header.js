import React from 'react';
import Nav from '../nav/Nav';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div className="header">
                <section className="header-left">
                    <div className="title">
                        <Link to="/">Hindi: a beginner's guide</Link>
                    </div>
                </section>
                <section className="header-right">
                    <Nav />
                </section>
            </div>
            <hr className="header-divider"/>
        </>
    )
}

export default Header;
