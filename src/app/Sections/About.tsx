import React from 'react'
import MiniCard from '../components/MiniCard'

interface about{
    image: string
}

const About = (props:about) => {
  return (
    <div className='bg-black text-white pb-[8rem]' id="">
        <div className='ml-[7rem]'>
            <h1 className='text-[2rem] text-[#D8A206]'>
                <b id="About">Introduction</b>
            </h1>
            <h1 className='text-[5rem]'>
                <b>Overview</b>
            </h1>
            <p className='text-[#D8A206]'>description</p>
        </div>
        <div className='flex justify-center mt-[5rem]'>
            <MiniCard image="/images/nextlogo.png" description='Web Developer'/>
            <MiniCard image="/images/unitylogo.png" description='Game Developer'/>
            <MiniCard image="/images/flutterlogo.png" description='Mobile Developer'/>
            <MiniCard image="/images/tensorflowlogo.png" description='ML engineer'/>
        </div>
    </div>
  )
}

export default About