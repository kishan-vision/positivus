import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import Logo from '@/components/Logo';
import Link from 'next/link';
import React from 'react'

const Footer = ({ data }) => {
    return (
        <div className='mt-10 bg-[#191A23] rounded-t-[2rem] lg:px-12 p-6 py-12 text-white'>
            <div className='flex md:justify-between lg:flex-row flex-col justify-center'>
                <Logo logo={data?.logo?.url} />
                <div className='flex items-center justify-center gap-8 mt-4 lg:mt-0'>
                    <ul className="flex flex-col lg:flex-row space-x-9 m-0">
                        {data?.menus?.map((link, index) => (
                            <li key={index} className='text-lg text-center lg:text-start lg:me-9 me-0 mb-4 lg:mb-0'>
                                <Link href={link.url} className="hover:text-[#B9FF66]">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='lg:flex hidden items-center gap-4'>
                    {
                        data?.social_icons?.map((icon, index) => (
                            <span key={index} className='bg-white p-3 rounded-full cursor-pointer'>
                                <img src={icon?.icon?.url} alt={'Social Icon'} />
                            </span>
                        ))
                    }
                </div>
            </div>
            <div className='lg:pt-16 pt-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 pb-10 gap-6 border-b border-white'>
                    <div className='flex justify-center items-center lg:items-start lg:justify-start flex-col gap-6'>
                        <div>
                            <Title level={6} className='bg-[#B9FF66] text-black inline-block p-1 rounded-lg'>{data?.title}</Title>
                        </div>
                        <Paragraph>Email: <a href={`mailto:${data?.email}`}>{data?.email}</a></Paragraph>
                        <Paragraph>Phone: <a href={`tel:${data?.phone}`}>{data?.phone}</a></Paragraph>
                        <Paragraph className='text-center lg:text-start'>Address: {data?.address}</Paragraph>
                    </div>
                    <div className='bg-[#292A32] rounded-md px-8 py-10 flex flex-col md:flex-row items-center gap-6'>
                        <div className='md:w-1/2 w-full'>
                            <input type={data?.form?.type} name={data?.form?.name} placeholder='Email' className='border w-full border-white focus:outline-0 px-4 py-4 rounded-lg' />
                        </div>
                        <div className='md:w-1/2 w-full'>
                            {
                                data?.form?.button_name &&
                                <Button
                                    name={data?.form?.button_name}
                                    type='button'
                                    className={'w-full cursor-pointer py-4 rounded-xl bg-[#B9FF66] text-black hover:bg-white hover:text-black transition duration-300'}
                                />
                            }
                        </div>
                    </div>
                    <div className='lg:hidden flex items-center justify-center gap-4'>
                        {
                            data?.social_icons?.map((icon, index) => (
                                <span key={index} className='bg-white p-3 rounded-full cursor-pointer'>
                                    <img src={icon?.icon?.url} alt={'Social Icon'} />
                                </span>
                            ))
                        }
                    </div>
                </div>
                <div className='pt-8'>
                    <div className='flex flex-col md:flex-row items-center md:items-start gap-7'>
                        <Paragraph>{data?.description}</Paragraph>
                        {
                            data?.pages?.map((page, index) => (
                                <Link key={index} href={page?.link?.href} className='underline'>{page?.link?.title}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
