"use client";
import React from 'react'
import Image from 'next/image'

interface Card{
  name:string
  image:string
  alt: string
  title: string
  description: string
  bottom:string
}

const Card = (props:Card) => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-start mb-5 pb-6 p-10 bg-[#18222d] dark:bg-[#18222d] shadow-2xl rounded-2xl dark:shadow-transparent">
    <div className="flex sm:flex-row grid-cols-2 content-center w-full ">
    <div className="flex flex-col">
      <h1 className=" items-center font-bold text-5xl sm:text-7xl tracking-tight mb-1 text-[#2ea6ff] dark:text-[#2ea6ff]">
        Yalamber <br/> Subba
      </h1>
    </div>
    <div className="w-[80px] sm:w-[250px] relative mb-8 sm:mb-0 mx-auto">
      <Image
        alt={props.alt}
        height={250}
        width={250}
        src={props.image}
        sizes="30vw"
        priority
        className="rounded-full filter dark:grayscale"
      />
    </div>
    </div>
    
    <div >
    <h2 className="text-gray-200 mb-4 text-2xl">
        {props.title} <br/> {props.description}
        <span className="font-semibold">Google Code Next</span>
      </h2>
      <p className="text-xl text-gray-400 ">
        {props.bottom}
      </p>
    </div>

  </div>
  )
}

export default Card