import React from 'react';

const Title = ({ level = 1, children, className = '' }) => {
    const Heading = `h${level}`;

    const defaultClasses = {
        1: 'text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6',
        2: 'text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-5',
        3: 'text-xl sm:text-2xl md:text-2xl font-semibold leading-tight mb-4',
        4: 'text-xl sm:text-2xl md:text-3xl font-semibold leading-tight mb-3',
        5: 'text-lg sm:text-xl md:text-2xl font-semibold leading-tight mb-2',
        6: 'text-base sm:text-lg md:text-xl font-semibold leading-tight mb-1',
    };

    return (
        <Heading className={`${defaultClasses[level]} ${className}`}>
            {children}
        </Heading>
    );
};

export default Title;
