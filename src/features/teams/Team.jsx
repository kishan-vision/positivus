"use client";

import React, { useState } from 'react';
import SectionHeader from '@/components/common/SectionHeader';
import TeamCard from './components/TeamCard';
import Button from '@/components/common/Button';

const TeamSection = ({ data }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className='py-12'>
      <SectionHeader title={data?.title} description={data?.description} />
      <div className='pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {data?.team_card?.slice(0, showAll ? data.team_card.length : 6).map((item) => (
          <TeamCard key={item?._metadata?.uid} item={item} />
        ))}
      </div>
      <div className='pt-10 flex justify-end'>
        {data?.team_card?.length > 6 && (
          <Button
            name={showAll ? 'See Less' : data?.button_name}
            type='button'
            onClick={() => setShowAll(!showAll)}
            className='cursor-pointer py-3 px-14 rounded-xl bg-black text-white hover:bg-white hover:text-black transition duration-300'
          />
        )}
      </div>
    </div>
  );
};

export default TeamSection;
