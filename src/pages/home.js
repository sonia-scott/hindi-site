import React from 'react';

function Home () {
    return (
        <section className="home">
            <section className="home-top"> 
                <section className="home-left">
                    <span className="placeholder"></span>
                    <h1 className="main-title">A beginner's* guide</h1> 
                </section>
                <section className="home-right">
                    <h1 className="main-title">to learning Hindi</h1>
                </section>
            </section>
            <section className="home-bottom"> 
                <span className="sub-title">*as in, a guide written by a beginner</span>
            </section>
        </section>
    )
}

export default Home;
