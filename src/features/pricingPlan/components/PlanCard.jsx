import Button from '@/components/common/Button';
import Title from '@/components/common/Title';
import { Check } from 'lucide-react';
import React from 'react'

const PlanCard = ({ plan }) => {
    return (
        <div className={`border rounded-4xl xl:p-10 p-6 ${plan?.card_color} shadow-[0_5px_0_0_#191A23]`}>
            <div className='flex justify-between items-center'>
                <Title level={5} className={`${plan?.plan_name === 'Pro Plan' ? 'text-white' : 'text-black'}`}>
                    {plan?.plan_name}
                </Title>
                {plan?.ispopular && <span className='bg-[#B9FF66] px-4 py-1 rounded-2xl'>Popular</span>}
            </div>
            <Title level={2} className={`${plan?.plan_name === 'Pro Plan' ? 'text-white' : 'text-black'}`}>
                <span>
                    {plan?.price}
                </span>
                <span className='text-lg ps-2'>
                    /{plan?.type}
                </span>
            </Title>
            <div className='py-7 flex flex-col gap-4'>
                {plan?.plan_start_button_name && (
                    <Button
                        name={plan?.plan_start_button_name}
                        type='button'
                        className={`w-full cursor-pointer py-4 px-14 rounded-xl ${plan?.plan_start_button_color} ${plan?.plan_name === 'Pro Plan' ? 'text-black' : 'text-white'} hover:bg-white hover:text-black transition duration-300`}
                    />
                )}
                {plan?.request_button_name && (
                    <Button
                        name={plan?.request_button_name}
                        type='button'
                        className={`w-full cursor-pointer py-4 px-14 rounded-xl border text-black ${plan?.plan_name === 'Pro Plan' ? 'border-white text-white' : ''}  hover:bg-white hover:text-black transition duration-300`}
                    />
                )}
            </div>
            <div className={`border-t-2 pt-8 ${plan?.plan_name === 'Pro Plan' ? 'border-white' : 'border-black'}`}>
                <ul>
                    {
                        plan?.plan_details?.map((item) => (
                            <li key={item?._metadata?.uid} className={`flex mb-4 ${plan?.plan_name === 'Pro Plan' ? 'text-white' : 'text-black'} items-center gap-4`}>
                                <span className='bg-[#B9FF66] p-1 rounded-full inline-block'><Check color='#000' size={20} /></span>
                                {item?.detail}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default PlanCard;
