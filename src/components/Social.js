import React from 'react'
import { SiFacebook, SiGithub, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";

const Social = () => {
     return (
          <div className='flex justify-center items-center gap-x-3 mt-8'>
               <a href='https://www.facebook.com/MarzanB1nRahman/' target="_blank">
                    <SiFacebook className='w-4 md:w-8 h-4 md:h-8 cursor-pointer hover:scale-125 duration-400 transition-all ease-linear' />
               </a>
               <a href='https://www.instagram.com/MarzanBinRahman/' target="_blank">
                    <SiInstagram className='w-4 md:w-8 h-4 md:h-8 cursor-pointer  hover:scale-125 duration-400 transition-all ease-linear' />
               </a>
               <a href='https://www.linkedin.com/in/marzan-bin-rahman-9400a0223/' target="_blank">
                    <SiLinkedin className='w-4 md:w-8 h-4 md:h-8 cursor-pointer hover:scale-125 duration-400 transition-all ease-linear' />
               </a>
               <a href='https://github.com/Marzan-Bin-Rahman' target="_blank">
                    <SiGithub className='w-4 md:w-8 h-4 md:h-8 cursor-pointer  hover:scale-125 duration-400 transition-all ease-linear' />
               </a>
               <a href='mailto:mailhereformarzan@gmail.com' target="_blank">
                    <SiGmail className='w-4 md:w-8 h-4 md:h-8 cursor-pointer  hover:scale-125 duration-400 transition-all ease-linear' />
               </a>
          </div>
     )
}

export default Social