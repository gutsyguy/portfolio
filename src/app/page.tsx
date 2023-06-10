'use client'
//libraries
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

//sections
import Skills from './Sections/Skills'
import Navbar from './components/Navbar'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Timeline from './Sections/Timeline'
import Contact from './Sections/Contact';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div>
      <div  className='flex justify-center pt-[4rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white' style={{backgroundImage: "url('/Timeline.svg')"}}>
          <div className=' opacity-75 py-[20rem] '>
            <h1 data-aos="fade-up" className='text-[5rem]'>Hi I&apos;m <b className='text-[5rem] inline-block text-[#D8A206]'>Yalamber</b></h1>
            <h2 data-aos="fade-up" className='text-[3rem] text-center'>Software Engineer</h2>
          </div>
      </div>
      <About image='/nextlogo.png'/>
      <Timeline/>
      <Projects/>
      <Skills/>
      <Contact/>
      <Navbar/> 
    </div>
  )
}

export default Home
