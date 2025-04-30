import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import Image from 'next/image';
import React from 'react'

const LetMake = ({ data }) => {
    return (
        <div className='bg-[#F3F3F3] my-8 grid grid-cols-1 lg:grid-cols-2 rounded-4xl'>
            <div className='flex flex-col p-16'>
                <Title level={5}>{data?.title}</Title>
                <Paragraph className='pt-3'>
                    Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
                </Paragraph>
                {
                    <div className='pt-6'>
                        {
                            data?.get_your_free_proposal_button?.title &&
                            <Button
                                name={data?.get_your_free_proposal_button?.title}
                                type='button'
                                className={'cursor-pointer py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'}
                            />
                        }
                    </div>
                }
            </div>
            <div className='lg:flex justify-end hidden'>
                <Image
                    src={data?.section_image?.url}
                    alt='let make image'
                    width={400}
                    height={300}
                />
            </div>
        </div>
    );
};

export default LetMake;
