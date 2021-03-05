import React, { useState, useEffect } from 'react';
import { Card } from '../components/common';

function Resources(props) {
    const [resources, setResources] = useState([]);
    useEffect(() => {
        getResources();
    }, []);

    function getResources() {
        const resourcesList = [
            {
                title: 'vocabulary', 
                body: [
                    {
                        title: 'Google Doc',
                        body: "The course's weekly vocabulary lists, compiled into one Google Doc.",
                        link: "https://www.ecosia.org/search?q=chickens",
                    }, {
                        title: "Mochi.cards",
                        body: "A tool for practicing vocabulary sets. Mochi's algorithm employs the idea of spaced repetition, which has been shown to improve recall." ,
                        link: "https://www.ecosia.org/search?q=chickens",
                    }, {
                        title: "vocab application practice",
                        body: "Practice applying vocabulary words by responding to prompts, in writing or verbally -- up to you.",
                        link: "https://www.ecosia.org/search?q=chickens",
                    }
                ]
            }, {
                title: 'grammar',
                body: [
                    {
                        title: 'Hindi: An Essential Grammar',
                        body: "Rama Kant Agnihotri, 2009", 
                        link: "https://www.ecosia.org/search?q=chickens",
                    }
                ]
            }, {
                title: 'reading comprehension',
                body: []
            }, {
                title: 'listening comprehension',
                body: []
            }, {
                title: 'conversations practice',
                body: []
            }, {
                title: 'movies & music',
                body: []
            }
        ];
        setResources(resourcesList);
    }

    const cardContent = {
        title: 'Resources',
        subtitle: '',
        body: resources,
        type: 'resources'
    }

    console.log('card content: ', {cardContent});


    return (
        <section className="resources">
            <Card type="resources" content={ cardContent }/>
        </section>
    )
}

export default Resources;
