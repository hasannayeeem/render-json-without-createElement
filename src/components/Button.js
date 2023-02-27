import React from 'react';

const Button = ({element, className}) => {
    return <button className={className}dangerouslySetInnerHTML={{__html: element.content}} />
};

export default Button;