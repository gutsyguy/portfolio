import React from 'react'

const Validate = () =>{
    const name = document.querySelector('#name')
    const email = document.querySelector('#email')
    const message = document.querySelector("#message")
 
    if (!name) {
      alert('Please enter your name.');
      return false;
    } 
    if (!email) {
      alert('Please enter your email');
      return false;
    }
    if (!message) {
      alert('Please write a message');
      return false;
    }
}



const Contact = () => {
  return (
    <div id="Contact" className='bg-black text-white'>
        <h1 className='text-[4rem] ml-[7rem]'
            data-te-animation-init
            data-te-animation-start="onScroll"
            data-te-animation-on-scroll="repeat"
            data-te-animation-show-on-load="false"
            data-te-animation="[slide-right_1s_ease-in-out]"
            data-aos="fade-up">
              Contact
        </h1>
        <div 
          className='flex justify-center text-[2rem] py-[2rem] pb-[4rem]'
          data-te-animation-init
          data-te-animation-start="onScroll"
          data-te-animation-on-scroll="repeat"
          data-te-animation-show-on-load="false"
          data-te-animation="[slide-right_1s_ease-in-out]"
          data-aos="fade-up">
            <form action="" className='border-[#D8A206] border-2 border-solid px-[10rem] py-[5rem] rounded-xl bg-[#001d3d]' onSubmit={Validate}>
                <label className='' htmlFor="name">Name:</label> <br />
                <input className='border-[#D8A206] border-2 border-solid rounded-md px-[5rem]' type="text" id="name" name="name"/><br />
                <label htmlFor="email">Email:</label> <br />
                <input className='border-[#D8A206] border-2 border-solid rounded-md px-[5rem]' type="email" id="email" name="email"/><br />
                <label htmlFor="subject">Subject:</label> <br />
                <input className='border-[#D8A206] border-2 border-solid rounded-md px-[5rem]' type="subject" id="subject" name="subject"/> <br />
                <label htmlFor="message">Message:</label> <br />
                <input className='border-[#D8A206] border-2 border-solid rounded-md px-[5rem]' type="message" id="message" name="message"/> <br />
                <input className='mt-4 p-2 px-[2rem] border-[#D8A206] border-2 border-solid rounded-md' type="submit" value="Submit"/>
            </form>    
        </div>
    </div>
  )
}

export default Contact