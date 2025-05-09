import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import React from 'react'
import PlanCard from './components/PlanCard';

const Plan = ({ data }) => {
    return (
        <div className='lg:py-12 py-8'>
            <div className='w-full max-w-sm'>
                <Title level={1}>{data?.title}</Title>
                <Paragraph>{data?.description}</Paragraph>
            </div>
            <div className='lg:pt-14 pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data?.plans?.map((item, index) => (
                        <PlanCard key={index} plan={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Plan;
