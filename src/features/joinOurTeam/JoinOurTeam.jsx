import Button from '@/components/common/Button'
import Paragraph from '@/components/common/Paragraph'
import Title from '@/components/common/Title'
import Image from 'next/image'
import React from 'react'

const JoinOurTeam = ({ data }) => {
    return (
        <div className='bg-[#B9FF66] border p-10 lg:py-16 rounded-4xl shadow-[0_5px_0_0_#191A23]'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='flex flex-col justify-center md:gap-8 gap-4'>
                    <Title level={4} className='md:pt-8 pt-4 !text-3xl'>{data?.title}</Title>
                    <Paragraph className='text-lg'>{data?.description}</Paragraph>
                    {data?.button_name && (
                        <div>
                            <Button
                                name={data?.button_name}
                                type='button'
                                onClick={() => setShowAll(!showAll)}
                                className='cursor-pointer py-3 px-14 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'
                            />
                        </div>
                    )}
                </div>
                <div className='flex justify-center items-center'>
                    <Image
                        src={data?.image?.url}
                        alt='Team Image'
                        width={400}
                        height={300}
                    />
                </div>
            </div>
        </div>
    )
}

export default JoinOurTeam