import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Lefteris Eleftheriadis</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'am Front End Developer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am just starting my journey in the web dev.
                I come with a great appetite for learning and full of ideas </p>
            <div>

                <Link to="work" smooth={true} duration={500}> 
                  <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center
                          hover:bg-pink-600 hover:border-pink-600'>View Work 
                          
                          <span className='group-hover:rotate-90 duration-300'>
                              <HiArrowNarrowRight className='ml-4' />
                          </span>
                  </button>
                </Link>
            </div>
        </div>

    </div>
  )
}

export default Home