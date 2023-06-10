import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Image from 'next/image';

interface popup{
    image:string
}

const PopUp = (props:popup) => {
  return (
    <div>
        <Popup 
        trigger = {<button className='hover:bg-[#ffd60a] text-[#000814] py-2  px-[2rem] mr-4 rounded-lg bg-[#D7A514] opacity-95'> Click to open popup </button>} 
        position="right center"
        >
            <Image className='h-full w-full' src={props.image} alt=""/>
        </Popup>
    </div>
  )
}

export default PopUp