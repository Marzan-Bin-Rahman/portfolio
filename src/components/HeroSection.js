import React from 'react'
import '../App.css'
import me from '../assets/marzan.jpg'
import Social from './Social'
import TypedAnimation from './TypedAnimation'
const HeroSection = () => {
     const style = {
          backgroundColor: "#191919"
     }
  return (
     <div className="hero min-h-screen bg-slate-700" style={style}>

     <div className="hero-content text-center">

       <div>

          <img src={me} className="w-24 h-24 md:w-36 md:h-36 rounded-full block mx-auto mb-10 ring-4 ring-amber-500" alt="This handsome man is me"/>

          <h1 className='text-3xl md:text-4xl lg:text-7xl font-black text-slate-300'>Assalamu'alaikum wa rahmatulloh</h1>

         <TypedAnimation />

         <Social />
         
       </div>
     </div>
   </div>
  )
}

export default HeroSection