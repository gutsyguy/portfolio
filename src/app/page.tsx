import Navbar from './components/Navbar'
import Card from './components/subcomponents/Card'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import Test from './components/Timeline/Test'

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
      {/* <Test/> */}
      <Projects image='/nextlogo.png'/>
      <Navbar/> 
    </div>
  )
}

export default Home
