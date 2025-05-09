import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader'
import Title from '@/components/common/Title';
import React from 'react'

const OurImpact = ({ data }) => {

    return (
        <div className='md:py-16 py-10'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className="py-12 bg-gray-50">
                <div className="">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center">
                        {data?.states.map((stat, index) => (
                            <div
                                key={index}
                                className={`
              bg-white p-6 px-10 border-t border-black
              rounded-tr-3xl rounded-tl-3xl
              ${index !== 0 ? '' : 'lg:rounded-tl-none'}
              ${index === 0 ? 'rounded-tl-3xl' : ''}
              ${index !== data?.states?.length - 1 ? '' : 'lg:rounded-tr-none'}
              ${index === data?.states?.length - 1 ? 'rounded-tr-3xl' : ''}
            `}
                            >
                                <Title level={4} className="text-3xl font-bold text-gray-900">{stat.number}</Title>
                                <Paragraph className="mt-2">{stat.description}</Paragraph>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurImpact