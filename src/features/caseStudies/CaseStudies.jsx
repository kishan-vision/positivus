import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import CaseStudiesCard from './components/CaseStudiesCard';

const CaseStudies = ({ data }) => {
    return (
        <div className='py-12'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='pt-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-[#191A23] md:p-14 p-10 rounded-4xl text-white'>
                    {
                        data?.case_studies_card?.map((item, index) => (
                            <CaseStudiesCard item={item} key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
