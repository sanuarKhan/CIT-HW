import React from 'react'
import {Typewriter} from 'react-simple-typewriter';

export default function Headerr() {
    
  return (
    <div class="bg-teal-600 w-100 h-full">
      <h1 class="text-3xl font-bold text-center p-10 m-11 bg-slate-600 text-fuchsia-500"> I was made with <Typewriter words={['Vite React', 'Tailwindcss']} loop={0} cursor
            cursorStyle='|' /> </h1>
            
      
    </div>
  )
}
