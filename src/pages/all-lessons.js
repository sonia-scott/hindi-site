import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UnitMenu from '../components/unit-menu/UnitMenu';
import { Card } from '../components/common';
import lesson from './lesson';

function AllLessons () {

    const [units, setUnits] = useState([]);

    useEffect(() => {
        getUnits();
    }, []);

    function getUnits() {
        const unitsList = [
            {
                title: 'basics',
                number: 1, 
            }, {
                title: 'nouns pronouns & verbs',
                number: 2,
            }, {
                title: 'plurals & questions',
                number: 3,
            }
        ];
        setUnits(unitsList);
    }

    const cardContent = {
        title: 'All Lessons',
        subtitle: 'or you can browse by topic >',
        body: units,
        type: 'all-lessons'
    }
    console.log(cardContent);

    return (
        <section className="all-lessons">
            <Card type="all-lessons" content={ cardContent }/>
        </section>
    )
}

export default AllLessons;
