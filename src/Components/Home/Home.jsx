import React, { useState, useEffect } from "react";
import Navbar from '../Common/Navbar/Navbar'
import About from './AboutMe/About'
import Experience from './Experience/Experience'
import HeroSection from './HeroSection/HeroSection'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Contacts from './Contacts/Contacts'

const Home = () => {
  const [isDaytime, setIsDaytime] = useState(false);

  useEffect(() => {
    const now = new Date();
    const hour = now.getHours();

    setIsDaytime(hour >= 8 && hour < 17);
  }, []);

  return (
    <div className={` ${isDaytime ? "bg-[#b6bac5]" : "bg-[#0b1328] " } overflow-y-hidden transition-all duration-500`}>
     <Navbar />
     <HeroSection />
     <About isDaytime={isDaytime}/>
     <Skills />
     <Experience />
     <Projects />
     <Contacts isDaytime={isDaytime}/>
    </div>
  )
}

export default Home