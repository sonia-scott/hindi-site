import React from 'react'

function SectionHeader({ title, subtitle}) {
    return (
        <>
            <section className="section-header">
                <h2 className="section-title">{title}</h2>
                <h4 className="section-subtitle">{ subtitle }</h4>
            </section>
            <hr className="divider"/>
        </>
    )
}

export default SectionHeader
