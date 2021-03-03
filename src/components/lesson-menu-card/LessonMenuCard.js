import React from 'react';
import { Link } from 'react-router-dom';

function LessonMenuCard ({ title, path, unit }) {
    return (
        <Link to={ path } className="lesson-menu-card">
            { title }
        </Link>

    )
}

export default LessonMenuCard;
