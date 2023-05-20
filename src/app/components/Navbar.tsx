'use client';
import Popup from 'reactjs-popup'
import Link from 'next/link';

const popUp = () =>{
  console.log('success')

}


const Navbar = () => {
  
  return (
    <div className='flex'>
        <nav className='top-0 fixed w-full p-0 overflow-hidden text-[1.5rem] py-2 text-white border-[#ffc300] border-2 
bg-[#001d3d]
flex
justify-end'>
            <ul className="">
                <Link href = "#About" className='hover:bg-[#003566] py-[2rem] px-[2rem]'>About</Link>
                <Link href = "#Projects" className='hover:bg-[#003566] py-[2rem] px-[2rem]'>Project</Link>
                <Link href = "/" className='hover:bg-[#003566] py-[2rem] px-[2rem]'> Skills</Link>
                <Link href = "/" className='hover:bg-[#003566] py-[2rem] px-[2rem]'>Timeline</Link>
                <button className=' hover:bg-[#ffd60a] text-[#000814] py-2  px-[2rem] mr-4 rounded-lg bg-[#D7A514] opacity-95' onClick={() => {
                  popUp()
                }}>Resume</button>
                {/* <Popup trigger={<button> Click to open popup </button>} 
                  position="right center">
                  <div>GeeksforGeeks</div>
                  <button>Click here</button>
                </Popup> */}
            </ul>
        </nav>

    </div>

  )
}

export default Navbar