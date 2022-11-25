import React from 'react'
import Typed from "react-typed"
const TypedAnimation = () => {
  return (
    <>
    <Typed className="text-lg md:text-3xl lg:text-4xl font-bold w-full block font-mono text-emerald-400"
      strings={[
            "I am Marzan",
            "I am a Frontend Web Developer",
            "I am a Freedom Lover",
            "I am a Linux Enthusiast"
          ]}
          typeSpeed={170}
          backSpeed={70}
          loop
        /></>
  )
}

export default TypedAnimation