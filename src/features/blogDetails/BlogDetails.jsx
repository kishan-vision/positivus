import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import StartIcon from '@/components/icons/StartIcon';
import Image from 'next/image';
import React, { Fragment } from 'react'

const BlogDetails = ({ data }) => {
    return (
        <div className='lg:py-14 py-10'>
            <div className='flex justify-between items-center border-b border-black pb-7'>
                <div className='flex items-center gap-6'>
                    <Image
                        src={data?.author_image?.url}
                        alt='Author Image'
                        width={60}
                        height={60}
                    />
                    <div>
                        <Title level={6}>{data?.author_name}</Title>
                        <Paragraph>{data?.designation}</Paragraph>
                    </div>
                </div>
                <div>
                    A
                </div>
            </div>
            <div className='w-full max-w-[900px] mx-auto pt-12'>
                <Paragraph className='font-semibold leading-[2] pb-6'>{data?.description}</Paragraph>
                {
                    data?.blog_content?.children?.map((item, index) => {
                        return (
                            <Fragment>
                                {
                                    item?.type === 'h1' &&
                                    <Title level={3} className='!text-3xl pt-5'>{item?.children[0]?.text}</Title>
                                }
                                {
                                    item?.type === 'p' &&
                                    <Paragraph className='py-2'>{item?.children[0]?.text}</Paragraph>
                                }
                                {
                                    item?.type === 'h4' &&
                                    <Paragraph className='border-l-4 mb-6 px-4 border-[#B9FF66] text-xl'>{item?.children[0]?.text}</Paragraph>
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 pt-4'>
                <div class="border shadow-[0_5px_0_0_#191A23] rounded-3xl p-6">
                    <Paragraph>{data?.blog_post_card?.title}</Paragraph>
                    <Title level={6}>{data?.blog_post_card?.sub_title}</Title>
                    <Paragraph>{data?.blog_post_card?.content}</Paragraph>
                </div>
                <div class="bg-[#B9FF66] lg:col-span-2 col-span-1 rounded-3xl p-8">
                    <Title level={6}>{data?.blog_post_card_two?.title}</Title>
                    <Paragraph>{data?.blog_post_card_two?.description}</Paragraph>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8'>
                <div class="lg:col-span-2 col-span-1 flex justify-center flex-col rounded-3xl p-6 bg-[#F3F3F3]">
                    <div className='flex md:flex-row flex-col gap-3'>
                        <Paragraph>{data?.blog_post_card_three?.title}</Paragraph>
                        <Title level={6}>{data?.blog_post_card_three?.sub_title}</Title>
                    </div>
                    <div className='flex md:flex-row flex-col gap-3 pt-3'>
                        <Paragraph>{data?.blog_post_card_three?.title2}</Paragraph>
                        <Title level={6}>{data?.blog_post_card_three?.sub_title2}</Title>
                    </div>
                </div>
                <div className='rounded-3xl p-8 bg-[#191A23] text-white'>
                    <Paragraph>{data?.blog_post_card_four?.title}</Paragraph>
                    <Title level={5} className='pt-3'>{data?.blog_post_card_four?.sub_title},</Title>
                    <Paragraph>{data?.blog_post_card_four?.content}</Paragraph>
                </div>
            </div>
            <div className='w-full max-w-[900px] mx-auto pt-12'>
                {
                    data?.footer_content?.children?.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                {
                                    item?.type === 'h1' && (
                                        item?.children[0]?.text &&
                                        <Title level={3} className='!text-3xl pt-5'>{item?.children[0]?.text}</Title>
                                    )
                                }
                                {
                                    item?.type === 'ul' && (
                                        <ul className='list-disc ps-5'>
                                            {
                                                item?.children?.map((child) => (
                                                    <li>
                                                        {child?.children[0]?.children[0]?.text}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    )
                                }
                                {
                                    item?.type === 'p' &&
                                    <Paragraph className='py-2'>{item?.children[0]?.text}</Paragraph>
                                }
                                {
                                    item?.type === 'h4' &&
                                    <Paragraph className='border-l-4 mb-6 px-4 border-[#B9FF66] text-xl'>{item?.children[0]?.text}</Paragraph>
                                }
                            </Fragment>
                        )
                    })
                }
            </div>
            <div className='flex justify-center items-center pt-4'>
                <StartIcon color='#191A23' />
            </div>
        </div>
    )
}

export default BlogDetails;
