import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'

const LetCreateSuccessStory = ({ data }) => {
    return (
        <div className='lg:mt-8 lg:mb-14 bg-[#B9FF66] p-10 pb-0 rounded-4xl grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <div className='flex flex-col lg:gap-8 gap-4'>
                <Title level={5}>{data?.title}</Title>
                <Paragraph className='w-full max-w-96'>{data?.description}</Paragraph>
                {
                    data?.button_name && <Button
                        name={data?.button_name}
                        type='button'
                        className='cursor-pointer py-3 px-14 rounded-xl bg-black border-black text-white hover:bg-white hover:text-black transition duration-300'
                    />
                }
            </div>
            <div className='flex justify-center items-center'>
                <Image
                    src={data?.image?.url}
                    alt='Success Story Image'
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
};

export default LetCreateSuccessStory;
