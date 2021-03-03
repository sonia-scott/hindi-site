import React, { useState, useEffect } from 'react';
import LessonMenuCard from '../lesson-menu-card/LessonMenuCard';


function UnitMenu ({ unit }) {
    console.log('unit:', unit.number);
    const [lessons, setLessons] = useState([]);

    useEffect(() => {
        getLessons();
    }, []);

    function getLessons() {
        // get lessons where Unit val matches unit.number

        const lessonsList = [
            {
                title: 'letters & sounds',
                subtitle: 'Unit 1',
                path: '/lessons/letters-and-sounds'
            }, {
                title: 'nouns',
                subtitle: 'Unit 1',
                path: '/lessons/basic-nouns'
            }, {
                title: 'vocab 1',
                subtitle: 'Unit 1',
                path: '/lessons/vocab-1'
            }
        ];

        setLessons(lessonsList);
    }


    return (
        <section className="unit">
            <div className="unit-title">
                <h2 className="unit-num">Unit {unit.number}</h2>
                <h4 className="unit-name">{unit.title}</h4>
            </div>
            <div className="unit-lessons">
                {
                    lessons.map((lesson, id) => (
                        <LessonMenuCard key={id} title={ lesson.title } path={ lesson.path } unit={ lesson.unit } />
                    ))
                }
            </div>
        </section>
    )
}

export default UnitMenu;
