import React from 'react'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

import Skill from '../components/Skill';
import SkillCard from '../components/SkillCard';
import data from '../api/data';


const Skills = () => {

  useEffect(() =>{
    AOS.init()
  },[])

  const skillData = data.skills

  return (
    <div className='text-white bg-black' id="Skills">
        <div className='ml-[7rem]'>
            <h1 className='text-[2rem] text-[#D8A206]' data-aos="fade-up">
                <b >Skill</b>
            </h1>
            <h1 className='text-[5rem]' data-aos="fade-up">
                <b>My Skill set</b>
            </h1>
            <div className=''>
            <h1 className='text-[4rem]
            text-[#D8A206]'
            data-aos="fade-up" 
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]">Languages</h1>
            <ul className='text-[2rem]'>
            {skillData.Languages.map((language,i ) => (
              <div 
              key={i}
              className="sm:w-[80%] md:w-[75%] lg:w-2/3 mb-3 lg:m-5 sm:m-1 flex flex-col"
              data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation-on-scroll="repeat"
              data-te-animation-show-on-load="false"
              data-te-animation="[slide-right_1s_ease-in-out]"
              data-aos="fade-up"
              >
                <SkillCard key={i} image={language.image} proficiency={language.profiency} description={language.name} level={language.level} />
              </div>
            ))}
            </ul>
          </div>
          <div className=''>
            <h1 className='
            text-[4rem] 
            text-[#D8A206]'
            data-aos="fade-up" 
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            >Frameworks</h1>
            <ul className='text-[2rem]'>
            {skillData.Frameworks.map((framework,i ) => (
              <div 
              key={i}
              className="sm:w-[80%] md:w-[80%] lg:w-2/3 mb-3 lg:m-5 sm:m-1 flex flex-col"
              data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation-on-scroll="repeat"
              data-te-animation-show-on-load="false"
              data-te-animation="[slide-right_1s_ease-in-out]"
              data-aos="fade-up"
              >
                <SkillCard key={i} image={framework.image} proficiency={framework.profiency} description={framework.name} level={framework.level} />
              </div>
            ))}
            </ul>
          </div>
          <div className=''>
            <h1 className='text-[4rem] 
            text-[#D8A206]'
            data-aos="fade-up" 
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            >Miscellanous</h1>
            <ul className='text-[2rem]'>
            {skillData.Miscellanous.map((miscellanous,i ) => (
              <div 
              key={i}
              className="sm:w-[80%] md:w-[80%] lg:w-2/3 pb-3 lg:px-5 sm:p-1 flex flex-col"
              data-te-animation-init
              data-te-animation-start="onScroll"
              data-te-animation-on-scroll="repeat"
              data-te-animation-show-on-load="false"
              data-te-animation="[slide-right_1s_ease-in-out]"
              data-aos="fade-up"
              >
                <SkillCard key={i} image={miscellanous.image} proficiency={miscellanous.profiency} description={miscellanous.name} level={miscellanous.level} />
              </div>
            ))}
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Skills