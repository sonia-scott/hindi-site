import React from 'react'

function SectionHeader({ title, subtitle}) {
    return (
        <>
            <section className="section-header">
                <h1 className="section-title">{title}</h1>
                <h4 className="section-subtitle">{ subtitle }</h4>
            </section>
            <hr className="divider"/>
        </>
    )
}

export default SectionHeader
