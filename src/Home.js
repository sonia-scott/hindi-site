import React from 'react';
import { useRouteMatch } from 'react-router-dom';

function Home () {
    const {
        params: { page }
    } = useRouteMatch();

    return (
        <div>
            A beginner's* guide to learning Hindi.
        </div>
    )
}

export default Home;
