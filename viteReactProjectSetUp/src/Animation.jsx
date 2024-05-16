import React from 'react'
import Lottie from 'lottie-react';
import tect from './assets/tech.json';
export default function Animation() {
    const style ={
        width: "300px"
      }
  return (
    <div>
        <Lottie className='w-1/2 text-center mx-auto absolute costom-animate ' animationData={tect} loop={true} />
    </div>
  )
}
