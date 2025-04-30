import Image from 'next/image';
import React from 'react'

const Logo = ({ logo }) => {
    return (
        <div className="text-2xl font-bold flex justify-center">
            {logo && <Image
                src={logo}
                alt='Logo'
                width={220}
                height={56}
            />}
        </div>
    )
}

export default Logo;
