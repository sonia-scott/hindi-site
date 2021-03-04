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
                title: 'vocabulary'
            }, {
                title: 'grammar'
            }, {
                title: 'reading comprehension'
            }, {
                title: 'listening comprehension'
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


    console.log("resources props: ", props);
    return (
        <section className="resources">
            <Card type="resources" content={ cardContent }/>
        </section>
    )
}

export default Resources;
