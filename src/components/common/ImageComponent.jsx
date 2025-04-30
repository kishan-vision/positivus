'use client';

import React from 'react';
import Image from 'next/image';

const ImageComponent = ({
    src,
    alt = '',
    width,
    height,
    layout = 'responsive',
    objectFit = 'cover',
    className = '',
    priority = false,
    isFill = false,
    ...props
}) => {
    return (
        <div className={`relative ${className}`}>
            <Image
                src={src}
                alt={alt}
                width={!isFill ? width : undefined}
                height={!isFill ? height : undefined}
                fill={isFill}
                layout={layout}
                objectFit={objectFit}
                priority={priority}
                {...props}
            />
        </div>
    );
};

export default ImageComponent;
