'use client';

import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import Logo from '@/components/Logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux';

const Footer = () => {
    const pathname = usePathname();
    const { homepageData, loading } = useSelector((state) => state.page);
    const data = homepageData[0]?.sections[10]?.footer
    return (
        loading ?
            <footer className='w-full max-w-[1440px] mx-auto mt-10 bg-[#191A23] lg:rounded-t-[2rem] lg:px-12 p-6 py-12'>
                <div className='flex md:justify-between lg:flex-row flex-col justify-center animate-pulse'>
                    {/* Logo Skeleton */}
                    <div className="h-8 w-32 bg-gray-600 rounded-sm animate-pulse"></div>

                    {/* Menu Links Skeleton */}
                    <div className='flex items-center justify-center gap-8 mt-4 lg:mt-0'>
                        <ul className="flex flex-col lg:flex-row space-x-9 m-0">
                            {[...Array(4)].map((_, i) => (
                                <li key={i} className='mb-4 lg:mb-0'>
                                    <div className="h-6 bg-gray-600 rounded-sm w-24 animate-pulse"></div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Icons Skeleton (Desktop) */}
                    <div className='lg:flex hidden items-center gap-4'>
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="h-12 w-12 bg-gray-600 rounded-full animate-pulse"></div>
                        ))}
                    </div>
                </div>

                <div className='lg:pt-16 pt-8'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 pb-10 gap-6 border-b border-gray-600'>
                        {/* Contact Info Skeleton */}
                        <div className='flex flex-col gap-6'>
                            <div className="h-6 bg-gray-600 w-32 rounded-lg animate-pulse"></div>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-5 bg-gray-600 rounded-sm w-48 animate-pulse"></div>
                            ))}
                        </div>

                        {/* Form Section Skeleton */}
                        <div className='bg-[#292A32] rounded-md px-8 py-10 flex flex-col md:flex-row gap-6'>
                            <div className='md:w-1/2 w-full'>
                                <div className="h-12 bg-gray-600 rounded-lg animate-pulse"></div>
                            </div>
                            <div className='md:w-1/2 w-full'>
                                <div className="h-12 bg-gray-600 rounded-xl animate-pulse"></div>
                            </div>
                        </div>

                        {/* Social Icons Skeleton (Mobile) */}
                        <div className='lg:hidden flex items-center justify-center gap-4'>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-12 w-12 bg-gray-600 rounded-full animate-pulse"></div>
                            ))}
                        </div>
                    </div>

                    {/* Bottom Section Skeleton */}
                    <div className='pt-8'>
                        <div className='flex flex-col md:flex-row items-center md:items-start gap-7'>
                            <div className="h-5 bg-gray-600 rounded-sm w-64 animate-pulse"></div>
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className="h-5 bg-gray-600 rounded-sm w-24 animate-pulse"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
            :
            <footer className='w-full max-w-[1440px] mx-auto mt-10 bg-[#191A23] lg:rounded-t-[2rem] lg:px-12 p-6 py-12 text-white'>
                <div className='flex md:justify-between lg:flex-row flex-col justify-center'>
                    <Logo logo={data?.logo?.url} />
                    <div className='flex items-center justify-center gap-8 mt-4 lg:mt-0'>
                        <ul className="flex flex-col lg:flex-row space-x-9 m-0">
                            {data?.menus?.map((link, index) => (
                                <li key={index} className='text-lg text-center lg:text-start lg:me-9 me-0 mb-4 lg:mb-0'>
                                    <Link
                                        href={link.url}
                                        className={`hover:bg-[#B9FF66] hover:text-black p-1 rounded-sm transition duration-300 ${pathname === link.url ? 'bg-[#B9FF66] text-black' : ''
                                            }`}
                                    >
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
            </footer>
    );
};

export default Footer;
