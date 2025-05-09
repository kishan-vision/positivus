"use client";

import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPricingPageData } from '@/redux/slices/page';
import { Loader2 } from 'lucide-react';
import Plan from '@/features/pricingPlan/Plan';
import OurWorkingProcess from '@/features/ourWorkingProcess/OurWorkingProcess';

const Pricing = () => {
    const dispatch = useDispatch();
    const { pricingpageData, loading } = useSelector((state) => state.page);

    useEffect(() => {
        dispatch(getPricingPageData());
    }, [])

    return (
        <Fragment>
            {
                loading ?
                    <div className="flex justify-center items-center h-screen w-full">
                        <Loader2 size={50} className="animate-spin" />
                    </div>
                    :
                    pricingpageData?.length !== 0 ?
                        <Fragment>
                            <Plan data={pricingpageData[0]?.sections[0]?.pricing} />
                            <OurWorkingProcess data={pricingpageData[0]?.sections[1]?.faq} isShowNumber={false} />
                        </Fragment>
                        :
                        "No Data Found"
            }
        </Fragment>
    );
};

export default Pricing;
