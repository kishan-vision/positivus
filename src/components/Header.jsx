"use client";

import React, { useEffect, useState } from 'react'
import Button from './common/Button';
import Link from 'next/link';
import Logo from './Logo';
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getHomePageData } from '@/redux/slices/page';
import { usePathname } from 'next/navigation';

const Header = () => {
    const pathname = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const dispatch = useDispatch();
    const { homepageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getHomePageData());
    }, [])

    return (
        loading ?
            <header className='bg-white mx-auto px-6 z-50 fixed top-0 w-full'>
                <nav className="flex items-center justify-between py-4 w-full max-w-[1440px] mx-auto">
                    {/* Logo Skeleton */}
                    <div className="h-10 w-60 bg-gray-200 rounded-sm animate-pulse"></div>

                    {/* Desktop Navigation Skeleton - Hidden on mobile */}
                    <div className='items-center gap-8 hidden lg:flex'>
                        <ul className="flex space-x-9">
                            {[...Array(4)].map((_, i) => (
                                <li key={i}>
                                    <div className="h-6 bg-gray-200 rounded-sm w-24 animate-pulse"></div>
                                </li>
                            ))}
                        </ul>
                        {/* Button Skeleton */}
                        <div className="h-12 w-32 bg-gray-200 rounded-xl animate-pulse"></div>
                    </div>

                    {/* Mobile Menu Button Skeleton */}
                    <div className="lg:hidden">
                        <div className="h-8 w-8 bg-gray-200 rounded-sm animate-pulse"></div>
                    </div>
                </nav>
            </header>
            :
            <header className='bg-white mx-auto px-6 z-50 fixed top-0 w-full'>
                <nav className="flex items-center justify-between py-4 w-full max-w-[1440px] mx-auto">
                    <Logo logo={homepageData[0]?.sections[0]?.header?.logo?.url} />
                    <div className='items-center gap-8 hidden lg:flex'>
                        <ul className="flex space-x-9">
                            {homepageData[0]?.sections[0]?.header?.menus?.map(link => (
                                <li key={link.link} className='text-lg'>
                                    <Link
                                        href={link.link}
                                        className={`hover:bg-[#B9FF66] p-1 rounded-sm transition duration-300 ${pathname === link.link ? 'bg-[#B9FF66]' : ''
                                            }`}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        {
                            homepageData[0]?.sections[0]?.header?.button_name && (
                                <Button
                                    name={homepageData[0]?.sections[0]?.header?.button_name}
                                    type='button'
                                    className="cursor-pointer hover:bg-slate-900 py-3 rounded-xl hover:text-white transition duration-300"
                                />
                            )
                        }
                    </div>
                    {/* Mobile menu button - visible only on small devices */}
                    <div className="lg:hidden">
                        <SidebarButton onClick={() => setSidebarOpen(true)} />
                    </div>
                </nav>
                {/* Mobile Sidebar */}
                <Sidebar
                    isOpen={sidebarOpen}
                    setIsOpen={setSidebarOpen}
                    menuItems={homepageData[0]?.sections[0]?.header}
                />
            </header>
    )
}

export default Header;
