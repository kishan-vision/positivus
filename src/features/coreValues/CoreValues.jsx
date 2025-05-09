import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'

const CoreValues = ({ data }) => {
    return (
        <div className='md:py-16 pt-0'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='pt-12 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                {
                    data?.values?.map((item, index) => (
                        <div key={index} className='border shadow-[0_5px_0_0_#191A23] p-8 rounded-4xl'>
                            <div className={`grid ${item?.image ? 'md:grid-cols-2 grid-cols-1' : ''}`}>
                                <div className='flex flex-col'>
                                    <Title level={4} className='border-b border-black pb-6'>{item?.title}</Title>
                                    <Paragraph className='text-lg pt-4'>{item?.description}</Paragraph>
                                </div>
                                {
                                    item?.image &&
                                    <div className='flex justify-center'>
                                        <Image
                                            src={item?.image?.url}
                                            alt='Core Values'
                                            width={200}
                                            height={200}
                                        />
                                    </div>
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default CoreValues;