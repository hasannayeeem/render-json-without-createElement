import React from 'react';

const Text = ({element, className}) => {
    const { content } = element;
    return <p className={className} dangerouslySetInnerHTML={{__html: content}} />
};

export default Text;