import Title from '@/components/common/Title';
import Link from 'next/link';
import React from 'react'

const ServiceCard = ({ item }) => {
    return (
        <div className={`flex flex-col md:flex-row border p-8 border-[#191A23] shadow-[0_5px_0_0_#191A23] rounded-[30px] gap-8 ${item?.card_background_color}`}>
            <div className='flex justify-between flex-col'>
                <Title level={5} className={`text-2xl font-bold ${item?.title_background_color} px-3 py-2`}>{item?.title}</Title>
                <Link href={item?.learn_more_button?.href} className={`md:flex hidden items-center gap-4 text-lg cursor-pointer ${item?.card_background_color === 'bg-[#191A23]' ? 'text-white' : 'text-[#191A23]'}`}>
                    <span className={`${item?.icon_background_color} p-2 rounded-full`}>
                        <img src={item?.learn_more_icon?.url} alt="arrow icon" />
                    </span>
                    {item?.learn_more_button?.title}
                </Link>
            </div>
            <div className='flex md:justify-end justify-center items-center w-full'>
                <img src={item?.card_image?.url} alt={item?.title} />
            </div>
            <Link href={item?.learn_more_button?.href} className={`flex md:hidden items-center gap-4 text-lg cursor-pointer ${item?.card_background_color === 'bg-[#191A23]' ? 'text-white' : 'text-[#191A23]'}`}>
                <span className={`${item?.icon_background_color} p-2 rounded-full`}>
                    <img src={item?.learn_more_icon?.url} alt="arrow icon" />
                </span>
                {item?.learn_more_button?.title}
            </Link>
        </div>
    );
};

export default ServiceCard;
