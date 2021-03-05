import React, { useState } from 'react'
import Arrow from '../../images/bent_arrow.png';

function ResourceMenuCard( { resourceList }  ) {
    console.log( {resourceList} );

    const [showResource, setShowResource] = useState(false);

    const onClick = () => setShowResource(!showResource);

    return (
        <section className="resource-section">
            <h4 onClick={onClick} className={`resource-section-title ${ showResource ? "open" : ""}`}>{ resourceList.title }</h4>
            {   
                showResource ? 
                    resourceList.body.map((resource, id) => (
                        <div className="resource">
                            <a className="resource-title" href={ resource.link } target="_blank">{ resource.title }</a>
                            <div className="resource-description">
                                <img className="arrow-img" src={Arrow} alt="arrow"/>
                                <p className="descr-text">{ resource.body }</p>
                            </div>
                        </div>
                    ))
                : null
            }

        </section>
    )
}

export default ResourceMenuCard
