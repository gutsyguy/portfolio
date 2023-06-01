import React from 'react'

interface card{
    image: string
    description: string
}

const MiniCard = (props:card) => {
  return (
    <div className='border-2 border-solid border-[#D7A514] p-[3rem] px-[3rem] rounded-xl bg-[#080834] mx-[2rem]'>
        <div>
            <img src={props.image} alt="" className='w-[10rem] h-[10rem]' />
            <h1 className='text-center mt-10 text-xl text-[#D7A514]'>
                {props.description}
            </h1>
        </div>
    </div>
  )
}

export default MiniCard