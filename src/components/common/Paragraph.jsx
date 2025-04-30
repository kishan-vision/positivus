import React from 'react';

const Paragraph = ({ children, className = '' }) => {
    return (
        <p className={`text-base leading-relaxe ${className}`}>
            {children}
        </p>
    );
};

export default Paragraph;
