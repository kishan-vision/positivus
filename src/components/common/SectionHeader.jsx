import React from 'react'
import Title from './Title'
import Paragraph from './Paragraph'

const SectionHeader = ({ title, description }) => {
    return (
        <div className='flex items-center lg:flex-row flex-col lg:gap-10 gap-6'>
            <Title level={2} className='bg-[#B9FF66] inline-block px-2 !mb-0'>{title}</Title>
            <Paragraph className='text-lg mb-0 w-full max-w-[580px] text-center lg:text-left'>
                {description}
            </Paragraph>
        </div>
    );
};

export default SectionHeader;
