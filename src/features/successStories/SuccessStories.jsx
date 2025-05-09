import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader';
import Title from '@/components/common/Title';
import LeftRotateArrow from '@/components/icons/LeftRotateArrow';
import Link from 'next/link';
import React from 'react'

const SuccessStories = ({ data }) => {
    return (
        <div className='md:py-12 py-8'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='mt-10 p-12 lg:grid hidden grid-cols-1 lg:grid-cols-3 md:grid-cols-2 border shadow-[0_5px_0_0_#191A23] rounded-4xl'>
                {
                    data?.stories?.map((item, index) => (
                        <div key={index} className={`${item?.border} border-black py-8 px-8`}>
                            <Title level={5}>{item?.title}</Title>
                            <Paragraph className='pt-4'>{item?.description}</Paragraph>
                            <div className='flex items-center gap-5 pt-8'>
                                <Link href={item?.link?.href} className='inline-block bg-[#B9FF66] p-4 rounded-full'>
                                    <LeftRotateArrow color='#191A23' />
                                </Link>
                                <Paragraph className='text-lg cursor-pointer'>{item?.link?.title}</Paragraph>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 mt-14'>
                {
                    data?.stories?.map((item, index) => (
                        <div key={index} className={`border shadow-[0_5px_0_0_#191A23] border-black py-8 px-8 rounded-4xl`}>
                            <Title level={5}>{item?.title}</Title>
                            <Paragraph className='pt-4'>{item?.description}</Paragraph>
                            <div className='flex items-center gap-5 pt-8'>
                                <Link href={item?.link?.href} className='inline-block bg-[#B9FF66] p-4 rounded-full'>
                                    <LeftRotateArrow color='#191A23' />
                                </Link>
                                <Paragraph className='text-lg cursor-pointer'>{item?.link?.title}</Paragraph>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SuccessStories;
