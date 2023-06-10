import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleMessageChange = (e) => {
    let inputValue = e.target.value;
    setMessage(inputValue);
  };

  const handleEmailChange = (e) => {
    let inputValue = e.target.value;
    setEmail(inputValue);
  };

  const handleNameChange = (e) => {
    let inputValue = e.target.value;
    setName(inputValue);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({ email, message }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.status === 200) {
        console.log('Email sent');
        // Reset form fields
        setEmail('');
        setMessage('');
        setName('');
      } else {
        console.log('Error sending email');
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div 
    className='flex justify-center text-[2rem] py-[2rem] pb-[4rem]'
    data-te-animation-init
    data-te-animation-start="onScroll"
    data-te-animation-on-scroll="repeat"
    data-te-animation-show-on-load="false"
    data-te-animation="[slide-right_1s_ease-in-out]"
    data-aos="fade-up">
        <form className='border-[#D8A206] border-2 border-solid px-[10rem] py-[5rem] rounded-xl bg-[#001d3d]' onSubmit={sendEmail}>
            <div className='w-full flex flex-col my-4'>
                <label htmlFor="name" className='font-bold text-white'>Name</label>
                <input className='border-[#D8A206] border-2 text-black border-solid rounded-md' minLength={3} maxLength={150} value = {name} onChange={handleNameChange} required type="text" placeholder='Enter name' autoComplete='off' id='name'/>
            </div>
            <div className='w-full flex flex-col my-4'>
                <label htmlFor="email" className='font-bold text-white'>Email</label>
                <input className='border-[#D8A206] text-black border-2 border-solid rounded-md' required type="email" value={email} onChange={handleEmailChange} placeholder='Enter email' id='email'/>
            </div>
            <div>
                <label htmlFor="message" className='font-bold text-white'>Message</label>
                <textarea name='message' rows={4} required minLength={10} maxLength={150} placeholder='Message' value={message} onChange={handleMessageChange} className='w-full p-4 bg-gray-50 border border-[#] rounded-md text-black'></textarea>
            </div>
            <button className='text-white py-2 mt-[2rem] bg-gray-700 font-medium rounded-md mb-4 px-[5rem] border-[#D8A206] border-2 border-solid' type='submit'>Submit</button>
        </form>
  </div>
  );
};

export default ContactForm;
