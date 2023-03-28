import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { CgBriefcase, CgReadme, CgSmileMouthOpen } from "react-icons/cg";

const Experience = () => {
     return (
          <div className={`py-10 sm:py-12 md:py-14 lg:py-14 flex flex-col font-poppins font-semibold leading-relaxed`} id='experience'>
               <h1 className={`text-center text-4xl md:text-5xl lg:text-6xl text-lightYellow pb-16 md:pb-20 lg:pb-24`}>Experience</h1>
               <VerticalTimeline>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2022-Present"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Community Manager</h3>
                         <h4 className="vertical-timeline-element-subtitle">Programming Hero</h4>
                         <p>
                         As a coding Discord volunteer, I help members fix bugs in their code by reviewing, identifying errors, and providing guidance. I possess strong coding knowledge and communication skills, and work collaboratively with other volunteers.
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2021-2022"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Inspecting Hero</h3>
                         <h4 className="vertical-timeline-element-subtitle">Programming Hero</h4>
                         <p>
                              Oversaw a team of total 6 translators and also translated more than 50 files from English to Bengali
                         </p>
                    </VerticalTimelineElement>
                    {/* <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2008 - 2010"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
                         <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                         <p>
                              User Experience, Visual Design
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--work"
                         contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                         date="2006 - 2008"
                         iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                         icon={<CgBriefcase />}
                    >
                         <h3 className="vertical-timeline-element-title">Web Designer</h3>
                         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                         <p>
                              User Experience, Visual Design
                         </p>
                    </VerticalTimelineElement> */}
                    <VerticalTimelineElement
                         className="vertical-timeline-element--education"
                         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                         date="2023-Present"
                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         icon={<CgReadme />}
                    >
                         <h3 className="vertical-timeline-element-title">Higher Secondary Certificate at</h3>
                         <h4 className="vertical-timeline-element-subtitle">Kurigram Government College</h4>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         className="vertical-timeline-element--education"
                         contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
                         date="November 2012"
                         iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                         icon={<CgReadme />}
                    >
                         <h3 className="vertical-timeline-element-title">Secondary School Certificate</h3>
                         {/* <h4 className="vertical-timeline-element-subtitle">Kurigram Govt. High School</h4> */}
                         <p>
                         Kurigram Govt. High School
                         </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                         iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                         icon={<CgSmileMouthOpen />}
                    />
               </VerticalTimeline>
          </div>
     )
}

export default Experience