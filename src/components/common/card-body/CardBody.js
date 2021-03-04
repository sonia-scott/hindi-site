import React from 'react'
import UnitMenu from '../../unit-menu/UnitMenu';
import ResourceMenuCard from '../../resource-menu-card/ResourceMenuCard';

function CardBody({ type, body }) {
    console.log(body);
    return (
        <section className="card-body">
            {type=="all-lessons" 
                && body.map((unit, id) => (
                    <UnitMenu key={id} unit={unit} />
                ))
            }
            { type=="resources" && 
                body.map((resource, id) => (
                    <ResourceMenuCard key={id} resource={resource}/>
                ))
            }
        </section>
    )
}

export default CardBody
