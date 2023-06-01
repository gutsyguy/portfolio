'use client'
import React,{useEffect} from 'react'
import MiniCard from '../components/MiniCard'
import AOS from 'aos'
import 'aos/dist/aos.css';

interface about{
    image: string
}

const About = (props:about) => {

    useEffect(() => {
        AOS.init();
      }, [])
    
  return (
    <div className='bg-black text-white pb-[8rem]' id="">
        <div className='ml-[7rem]'>
            <h1 className='text-[2rem] text-[#D8A206]' data-aos="fade-up">
                <b id="About">Introduction</b>
            </h1>
            <h1 className='text-[5rem]' data-aos="fade-up">
                <b>Overview</b>
            </h1>
            <p className='text-[#D8A206]' data-aos="fade-up">description</p>
        </div>
        <div className='flex justify-center mt-[5rem]' aos-data = "fade-up">
        <MiniCard data-aos="fade-up" image="/images/nextlogo.png" description='Web Developer'/>
        <MiniCard data-aos="fade-up" image="/images/unitylogo.png" description='Game Developer'/>
        <MiniCard data-aos="fade-up" image="/images/flutterlogo.png" description='Mobile Developer'/>
        <MiniCard data-aos="fade-up" image="/images/tensorflowlogo.png" description='ML engineer'/>
        </div>
    </div>
  )
}

export default About