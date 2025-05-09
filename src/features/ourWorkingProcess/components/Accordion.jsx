import Paragraph from '@/components/common/Paragraph';
import Title from '@/components/common/Title';
import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { useState } from 'react';

export default function Accordion({ items, isShowNumber = true }) {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="w-full space-y-4">
            {items.map((item, index) => (
                <div
                    key={item._metadata.uid}
                    className={`border rounded-3xl shadow-[0_5px_0_0_#191A23] transition-shadow md:px-10  px-4 cursor-pointer ${activeIndex === index ? 'bg-[#B9FF66]' : 'bg-white'} `}
                >
                    <button
                        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                        className="flex justify-between items-center w-full py-8 cursor-pointer rounded-3xl"
                    >
                        <div className="flex md:items-center items-start space-x-4">
                            {
                                isShowNumber &&
                                <span className="md:text-6xl text-4xl font-bold">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            }
                            <Title level={3} className='!mb-0 md:text-2xl'>{item.title}</Title>
                        </div>
                        <div>
                            {
                                activeIndex === index ? (
                                    <span className='border bg-white transform transition-transform duration-300 rounded-full md:size-14 size-10 p-2 md:p-0 flex items-center justify-center'>
                                        <MinusIcon />
                                    </span>
                                )
                                    :
                                    (
                                        <span className='border bg-white transform transition-transform duration-300 rounded-full md:size-14 size-10 p-2 md:p-0 flex items-center justify-center'>
                                            <PlusIcon />
                                        </span>
                                    )
                            }
                        </div>
                        {/* <ChevronDownIcon
                            className={`w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''
                                }`}
                        /> */}
                    </button>
                    <div
                        className={`grid transition-all border-t border-t-black duration-300 ease-in-out overflow-hidden ${activeIndex === index
                            ? 'grid-rows-[1fr] opacity-100 py-6'
                            : 'grid-rows-[0fr] opacity-0'
                            }`}
                    >
                        <div className="overflow-hidden">
                            <Paragraph>{item.description}</Paragraph>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}