import React from 'react'
import { Card, SideButton } from '../components/common';

function lesson(props) {
    console.log('lesson props: ', props);

    return (
        <section className="lesson">
            <div className="side-buttons">
                <SideButton text="back to all lessons" type="allLessons"/>
                <SideButton text="previous lesson" type="previous"/>
            </div>
            <Card type="lesson" content={ props } />
            <div className="side-buttons">
                <SideButton text="next lesson" type="next"/>
            </div>
        </section>
    )
}

export default lesson;
