"use client";

import React, { Fragment } from 'react';
import CompanyBanner from '@/components/CompanyBanner'
import HeroSection from '@/components/HeroSection'
import { Loader2 } from 'lucide-react';
import Services from '@/features/services/Services';
import LetMake from '@/features/letmakesection/LetMake';
import CaseStudies from '@/features/caseStudies/CaseStudies';
import OurWorkingProcess from '@/features/ourWorkingProcess/OurWorkingProcess';
import TeamSection from '@/features/teams/Team';
import Testimonials from '@/features/testimonials/Testimonials';
import ContactUs from '@/features/contactus/ContactUs';
import { useSelector } from 'react-redux';

const Home = () => {
    const { homepageData, loading } = useSelector((state) => state.page);

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    homepageData?.length !== 0 ?
                        <Fragment>
                            <HeroSection data={homepageData[0]?.sections[1]?.hero_section} type={'homepage'} />
                            <CompanyBanner data={homepageData[0]?.sections[2]?.company_banners} />
                            <Services data={homepageData[0]?.sections[3]?.services} />
                            <LetMake data={homepageData[0]?.sections[4]?.let_make} />
                            <CaseStudies data={homepageData[0]?.sections[5]?.case_studies} />
                            <OurWorkingProcess data={homepageData[0]?.sections[6]?.our_working_process} />
                            <TeamSection data={homepageData[0]?.sections[7]?.team} />
                            <Testimonials data={homepageData[0]?.sections[8]?.testimonials} />
                            <ContactUs data={homepageData[0]?.sections[9]?.contact_us} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    )
}

export default Home