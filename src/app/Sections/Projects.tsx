import React from 'react';
import data from '@/app/api/data';
import Project from '../components/Project';


interface AboutProps {}


const Projects = (props:any) => {
  const {project} = props;
  return (
    <div className='bg-black text-white pb-[8rem]' id='Projects'>
      <div className='ml-[7rem] animate-fade'>
        <h1 className='text-[2rem] text-[#D8A206]'>
          <b>Work</b>
        </h1>
        <h1 className='text-[5rem]'>
          <b>My Projects</b>
        </h1>
      </div>
      <div className='flex justify-center flex-wrap'>
        {data.projects.map((project) => (
          <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row">
            <Project project={project}></Project>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
