"use client";

import HeroSection from '@/components/HeroSection';
import AwardsAndRecognition from '@/features/awardsAndRecognition/AwardsAndRecognition';
import CoreValues from '@/features/coreValues/CoreValues';
import JoinOurTeam from '@/features/joinOurTeam/JoinOurTeam';
import OurImpact from '@/features/ourImpact/OurImpact';
import OurJourney from '@/features/ourJourney/OurJourney';
import Quotes from '@/features/quotes/Quotes';
import { getAboutPageData } from '@/redux/slices/page';
import { Loader2 } from 'lucide-react';
import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const AboutUs = () => {
    const dispatch = useDispatch();
    const { aboutpageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getAboutPageData());
    }, [])


    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    aboutpageData?.length !== 0 ?
                        <Fragment>
                            <HeroSection data={aboutpageData[0]?.sections[0]?.hero_section} type="aboutPage" />
                            <OurImpact data={aboutpageData[0]?.sections[1]?.our_impact} />
                            <OurJourney data={aboutpageData[0]?.sections[2]?.our_journey} />
                            <CoreValues data={aboutpageData[0]?.sections[3]?.core_values} />
                            <Quotes data={aboutpageData[0]?.sections[4]?.quotes} />
                            <AwardsAndRecognition data={aboutpageData[0]?.sections[5]?.awards_and_recognition} />
                            <JoinOurTeam data={aboutpageData[0]?.sections[6]?.joinourteam} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    );
};

export default AboutUs;
