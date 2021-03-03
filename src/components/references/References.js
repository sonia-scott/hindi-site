import React from 'react'
import SmallSectionHeader from '../common/small-section-header/SmallSectionHeader';

function References({ refs }) {

    return (
        <section className="references-section">
            <SmallSectionHeader title="References"/>
            <div className="references">
                {
                    refs.map((ref, id) => (
                        <div key={id} className="reference">
                            <span className="ref id">{id+1}.</span>
                            <span className="ref author">{ref.author},</span>
                            <span className="ref source">{ref.source}</span>
                            <span className="ref date">({ref.date})</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default References;
