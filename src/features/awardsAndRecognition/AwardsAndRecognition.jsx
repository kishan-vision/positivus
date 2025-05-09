import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'

const AwardsAndRecognition = ({ data }) => {
    return (
        <div className='md:py-16 py-10'>
            <SectionHeader title={data?.title} description={data?.description} />

            <div className='pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                {
                    data?.awards?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-6 bg-[#F3F3F3] rounded-4xl p-8'>
                            <div className='flex justify-center'>
                                <Image
                                    src={item?.image?.url}
                                    alt='Awards Image'
                                    width={150}
                                    height={150}
                                />
                            </div>
                            <Title level={6}>{item?.title}</Title>
                            <Paragraph>{item?.description}</Paragraph>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AwardsAndRecognition;
