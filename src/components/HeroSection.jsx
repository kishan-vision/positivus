import React from 'react'
import Button from './common/Button'
import Title from './common/Title'
import Paragraph from './common/Paragraph'
import ImageComponent from './common/ImageComponent'

const HeroSection = ({ data }) => {
    return (
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
                            <img src={data?.hero_image?.url} alt="hero" className='w-full h-full'/>
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
