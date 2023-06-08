import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';
import ContactForm from '../components/ContactForm';

const Contact = () => {

  useEffect(() => {
    AOS.init();
  }, [])

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
        <ContactForm/>
    </div>
  )
}

export default Contact