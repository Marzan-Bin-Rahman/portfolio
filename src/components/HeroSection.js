import React from 'react'
import '../App.css'
import me from '../assets/marzan.jpg'
import TypedAnimation from './TypedAnimation'
const HeroSection = () => {
     const style = {
          backgroundColor: "#191919"
     }
  return (
     <div className="hero min-h-screen bg-slate-700" style={style}>
     <div className="hero-content text-center">
       <div className="">
          <img src={me} className="w-24 h-24 md:w-36 md:h-36 rounded-full block mx-auto my-10 ring-4 ring-amber-500"/>
          <h1 className='text-3xl md:text-4xl font-black'>Assalamualaikum</h1>
         <TypedAnimation />
       </div>
     </div>
   </div>
  )
}

export default HeroSection