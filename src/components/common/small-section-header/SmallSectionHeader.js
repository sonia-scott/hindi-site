import React from 'react'

function SmallSectionHeader(props) {
    const title = props.title;
    const unit = props.unit;
    return (
        <div>
            <section className="card-header small">
                <h3 className="card-title">{title}</h3>
            </section>
            <hr className="divider"/>
        </div>
    )
}

export default SmallSectionHeader
