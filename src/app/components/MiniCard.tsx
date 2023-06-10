import React,{useEffect} from 'react'
import Image from 'next/image';
import AOS from 'aos'
import 'aos/dist/aos.css';
interface card{
    image: string
    description: string
}

const MiniCard = (props:card) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div data-aos="fade-up" className='border-2 border-solid border-[#D7A514] p-[3rem] px-[3rem] rounded-xl bg-[#080834] mx-[2rem]'>
        <div data-aos="fade-up">
            <Image data-aos="fade-up" src={props.image} alt="" className='w-[10rem] h-[10rem]' />
            <h1 data-aos="fade-up" className='text-center mt-10 text-xl text-[#D7A514]'>
                {props.description}
            </h1>
        </div>
    </div>
  )
}

export default MiniCard