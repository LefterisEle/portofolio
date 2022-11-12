import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Tailwind from '../assets/tailwind.png'
import Github from '../assets/github.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}

      <div className='max-w-[1000px] mx-auto p-4 flex flex-col 
                justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4
              py-4 border-pink-600'>
              Skills
          </p>
          <p className='my-4 py-4 text-sm text-gray-400 tracking-tighter'> These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
              {/* skill */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
            <p className='my-4'>HTML</p>
          </div>

             {/* skill */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt='CSS icon' />
            <p className='my-4'>CSS</p>
          </div>

             {/* skill */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Javascript} alt='Javascript icon' />
            <p className='my-4'>JAVASCRIPT</p>
          </div>

             {/* skill */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactLogo} alt='ReactLogo icon' />
            <p className='my-4'>REACT</p>
          </div>


            {/* skill */}
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
            <p className='my-4'>TAILWIND</p>
          </div>

            {/* skill */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Github} alt='Github icon' />
            <p className='my-4'>GITHUB</p>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Skills