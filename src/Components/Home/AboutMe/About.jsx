import React from 'react'

//images
import marzan from './../../../assets/marzan.png'

const About = (props) => {

  return (
    <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='about'>
     <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>About Me</h1>
     <div className={`flex flex-col md:flex-row items-center justify-center px-10 md:px-16 lg:px-20 gap-10`}>
          <img src={marzan} alt='Mohammed Adib' className={`w-32 md:w-40 lg:w-56 h-32 md:h-40 lg:h-56 rounded-full ring-[5px] ring-lightBlue block my-auto hover:shadow-2xl  hover:shadow-lightBlue transition-all duration-700`}/>
          <p className={`font-light text-justify lg:text-xl my-auto ${props.isDaytime ? "text-[#313130c7]" : "text-[#c5c4c1c7]"}`}>Assalamualaikum, my name is Marzan and I am a frontend developer from Bangladesh with a passion for creating dynamic and efficient frontend applications. I specialize in working with ReactJS and the TailwindCSS, and I am always eager to learn new technologies and improve my skills to deliver the best possible solutions for my clients. I am an experienced developer with a strong background in creating Frontend applications that are both functional and visually appealing. Connect with me to know more about my skills and experience.</p>
     </div>
    </div>
  )
}

export default About