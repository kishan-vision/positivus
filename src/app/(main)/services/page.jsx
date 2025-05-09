"use client";

import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import HeroSection from '@/components/HeroSection';
import { getServicePageData } from '@/redux/slices/page';
import { Loader2 } from 'lucide-react';
import SearchEngine from '@/features/searchEngine/SearchEngine';
import HowWeWork from '@/features/howWeWork/HowWeWork';
import CaseStudies from '@/features/caseStudies/CaseStudies';
import Services from '@/features/services/Services';
import Ranking from '@/features/ranking/Ranking';

const ServicesPage = () => {
    const dispatch = useDispatch();
    const { servicepageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getServicePageData());
    }, [])

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    servicepageData?.length !== 0 ?
                        <Fragment>
                            <HeroSection data={servicepageData[0]?.sections[0]?.hero_section} />
                            <SearchEngine data={servicepageData[0]?.sections[1]?.search_engine_optimization} />
                            <HowWeWork data={servicepageData[0]?.sections[2]?.how_we_work} />
                            <CaseStudies data={servicepageData[0]?.sections[3]?.use_cases} />
                            <Services data={servicepageData[0]?.sections[4]?.our_other_services} />
                            <Ranking data={servicepageData[0]?.sections[5]?.ranking} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    );
};

export default ServicesPage;
