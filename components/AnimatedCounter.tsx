'use client'

import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ totalCurrentBalance }: { totalCurrentBalance: number }) => {
    return (
        <div className='w-full'>
            < CountUp prefix='$' decimal='.'
                decimals={2}
                start={totalCurrentBalance / 2} end={totalCurrentBalance} />
        </div>
    )


}

export default AnimatedCounter