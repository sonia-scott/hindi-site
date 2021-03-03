import React from 'react';

function Home () {
    return (
        <section className="home">
            <section className="home-left">
                <span className="placeholder"></span>
                <h1 className="main-title">A beginner's* guide</h1> 
                <span className="sub-title">*as in, a guide written by a beginner</span>
            </section>
            <section className="home-right">
                <h1 className="main-title">to learning Hindi</h1>
            </section>
        </section>


        // <section className="home-titles">
        //     <h1 className="main-title">A beginner's* guide to learning Hindi.</h1>
        //     <h3 className="sub-title">*as in, a guide written by a beginner... </h3>
        // </section>
    )
}

export default Home;
