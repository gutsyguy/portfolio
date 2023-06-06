import React from 'react'

interface skill{
  scale: string,
  color: string,
  level: string
}

const Skill = (props:skill) => {
  const data = props
  return (
    <div className='bg-black'>
        <div className='flex flex-row bg-[#001d3d] p-4'>
        <img className='w-[50px] h-[50px]' src="/images/nextlogo.png" alt="" />
          <div className=''>
            <div className='flex bg-gray-300 dark:bg-slate-500 rounded-2xl mt-2 mx-2' >
                <div style={{width:props.scale, backgroundColor:props.color}} className='flex p-[0.1rem] rounded-2xl justify-end'>
                    <p className='text-[12px] text-[#ffffff] mr-1 font-bold'>{props.level}</p>
                </div>
            </div> 
            <h1 className='mx-4'>Next.js</h1>
          </div>
        </div>
    </div>
  )
}

export default Skill