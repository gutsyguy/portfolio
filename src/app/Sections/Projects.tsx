import {useEffect} from 'react';
import data from '../api/data';
import Project from '../components/Project';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { GetStaticProps } from 'next';

type Project = {
  name: string;
  stargazers_count: number;
};

export const getStaticProps: GetStaticProps<{repo: Project}> = async () => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();
  return { props: { repo } };
};


interface AboutProps {}


const Projects = (props:any) => {
  const {project} = props;

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className='bg-black text-white pb-[8rem]' id='Projects'>
      <div className='ml-[7rem] animate-fade'>
        <h1 data-aos='fade-up' className='text-[2rem] text-[#D8A206]'>
          <b>Work</b>
        </h1>
        <h1 data-aos='fade-up' className='text-[5rem]'>
          <b>My Projects</b>
        </h1>
      </div>
      <div className='flex justify-center flex-wrap'>
        {data.projects.map((project,i ) => (
          <div 
          key={i}
          className="sm:w-1/2 md:w-1/3 lg:w-1/4 mb-3 m-5 flex flex-row"
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-show-on-load="false"
          data-te-animation="[slide-right_1s_ease-in-out]"
          data-aos="fade-up"
          >
            <Project key={i} project={project}></Project>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
