'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './TestimonialCard';
import StartIcon from '@/components/icons/StartIcon';
import ArrowLeft from '@/components/icons/ArrowLeft';
import ArrowRight from '@/components/icons/ArrowRight';

const TestimonialCarousel = ({ testimonials }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: 'center',
        skipSnaps: false,
        containScroll: 'trimSnaps',
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState([]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi, setSelectedIndex]);

    const scrollTo = useCallback(
        (index) => emblaApi && emblaApi.scrollTo(index),
        [emblaApi]
    );

    useEffect(() => {
        if (!emblaApi) return;

        onSelect();
        setScrollSnaps(emblaApi.scrollSnapList());
        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        return () => {
            emblaApi.off('select', onSelect);
            emblaApi.off('reInit', onSelect);
        };
    }, [emblaApi, onSelect]);

    return (
        <div className="relative">
            <div
                className="overflow-hidden rounded-lg md:p-8 p-3"
                ref={emblaRef}
            >
                <div className="flex">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial?._metadata?.uid}
                            className="flex-[0_0_100%] min-w-0 pl-4 pr-4 sm:pl-12 sm:pr-12 md:flex-[0_0_70%] lg:flex-[0_0_50%]"
                        >
                            <TestimonialCard
                                quote={testimonial?.description}
                                author={testimonial?.name}
                                position={testimonial?.designation}
                                isActive={testimonial?._metadata?.uid === testimonials[selectedIndex]?._metadata?.uid}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Indicators */}
            <div className="mt-6 flex justify-center items-center space-x-2 pt-8">
                <button
                    className="rounded-full p-2 cursor-pointer text-white backdrop-blur-sm transition-all md:pe-30 pe-10"
                    onClick={scrollPrev}
                    aria-label="Previous testimonial"
                >
                    <ArrowLeft />
                </button>
                {scrollSnaps?.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => scrollTo(index)}
                        className={`
        text-2xl transition-all cursor-pointer duration-300
        ${selectedIndex === index
                                ? 'text-chart-1 scale-125'
                                : 'text-gray-500/50 hover:text-gray-400'}
      `}
                        aria-label={`Go to testimonial ${index + 1}`}
                    >
                        <StartIcon color={selectedIndex === index ? '#B9FF66' : 'white'} />
                    </button>
                ))}
                <button
                    className="rounded-full p-2 cursor-pointer text-white backdrop-blur-sm transition-all md:ps-30 ps-10"
                    onClick={scrollNext}
                    aria-label="Next testimonial"
                >
                    <ArrowRight />
                </button>
            </div>
        </div>
    );
};

export default TestimonialCarousel;