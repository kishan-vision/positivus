"use client";

import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getBlogPageData } from '@/redux/slices/page';
import HeroSection from '@/components/HeroSection';
import { Loader2 } from 'lucide-react';
import BlogDetails from '@/features/blogDetails/BlogDetails';
import SuccessStories from '@/features/successStories/SuccessStories';

const Blog = () => {
    const dispatch = useDispatch();
    const { blogpageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getBlogPageData());
    }, [])

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    blogpageData?.length !== 0 ?
                        <Fragment>
                            <HeroSection data={blogpageData[0]?.sections[0]?.hero_section} />
                            <BlogDetails data={blogpageData[0]?.sections[1]?.blog_details} />
                            <SuccessStories data={blogpageData[0]?.sections[2]?.explore_more} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    );
};

export default Blog;
