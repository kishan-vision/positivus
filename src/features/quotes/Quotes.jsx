import Paragraph from '@/components/common/Paragraph';
import Image from 'next/image';
import React from 'react'

const Quotes = ({ data }) => {
    return (
        <div className='lg:py-16 rounded-4xl lg:my-0 my-10 py-10 bg-[#191A23] p-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                <div className='flex justify-center lg:order-1 order-2'>
                    <Image
                        src={data?.image?.url}
                        alt='Star Image'
                        width={400}
                        height={300}
                    />
                </div>
                <div className='flex flex-col gap-6 lg:order-2 order-1'>
                    <Paragraph className='lg:!text-5xl !text-2xl text-white'>{data?.title}</Paragraph>
                    <Paragraph className='!text-2xl text-white md:block hidden'>—  {data?.author}</Paragraph>
                </div>
            </div>
        </div>
    );
};

export default Quotes;
