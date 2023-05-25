import React from 'react'
import MiniCard from '../subcomponents/MiniCard'
import CardCarousel from '../subcomponents/CardCarousel'

interface about{
    image: string
}

const Projects = (props:about) => {
  return (
    <div className='bg-black text-white pb-[8rem]' id="Projects">
        <div className='ml-[7rem]'>
            <h1 className='text-[2rem] text-[#D8A206]'> 
                <b>Work</b> 
            </h1>
            <h1 className='text-[5rem]'> 
                <b>My Projects</b> 
            </h1>
            <p className='text-[#D8A206]'>description</p>
        </div>
        <div className='flex justify-center mt-[5rem]'>
        <CardCarousel/> 
        </div>
    </div>
  )
}

export default Projects