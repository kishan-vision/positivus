import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import LeftRotateArrow from '@/components/icons/LeftRotateArrow';
import Link from 'next/link';
import React from 'react'

const FeaturedSuccessStory = ({ data }) => {
    return (
        <div className='lg:my-16 my-8 bg-[#191A23] md:p-14 p-8 rounded-4xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='flex flex-col gap-6'>
                    <div>
                        <Title level={4} className='bg-[#B9FF66] inline-block p-1 rounded-sm'>{data?.title}</Title>
                    </div>
                    <Title level={5} className='text-white'>{data?.sub_title}</Title>
                    <Paragraph className='text-white'>{data?.description}</Paragraph>
                    <div className='lg:flex hidden items-center gap-5 pt-8'>
                        <Link href={data?.link?.href} className='inline-block bg-[#B9FF66] p-4 rounded-full'>
                            <LeftRotateArrow color='#191A23' />
                        </Link>
                        <Paragraph className='text-[#B9FF66] text-lg'>{data?.link?.title}</Paragraph>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    {
                        data?.states?.map((item, index) => (
                            <div key={index} className='flex flex-col bg-white justify-center items-center p-6 rounded-3xl'>
                                <Title level={2}>{item?.number}</Title>
                                <Paragraph className='text-lg text-center'>{item?.description}</Paragraph>
                            </div>
                        ))
                    }
                </div>
                <div className='lg:hidden flex items-center gap-5'>
                    <Link href={data?.link?.href} className='inline-block bg-[#B9FF66] p-4 rounded-full'>
                        <LeftRotateArrow color='#191A23' />
                    </Link>
                    <Paragraph className='text-[#B9FF66] text-lg'>{data?.link?.title}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSuccessStory;
