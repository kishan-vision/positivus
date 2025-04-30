import React from 'react';

const CompanyBanner = ({ data }) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
            {data?.group?.map((banner, index) => (
                <div key={index} className="w-fit h-fit cursor-pointer">
                    <img
                        src={banner?.banner?.url}
                        alt="company logo"
                        className="w-auto h-auto filter grayscale hover:filter-none transform hover:scale-105 transition-all duration-300"
                    />
                </div>

            ))}
        </div>
    )
}

export default CompanyBanner;
