import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import Timeline from './components/Timeline';

const OurJourney = ({ data }) => {
    return (
        <div className='md:pb-16 pb-10'>
            <SectionHeader title={data?.title} description={data?.description} />
            <Timeline data={data} />
        </div>
    );
};

export default OurJourney;
