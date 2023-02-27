import React from 'react';

const Title = ({element, className}) => {
    const { content } = element;
    const Heading = element.titleType;
    return <Heading className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Title;