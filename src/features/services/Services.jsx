import React from 'react'
import ServiceCard from './components/ServiceCard';
import SectionHeader from '@/components/common/SectionHeader';

const Services = ({ data }) => {
    return (
        <div className='md:py-16 py-10'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='grid grid-cols-1 lg:grid-cols-2 pt-14 gap-8'>
                {
                    data?.services_card?.map((item, index) => (
                        <ServiceCard item={item} key={index} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;
