"use client";

import Button from '@/components/common/Button';
import Paragraph from '@/components/common/Paragraph';
import SectionHeader from '@/components/common/SectionHeader';
import React from 'react'
import { useForm } from 'react-hook-form';

const ContactUs = ({ data }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div className='py-12'>
            <SectionHeader title={data?.title} description={data?.description} />
            <div className='rounded-3xl bg-[#F3F3F3] mt-12 md:p-14 p-6 grid grid-cols-1 lg:grid-cols-2 gap-8'>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Form Type Radio Buttons */}
                    <div className="flex gap-4 mb-8">
                        {data.form_type.map((type) => (
                            <label key={type._metadata.uid} className="flex items-center cursor-pointer">
                                <input
                                    type="radio"
                                    value={type.name}
                                    {...register('formType', { required: true })}
                                    className="h-4 w-4 focus:ring-blue-500 cursor-pointer border-black"
                                />
                                <span className="ml-2 text-gray-700">{type.name}</span>
                            </label>
                        ))}
                    </div>

                    {/* Dynamic Form Fields */}
                    {data.form_fields.map((field) => (
                        <div key={field._metadata.uid}>
                            <label className="block text-sm font-mediu mb-1">
                                {field.label}
                                {field.required && <span className="text-red-500">*</span>}
                            </label>

                            {field.type === 'textarea' ? (
                                <textarea
                                    {...register(field.name, {
                                        required: field.required,
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors[field.name] ? 'border-red-500' : 'border-black'
                                        }`}
                                    rows={4}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    {...register(field.name, {
                                        required: field.required,
                                    })}
                                    className={`w-full px-3 py-2 border rounded-md ${errors[field.name] ? 'border-red-500' : 'border-black'
                                        }`}
                                />
                            )}

                            {errors[field.name] && (
                                <Paragraph className="text-red-500 text-sm mt-1">{field?.name?.charAt(0)?.toUpperCase() + field?.name?.slice(1)} is required</Paragraph>
                            )}
                        </div>
                    ))}
                    {data?.submit_button && (
                        <Button
                            name={data?.submit_button}
                            type='submit'
                            className='w-full cursor-pointer py-4 px-14 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'
                        />
                    )}
                </form>
                <div className='lg:flex justify-end hidden'>
                    <div className='w-[300px]'>
                        <img src={data?.image?.url} alt="Contact Us" className="h-full rounded-3xl" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;