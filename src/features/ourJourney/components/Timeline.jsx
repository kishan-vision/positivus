import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import StartIcon from '@/components/icons/StartIcon';
import React from 'react';

const Timeline = ({ data }) => {

    return (
        <div className="pt-14 py-8">
            <div className="relative">
                {/* Timeline line */}
                {/* <div className="absolute left-1/2 w-0.5 h-full bg-gray-200 transform -translate-x-1/2"></div> */}
                {data?.card?.map((event, index) => (
                    <div key={index} className={`relative md:mb-8  mb-4 flex flex-col md:flex-row md:gap-8 gap-3 ${event?.align?.toLowerCase() === 'left' ? 'justify-start' : 'justify-end'}`}>
                        <div className='flex gap-4 items-center'>
                            <span className='md:hidden'><StartIcon width={30} height={30} /></span>
                            <Title level={2} className="font-bold pt-3">{event?.year}</Title>
                        </div>

                        <div className={`w-full md:w-1/2 md:p-10 p-6 flex gap-8 rounded-4xl bg-[#191A23] text-white`}>
                            <StartIcon width={30} height={30} />
                            <div className='flex flex-col'>
                                <Title level={4} className="text-xl font-bold">{event?.title}</Title>
                                <Paragraph className="text-white w-full max-w-80 pt-3">{event?.description}</Paragraph>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Timeline;