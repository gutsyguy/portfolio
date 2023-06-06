import { useEffect } from "react";
import LeftTimelineContainer from "../components/Timeline/LeftTimelineContainer";
import RightTimelineContainer from "../components/Timeline/RightTimelineContainer";
import Navbar from "../components/Navbar";
import AOS from 'aos'
import 'aos/dist/aos.css';

const Timeline = () => {
  useEffect(() => {
    AOS.init();
  }, [])
    return (
      <div
        className=' bg-black bg-no-repeat bg-cover text-white'
        style={{
          backgroundImage: `url(${require('public/Timeline.svg')})`,
        }}
        id="Timeline">
        <div className='ml-[7rem]'>
            <h1 data-aos='fade-up' className='text-[2rem] text-[#D8A206]'> 
                <b id="About">What I have done</b> 
            </h1>
            <h1 data-aos='fade-up' className='text-[5rem]'> 
                <b>Experience</b> 
            </h1>
        </div>
        <div className='min-h-screen bg-black py-6 flex flex-col justify-center sm:py-12'>
          <div className='py-3 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              <div className='hidden sm:block w-1 bg-[#001d3d] absolute h-full left-1/2 transform -translate-x-1/2'></div>
              <LeftTimelineContainer
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                title="Google Code Next"
                type="Apprenticeship"
                date="September 2020 - Present"
                description="Joined during freshman year"/>
              <RightTimelineContainer
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                title='Team Edge'
                type="program"
                date='July 2021 - June 2022'
                description=' A yearlong program where I build websites with the flask framework and a camera with the raspberry pi'
              />
              <LeftTimelineContainer
                title='Launch'
                type="program"
                date='July 2022 - Present'
                description='An entreprenuership program.'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
              <RightTimelineContainer
                title='Code Next Hacks 5'
                type="event"
                date='August 2022'
                description=' A 3 day hackathon where I build chat-app with react.js and firebase and won first place.'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
              <LeftTimelineContainer
                title='Los altos 6'
                type="event"
                date='September 2022'
                description='A 24 hour hackathon where I created game with Unity'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
              <RightTimelineContainer
                title='Unite hacks'
                type="event"
                date='October 2022'
                description=' A twelve hour hackathon where I made a game with Godot'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
              <LeftTimelineContainer
                title='Epoche hacks'
                type="event"
                date='December 2022'
                description=' A twelve hour hackathon where I created Maleware with C++'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
              <RightTimelineContainer
                title='Git init 2023'
                type="event"
                date='January 2023'
                description=' A 12 hour hackthon where I created a game with Godot'
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
              />
            <LeftTimelineContainer
                title="Lancer Hacks"
                type="event"
                date="February 2023"
                description="A 12 hour hackathon where I created a reverse search engine"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                />
            <RightTimelineContainer
                title="Mountain Hacks"
                type="event"
                date="March 2023"
                description="Won best UX/UI design"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                />
            <LeftTimelineContainer
                title="Los Altos Hacks 7"
                type="event"
                date="February 2023"
                description="A 24 hour hackathon where I created a fitness mobile app"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                />
            <RightTimelineContainer
                title="Anova Hacks"
                type="event"
                date="April 2023"
                description="Won best social good"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
                />
            <LeftTimelineContainer
                title="Flutter workshop"
                type="event"
                date="March 2023"
                description="Developing the curriculum for a flutter workshop set to be taught on june 3rd"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-delay="1000"
            />
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    )
  }
  
  export default Timeline