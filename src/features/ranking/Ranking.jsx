import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'

const Ranking = ({ data }) => {
    return (
        <div className='lg:mb-14 mb-8 border shadow-[0_5px_0_0_#191A23] rounded-4xl md:p-10 p-6'>
            <div className='grid lg:grid-cols-2 grid-cols-1 gap-8'>
                <div className='flex flex-col gap-6'>
                    <Title level={4} className='!pb-8 border-b border-black'>{data?.title}</Title>
                    <Paragraph>{data?.description}</Paragraph>
                    <Paragraph className='pb-3'><b>{data?.sub_content}</b></Paragraph>
                    {
                        data?.button_name &&
                        <Button
                            name={data?.button_name}
                            type='button'
                            className={'cursor-pointer lg:block hidden py-3 rounded-xl border-[#B9FF66] hover:border-black bg-[#B9FF66] text-black hover:bg-white transition duration-300'}
                        />
                    }
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <Image
                        src={data?.image?.url}
                        alt='Ranking Image'
                        width={400}
                        height={400}
                    />
                    {
                        data?.button_name &&
                        <Button
                            name={data?.button_name}
                            type='button'
                            className={'cursor-pointer w-full lg:hidden block py-3 rounded-xl border-[#B9FF66] hover:border-black bg-[#B9FF66] text-black hover:bg-white transition duration-300'}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default Ranking;