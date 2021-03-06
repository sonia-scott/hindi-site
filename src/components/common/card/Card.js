import React from 'react';
import SectionHeader from '../section-header/SectionHeader';
import CardBody from '../card-body/CardBody';
import References from '../../references/References';


function Card({ type, content }) {
    return (
        <div className="card">
            <SectionHeader title={ content.title } subtitle={ content.subtitle }/>
            <CardBody type={ type } body={ content.body} alignment={ type=="resources" ? "center" : "" }/>
            {type=="lesson" &&
                <References refs={ content.references }/>
            }
        </div>
    )
}

export default Card;
