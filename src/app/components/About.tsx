import React from 'react'
import MiniCard from './subcomponents/MiniCard'

interface about{
    image: string
}

const About = (props:about) => {
  return (
    <div className='bg-black text-white' id="About">
        <div className='ml-[7rem]'>
            <h1 className='text-[2rem] text-[#D8A206]'> 
                <b>Introduction</b> 
            </h1>
            <h1 className='text-[5rem]'> 
                <b>Overview</b> 
            </h1>
            <p className='text-[#D8A206]'>description</p>
        </div>
        <div className='flex justify-center mt-[5rem]'>
            <MiniCard image={props.image} description='Web Developer'/>
            <MiniCard image={props.image} description='Game Developer'/>
            <MiniCard image={props.image} description='Mobile Developer'/>
            <MiniCard image={props.image} description='ML engineer'/>
        </div>
    </div>
  )
}

export default About