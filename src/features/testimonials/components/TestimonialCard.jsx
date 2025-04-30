'use client';

import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import React from 'react';

const TestimonialCard = ({
    quote,
    author,
    position,
    isActive = false,
    className,
}) => {
    return (
        <div
            className={`
        relative flex flex-col
        transition-opacity duration-300
        ${isActive ? 'opacity-100' : 'opacity-70'}
        ${className}
    `}
        >
            <div className="relative">
                <div
                    className={`relative rounded-3xl border-2 border-[#B9FF66] bg-[#1a1a24] md:p-10 p-6 text-lg text-white
                transition-all duration-300
                ${isActive ? 'shadow-[0_0_20px_rgba(185,255,102,0.3)]' : ''}
            `}
                >
                    <Paragraph className="text-base leading-relaxed">{quote}</Paragraph>
                </div>

                {/* Pointer element */}
                <div className="absolute -bottom-3 left-10 w-6 h-6 transform rotate-45 
            border-2 border-[#B9FF66] bg-[#1a1a24] border-t-0 border-l-0">
                </div>
            </div>

            <div className="mt-6 text-white ps-16">
                <Title level={6} className="font-semibold text-[#B9FF66]">{author}</Title>
                <Paragraph className="text-sm text-muted-foreground">{position}</Paragraph>
            </div>
        </div>
    );
};

export default TestimonialCard;