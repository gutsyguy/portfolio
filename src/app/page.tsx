import Navbar from './components/Navbar'
import About from './Sections/About'
import Projects from './Sections/Projects'
import Timeline from './Sections/Timeline'


const Home = () => {
  return (
    <div>
      <div className='flex justify-center pt-[4rem] pb-[2rem] bg-black bg-no-repeat bg-cover text-white' style={{backgroundImage: "url('/Timeline.svg')"}}>
          <div className=' opacity-75 py-[20rem] '>
            <h1 className='text-[5rem]'>Hi I'm <b className='text-[5rem] inline-block text-[#D8A206]'>Yalamber</b></h1>
            <h2 className='text-[3rem] text-center'>Software Engineer</h2>
          </div>
      </div>
      <About image='/nextlogo.png'/>
      <Timeline/>
      <Projects/>
      <Navbar/> 
    </div>
  )
}

export default Home
