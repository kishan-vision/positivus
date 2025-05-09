import React from 'react'
import Button from './common/Button'
import Title from './common/Title'
import Paragraph from './common/Paragraph'

const HeroSection = ({ data, type }) => {
    return (
        type !== 'homepage' ?
            <section className="relative flex flex-col items-center justify-center p-4 py-8 md:p-14 bg-[#F3F3F3] rounded-4xl md:mt-32 mt-20">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className={`w-full lg:mb-0 xl:pe-40 ${data?.isimageleft ? 'order-2' : 'order-1'}`}>
                        {data?.tag && <span className='bg-[#E8E8E8] px-3 py-1 rounded-xl mb-3 lg:inline-block hidden'>{data?.tag}</span>}
                        <Title level={1} className='hidden lg:block'>
                            {data?.title}
                        </Title>
                        <Paragraph className="text-lg">
                            {data?.description}
                        </Paragraph>
                        {
                            data?.book_consultation_btn?.title &&
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    name={data?.book_consultation_btn?.title}
                                    type='button'
                                    className={'cursor-pointer py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'}
                                />
                            </div>
                        }
                    </div>
                    <div className={`w-full relative flex flex-col justify-center items-center ${data?.isimageleft ? 'order-1' : 'order-2'}`}>
                    {data?.tag && <span className='bg-[#E8E8E8] px-3 py-1 rounded-xl mb-3 inline-block text-right lg:hidden'>{data?.tag}</span>}
                        <Title level={1} className='block lg:hidden'>
                            {data?.title}
                        </Title>
                        {
                            data?.hero_image?.url &&
                            <div className='w-full max-w-[400px]'>
                                <img src={data?.hero_image?.url} alt="hero" className='w-full h-full' />
                            </div>
                        }
                    </div>
                </div>
            </section>
            :
            <section className="relative flex flex-col items-center justify-center pt-20 mt-10 pb-16">
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className={`w-full mb-12 lg:mb-0 xl:pe-40 ${data?.isimageleft ? 'order-2' : 'order-1'}`}>
                        <Title level={1}>
                            {data?.title}
                        </Title>
                        <Paragraph className="text-lg mb-8">
                            {data?.description}
                        </Paragraph>
                        <div className="flex flex-col sm:flex-row gap-4">
                            {
                                data?.book_consultation_btn?.title &&
                                <Button
                                    name={data?.book_consultation_btn?.title}
                                    type='button'
                                    className={'cursor-pointer py-3 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'}
                                />
                            }
                        </div>
                    </div>
                    <div className={`w-full relative flex justify-center ${data?.isimageleft ? 'order-1' : 'order-2'}`}>
                        {
                            data?.hero_image?.url &&
                            <div>
                                <img src={data?.hero_image?.url} alt="hero" className='w-full h-full' />
                            </div>
                        }
                    </div>
                </div>
            </section>
    )
}

export default HeroSection;
