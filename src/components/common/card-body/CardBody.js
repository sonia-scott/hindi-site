import React from 'react'
import UnitMenu from '../../unit-menu/UnitMenu';

function CardBody({ type, body }) {
    console.log(body);
    return (
        <section className="card-body">
            {type=="all-lessons" 
                ? body.map((unit, id) => (
                    <UnitMenu key={id} unit={unit} />
                ))
                : <p>{ body} </p>
            }
        </section>
    )
}

export default CardBody
