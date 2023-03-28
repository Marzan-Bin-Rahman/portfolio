import React from 'react'

import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Project from './Project';

const Blogs = () => {

     const projectLists =[
          {
               id: 1,
               name: 'JB Mavericks',
               link : 'https://jb-mavericks.github.io/',
               description: "I both designed and developed the official website of JB Mavericks and I'm thrilled to say that it turned out awesome! With a modern design and easy-to-navigate features, visitors can quickly learn about my skills, experience, and achievements. It was a fun project, and I'm proud of it!",
               role: 'Lead Fronted Developer and Designer'
          },
          {
               id: 2,
               name: 'Mavericks WriteAI',
               link : 'https://github.com/JB-Mavericks/Mavericks-WriteAI',
               description: "Check out Mavericks-WriteAI on GitHub! I'm thrilled to have been one of two contributors for this project. Together, we developed an innovative tool for generating human-like text using AI technology. This project was a challenging but rewarding experience, and I'm excited to see where it goes in the future.",
               role: 'Frontend Developer'
          },
          {
               id: 3,
               name: 'Bill Koto',
               link : 'https://github.com/Marzan-Bin-Rahman/bill-koto',
               description: "Bill Koto is a small web application which can calculate the electricity bill of Bangladesh.",
               role: 'Frontend Developer'
          }
     ]

     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='projects'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Projects</h1>
               <div className={`grid grid-cols-1 px-6 sm:px-8 md:px-10`}>
                    {
                         projectLists.map((project, id) => (
                              <Project project={project} key={id}/>
                         ))
                    }
               </div>
          </div>
     )
}

export default Blogs