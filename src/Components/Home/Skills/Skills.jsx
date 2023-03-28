import React from 'react'
import SkillBar from 'react-skillbars';

const Skills = () => {
     const skills = [
          { type: 'HTML', level: 75 },
          { type: 'CSS', level: 60 },
          { type: 'Bootstrap', level: 80 },
          { type: 'TailwindCSS', level: 85 },
          { type: 'JavaScript', level: 50 },
          { type: 'ReactJS', level: 45 },
          { type: 'Linux', level: 55 },
     ];
     const colors = {
          bar: "#eeb90b",
          title: {
               text: "#fff",
               background: "#1f98df"
          }
     };
     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='skills'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Skills</h1>
               <div className={`w-11/12 sm:w-3/4 mx-auto`}>
                    <SkillBar skills={skills} colors={colors}  animationDelay={100}  animationDuration={1600}/>
               </div>
          </div>
     )
}

export default Skills