import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const getPage = page => {
    const component = () => require(`./pages/${ page }`).default;

    try {
        return React.createElement(component());
    } catch (err) {
        return React.createElement(() => 404); 
    }
}

const lessonsList = {
    'letters-and-sounds': {
        title: 'Letters & Sounds',
        subtitle: 'Unit 1',
        lesson: 1, 
        body: 'Here is a lesson about Letters & Sounds',
        references: [
            {
                author: 'Sonia Scott',
                source: "Beginner's Hindi",
                date: 2021
            }, {
                author: 'Athena Scott',
                source: "Intermediate Hindi",
                date: 2018
            }, {
                author: 'Omkar M. Koul',
                source: 'Hindi',
                date: 2015
            }
        ]
    }, 
    'basic-nouns': {
        title: 'Basic Nouns',
        subtitle: 'Unit 1',
        lesson: 2,
        body: 'Here is a lesson about Basic Nouns',
        references: [
            {
                author: 'learning-hindi',
                source: "learning-hindi.com",
                date: 2021
            }
        ]
    },
    'vocab-1': {
        title: 'Vocab 1',
        subtitle: 'Unit 1',
        lesson: 3,
        body: 'Here is some vocab',
        references: [
            {
                author: 'learning-hindi',
                source: "learning-hindi.com",
                date: 2021
            }
        ]
    }
};

const getLesson = lesson => {
    console.log('target', lesson);
    console.log('obj', lessonsList[lesson]);
    const component = () => require(`./pages/lesson`).default;
    try {
        return React.createElement(component(), lessonsList[lesson]);
    } catch (err) {
        return React.createElement(() => 404);
    }
}

function PageRenderer() {

    const {
        params: { page, lesson }
    } = useRouteMatch();

    if (page) {
        return getPage(page);
    } else if (lesson) {
        return getLesson(lesson);
    }
  
}

export default PageRenderer;
