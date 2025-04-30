import React from 'react';
import TestimonialCarousel from './components/TestimonialCarousel';
import SectionHeader from '@/components/common/SectionHeader';

const Testimonials = ({ data }) => {
    return (
        <div className='py-12'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className="mt-14 bg-[#191A23] py-14 rounded-3xl">
                <TestimonialCarousel testimonials={data?.content} />
            </div>
        </div>
    );
};

export default Testimonials;
