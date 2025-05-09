"use client";

import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { getUseCasesPageData } from '@/redux/slices/page';
import { Loader2 } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import FeaturedSuccessStory from '@/features/featuredSuccessStory/FeaturedSuccessStory';
import SuccessStories from '@/features/successStories/SuccessStories';
import Testimonials from '@/features/testimonials/Testimonials';
import LetCreateSuccessStory from '@/features/letCreateSuccessStory/LetCreateSuccessStory';

const UseCases = () => {
    const dispatch = useDispatch();
    const { usecasespageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getUseCasesPageData());
    }, [])

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    usecasespageData?.length !== 0 ?
                        <Fragment>
                            <HeroSection data={usecasespageData[0]?.sections[0]?.hero_section} />
                            <FeaturedSuccessStory data={usecasespageData[0]?.sections[1]?.featured} />
                            <SuccessStories data={usecasespageData[0]?.sections[2]?.success_story} />
                            <Testimonials data={usecasespageData[0]?.sections[3]?.testimonials} />
                            <LetCreateSuccessStory data={usecasespageData[0]?.sections[4]?.let_s_create_success_story} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    )
}

export default UseCases;
