'use client'
import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';


const ContactForm = () => {

    const handleSubmit = async (event:any) => {
        event.preventDefault()

        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        }
        
        const response = await fetch('/api/contact',{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            console.log('message was sent successfully')
        }
        if (!response.ok) {
            console.log('error sending message')
        }
    }

    useEffect(() => {
        AOS.init();
      }, [])

  return (
    <div 
    className='flex justify-center text-[2rem] py-[2rem] pb-[4rem]'
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation-on-scroll="repeat"
    data-te-animation-show-on-load="false"
    data-te-animation="[slide-right_1s_ease-in-out]"
    data-aos="fade-up">
        <form className='border-[#D8A206] border-2 border-solid px-[10rem] py-[5rem] rounded-xl bg-[#001d3d]' onSubmit={handleSubmit}>
            <div className='w-full flex flex-col my-4'>
                <label htmlFor="name" className='font-bold text-white'>Name</label>
                <input className='border-[#D8A206] border-2 border-solid rounded-md' minLength={3} maxLength={150} required type="text" autoComplete='off' id='name'/>
            </div>
            <div className='w-full flex flex-col my-4'>
                <label htmlFor="email" className='font-bold text-white'>Email</label>
                <input className='border-[#D8A206] border-2 border-solid rounded-md' required type="email" autoComplete='off' id='email'/>
            </div>
            <div>
                <label htmlFor="message" className='font-bold text-white'>Message</label>
                <textarea name='message' rows={4} required minLength={10} maxLength={150} placeholder='Message' className='w-full p-4 bg-gray-50 border border-[#] rounded-md text-black'></textarea>
            </div>
            <button className='text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid' type='submit'>Submit</button>
        </form>
  </div>
  )
}

export default ContactForm