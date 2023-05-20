import Navbar from './components/Navbar'
import Card from './components/subcomponents/Card'
import About from './components/About'

const Home = () => {
  return (
    <div>
      <div className='flex justify-center mt-[4rem] pb-10 bg-black bg-no-repeat bg-cover text-white' style={{backgroundImage: "url('/Timeline.svg')"}}>
          <div className=' opacity-75 py-[20rem] '>
            <h1 className='text-[5rem]'>Hi I'm <b className='text-[5rem] inline-block text-[#D8A206]'>Yalamber</b></h1>
            <h2 className='text-[3rem] text-center'>Software Engineer</h2>
          </div>
      </div>
      <About image='/nextlogo.png'/>
      <div>

      </div>
      <Navbar/> 
    </div>
  )
}

export default Home
