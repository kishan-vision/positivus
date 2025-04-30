"use client";

import React, { Fragment, useEffect, useState } from 'react';
import CompanyBanner from '@/components/CompanyBanner'
import HeroSection from '@/components/HeroSection'
import { fetchEntries } from '@/services/homepage';
import { Loader2 } from 'lucide-react';
import Services from '@/features/services/Services';
import LetMake from '@/features/letmakesection/LetMake';
import CaseStudies from '@/features/caseStudies/CaseStudies';
import OurWorkingProcess from '@/features/ourWorkingProcess/OurWorkingProcess';
import TeamSection from '@/features/teams/Team';
import Testimonials from '@/features/testimonials/Testimonials';
import ContactUs from '@/features/contactus/ContactUs';
import Footer from '@/features/footer/Footer';

const Home = () => {
    const [homepageData, setHomepageData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const data = await fetchEntries('home_page'); // 'blog_posts' is content type UID
            setHomepageData(data);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            toast.error(error.message)
        }
    };

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    <Fragment>
                        <HeroSection data={homepageData[0]?.sections[1]?.hero_section} />
                        <CompanyBanner data={homepageData[0]?.sections[2]?.company_banners} />
                        <Services data={homepageData[0]?.sections[3]?.services} />
                        <LetMake data={homepageData[0]?.sections[4]?.let_make} />
                        <CaseStudies data={homepageData[0]?.sections[5]?.case_studies} />
                        <OurWorkingProcess data={homepageData[0]?.sections[6]?.our_working_process} />
                        <TeamSection data={homepageData[0]?.sections[7]?.team} />
                        <Testimonials data={homepageData[0]?.sections[8]?.testimonials} />
                        <ContactUs data={homepageData[0]?.sections[9]?.contact_us} />
                        <Footer data={homepageData[0]?.sections[10]?.footer} />
                    </Fragment>
            }
        </Fragment>
    )
}

export default Home