import React from 'react'
import Headerr from './Headerr'
import Circle from './Circle'
import Square from './Square'
import Animation from './Animation'

export default function App() {
  
  return (
    <>
      <div className='w-full h-100vh overflow-hidden'>
      <Headerr />
      <Animation/>
      <div className='shapebox absolute'>
      <div className='flex'>
        <div className="box1 flex">
          <Circle />
          <Square />
          <Circle />
        </div>
        <div className="box2 flex">
          <Square />
          <Circle />
          <Square />
        </div>
      </div>
      </div>
      </div>
    </>

  )
}
