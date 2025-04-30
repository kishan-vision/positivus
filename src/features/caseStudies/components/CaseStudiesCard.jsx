import Paragraph from '@/components/common/Paragraph';
import Link from 'next/link';
import React from 'react'

const CaseStudiesCard = ({ item }) => {
    return (
        <div className='flex flex-col md:border-r-[#FFFFFF] md:border-r-1 pe-7 last:border-r-0'>
            <Paragraph className='text-lg'>
                {item?.description}
            </Paragraph>

            <Link href={item?.link?.href} className='pt-4 flex items-center gap-4 text-lg text-[#B9FF66]'>
                {item?.link?.title}
                <img src={item?.icon?.url} alt="arrow right" />
            </Link>
        </div>
    );
};

export default CaseStudiesCard;
