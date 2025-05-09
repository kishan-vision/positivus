import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader';
import Title from '@/components/common/Title';
import StartIcon from '@/components/icons/StartIcon';
import React from 'react'

const HowWeWork = ({ data }) => {
    return (
        <div className='md:py-16 py-10'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='pt-14'>
                {
                    data?.seo_process?.map((item, index) => (
                        <div key={index} className="flex items-start bg-[#F3F3F3] gap-8 mb-6 p-6 rounded-3xl">
                            {/* Black star with number */}
                            <div className="relative">
                                {/* Star icon */}
                                <StartIcon color='#191A23' width={100} height={100} />

                                {/* Number overlay */}
                                <Title level={2} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#B9FF66]">
                                    {String(index + 1).padStart(2, '0')}
                                </Title>
                            </div>

                            {/* Content */}
                            <div>
                                <Title level={3}>{item?.title}</Title>
                                <Paragraph>
                                    {item?.description}
                                </Paragraph>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default HowWeWork;
