import React from 'react'
import UnitMenu from '../../unit-menu/UnitMenu';
import ResourceMenuCard from '../../resource-menu-card/ResourceMenuCard';

function CardBody({ type, body, alignment }) {
    console.log("CARD BODY ALIGNMENT: ", alignment);
    return (
        <section className={ "card-body " + alignment }>
            {type=="all-lessons" 
                && body.map((unit, id) => (
                    <UnitMenu key={id} unit={unit} />
                ))
            }
            { type=="resources" && 
                body.map((resource, id) => (
                    <ResourceMenuCard key={id} resourceList={ resource }/>
                ))
            }
        </section>
    )
}

export default CardBody
