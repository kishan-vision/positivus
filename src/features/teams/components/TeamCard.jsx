import Paragraph from '@/components/common/Paragraph'
import Title from '@/components/common/Title'
import Image from 'next/image'
import React from 'react'

const TeamCard = ({ item }) => {
  return (
    <div className="bg-white rounded-3xl relative p-8 border shadow-[0_5px_0_0_#191A23]">
      <div className="flex items-end gap-6 mb-6">
        <div>
          <Image
            src={item?.member_image?.url}
            alt={item?.name}
            width={104}
            height={104}
          />
        </div>
        <div className="bg-black rounded-full flex items-center justify-center w-8 h-8 absolute top-8 right-8">
          <img src={item?.icon?.url} alt="Linkedin Icon" />
        </div>
        <div className="mt-4">
          <Title level={5} className="text-xl font-bold !mb-0">{item?.name}</Title>
          <Paragraph className='text-lg'>{item?.designation}</Paragraph>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-black">
        <Paragraph className='text-lg'>{item?.description}</Paragraph>
      </div>
    </div>
  )
}

export default TeamCard