import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import Accordion from './components/Accordion';

const OurWorkingProcess = ({ data }) => {
    return (
        <div className='py-12'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='pt-14'>
                <Accordion items={data?.accordion} />
            </div>
        </div>
    );
};

export default OurWorkingProcess;
