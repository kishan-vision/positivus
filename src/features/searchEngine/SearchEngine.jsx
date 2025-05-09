"use client";

import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import LeftTopArrowIcon from '@/components/icons/LeftTopArrowIcon';
import StartIcon from '@/components/icons/StartIcon';
import { useRouter } from 'next/navigation';
import React from 'react'

const SearchEngine = ({ data }) => {
    const router = useRouter();

    return (
        <div className='lg:py-12 py-6'>
            <div className='flex gap-5 items-center text-lg lg:pb-10 pb-8'>
                <span className='bg-[#191A23] p-3 rounded-full cursor-pointer' onClick={() => router.back()}>
                    <LeftTopArrowIcon />
                </span>
                Back
            </div>
            <div className='bg-[#191A23] rounded-4xl lg:p-12 p-6 flex lg:flex-row flex-col justify-between text-white gap-8'>
                <div className='flex gap-6 w-full max-w-96'>
                    <StartIcon width={30} height={30} />
                    <div>
                        <Title level={4} className='bg-[#B9FF66] p-1 text-black'>{data?.title}</Title>
                    </div>
                </div>
                <div>
                    <Paragraph className='text-lg lg:ps-0 ps-12'>{data?.description}</Paragraph>
                    {
                        data?.button_name &&
                        <Button
                            name={data?.button_name}
                            type='button'
                            className={'w-full mt-6 cursor-pointer py-3 rounded-xl bg-white text-black hover:bg-[#B9FF66] hover:text-black transition duration-300'}
                        />
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchEngine;
