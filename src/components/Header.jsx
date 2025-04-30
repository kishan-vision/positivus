"use client";

import React, { useEffect, useState } from 'react'
import Button from './common/Button';
import Link from 'next/link';
import Logo from './Logo';
import { fetchEntries } from '@/services/homepage';
import { toast } from 'react-toastify';
import { AlignJustify, Home } from 'lucide-react';
import SidebarButton from './SidebarButton';
import Sidebar from './Sidebar';

const Header = () => {
    const [headerData, setHeaderData] = useState([]);
    const [sidebarOpen, setSidebarOpen] = useState(false);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const data = await fetchEntries('home_page'); // 'blog_posts' is content type UID
            setHeaderData(data);
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <header className='bg-white mx-auto px-6 z-50 fixed top-0 w-full'>
            <nav className="flex items-center justify-between py-4 w-full max-w-[1440px] mx-auto">
                <Logo logo={headerData[0]?.sections[0]?.header?.logo?.url} />
                <div className='items-center gap-8 hidden lg:flex'>
                    <ul className="flex space-x-9">
                        {headerData[0]?.sections[0]?.header?.menus?.map(link => (
                            <li key={link.link} className='text-lg'>
                                <Link href={link.link} className="hover:text-slate-500">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    {
                        headerData[0]?.sections[0]?.header?.button_name && (
                            <Button
                                name={headerData[0]?.sections[0]?.header?.button_name}
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
                {/* <Button name={} className='border-0' /> */}
            </nav>
            {/* Mobile Sidebar */}
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                menuItems={headerData[0]?.sections[0]?.header}
            />
        </header>
    )
}

export default Header;
