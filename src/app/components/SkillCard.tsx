import React, {useEffect} from 'react'
import Image from 'next/image';

interface skillCard{
  image: string,
  proficiency: string,
  level: string,
  description: string
}


const SkillCard = (props:any) => {
  return (
    <div data-aos="zoom-in" 
     data-aos-offset="0">
    <div className='transform hover:scale-[1.01] transition-all'>
      <div className='flex flex-row rounded-2xl mb-10 mx-auto bg-[#001d3d] max-w-2xl w-full transform hover:scale-[1.01] transition-all border-solid border-2 border-[#D8A206]'>
        <div className='flex p-4 items-center bg-cover bg-center bg-no-repeat'>
        <img
                alt="IMG"
                height={50}
                width={50}
                src={props.image}
                className="rounded-full filter"
              />
        </div>
        <div className='flex flex-col w-full'>
        <div className='flex bg-[#001d3d] dark:bg-slate-500 rounded-2xl mt-2 mx-2' >
            <div style={{width:props.proficiency, backgroundColor: "#D8A206"}} className='flex p-[0.1rem] rounded-2xl justify-end'>
              <p className='text-[12px] text-[#ffffff] mr-1 font-bold'>{props.level}</p>
            </div>
        </div>
            <div className='flex p-3 text-white'>
                {props.description}
            </div>
        </div>
    </div>
    </div>
    </div>
    
  );
}

export default SkillCard