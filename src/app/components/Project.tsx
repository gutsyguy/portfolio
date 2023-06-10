import React from 'react'
import data from '../api/data'
import { GetStaticProps } from 'next'
import Image from 'next/image';

export async function getStaticProps() {
    const res = await fetch('');
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }

const Project = (props:any) => {
    const {project} = props
  return (
    <div className='text-white'>

<div className="bg-black rounded-lg shadow-md border-2 border-[#D7A514] border-solid">
    <div className='flex justify-center '>
        <Image src={project.image} className="w-[350px] h-[15rem] rounded-md" alt={project.title} /> 
    </div>
    <div className="p-4">
        <h2 className="text-2xl font-semibold text-[#D7A514]">{project.title}</h2>
        <p className="text-lg font-bold">{project.category}</p>
        <h1 className='text-md'>{project.description}</h1>
        <h1 className='text-md'>Skill: {project.skills}</h1>
        <a href={project.github}>
            <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
                Source Code
            </button>
        </a>
    </div>
</div>

    </div>
  )
}

export default Project