import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SideButton({ text, type }) {
    const allLessons = type == "allLessons";
    const prev = type=="previous" || type=="allLessons";
    const next = type=="next";

    return (
        <section className="side-button">
            <FontAwesomeIcon className={ allLessons ? '' : 'hide-chevron'} icon={["fas", "chevron-left"]}/>
            <FontAwesomeIcon className={ prev ? '' : 'hide-chevron'} icon={["fas", "chevron-left"]}/>
            <div className="side-button-text">{text}</div>
            <FontAwesomeIcon className={ next ? '' : 'hide-chevron'} icon={["fas", "chevron-right"]}/>

        </section>
    )
}

export default SideButton;
