'use client';
import Link from 'next/link';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { gmail } from 'googleapis/build/src/apis/gmail';

const popUp = () =>{
  console.log('success')

}


const Navbar:React.FC = () => {
  
  return (
    <div className='flex'>
        <nav className='top-0 fixed w-full p-0 overflow-hidden text-[1.5rem] py-2 text-white border-[#ffc300] border-2 
            bg-[#001d3d]
              flex
              justify-center'>
            <ul className="">
                <Link href = "#About" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>About</Link>
                <Link href = "#Timeline" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>Timeline</Link>
                <Link href = "#Projects" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'>Project</Link>
                <Link href = "#Skills" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'> Skills</Link>
                <Link href = "#Contact" className='nav-link hover:bg-[#003566] py-[2rem] px-[2rem]'> Contact</Link>
                {/* <button className=' hover:bg-[#ffd60a] text-[#000814] py-2  px-[2rem] mr-4 rounded-lg bg-[#D7A514] opacity-95' onClick={() => {
                }}>Resume</button> */}
            </ul>
        </nav>
    </div>

  )
}

export default Navbar