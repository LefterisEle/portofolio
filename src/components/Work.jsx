import React from 'react'
import imgshop from '../assets/projects/imgshop.PNG'
import moviesearch from '../assets/projects/moviesearch.PNG'
import datawebsite from '../assets/projects/landing_data_website.PNG'
import netflixclone from '../assets/projects/netflixclone.PNG'
import quiz from '../assets/projects/quiz.PNG'

const Work = () => {
  return (
    <div name='work' 
        className='w-full md:h-screen bg-[#0a192f] text-gray-300 px-4'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>
                <p className='py-6 text-sm text-gray-400 tracking-tighter'>Check out some of my recent work</p>
            </div>

                {/* Container */}
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>

                {/* Grid Item */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md
                     flex justify-center items-center mx-auto content-div'
                     style={{backgroundImage: `url(${quiz})`}}>
                    
                        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider'>
                            Quiz Game
                        </p>
                    
                        <div className='pt-8 text-center' >
                            <a href='https://fun0quizz.netlify.app/' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/LefterisEle/quizzical' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Grid Item */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md
                     flex justify-center items-center mx-auto content-div'
                     style={{backgroundImage: `url(${netflixclone})`}}>
                    
                        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider'>
                            Netfilx-Clone Firebase
                        </p>
                    
                        <div className='pt-8 text-center' >
                            <a href='https://netflix0clone.netlify.app/' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/LefterisEle/neflix-clone' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                    {/* Grid Item */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md
                     flex justify-center items-center mx-auto content-div'
                     style={{backgroundImage: `url(${imgshop})`}}>
                    
                        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <p className='text-2xl font-bold text-white tracking-wider'>
                            Mock Ecommerce React
                        </p>
                    
                        <div className='pt-8 text-center' >
                            <a href='https://mock-ecommerce-with-react.netlify.app/' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/LefterisEle/Mock-Ecommerce-with-React' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                    {/* Grid Item */}
                <div className='shadow-lg shadow-[#040c16] group container rounded-md
                     flex justify-center items-center mx-auto content-div'
                     style={{backgroundImage: `url(${moviesearch})`}}>
                    
                        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Movie Search with React
                        </span>
                    
                        <div className='pt-8 text-center' >
                            <a href='https://project-movie-searcher.netlify.app/' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/LefterisEle/Movie-Search-with-React' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                    {/* Grid Item */}
                    <div className='shadow-lg shadow-[#040c16] group container rounded-md
                     flex justify-center items-center mx-auto content-div'
                     style={{backgroundImage: `url(${datawebsite})`}}>
                    
                        {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Landing Page React
                        </span>
                    
                        <div className='pt-8 text-center' >
                            <a href='https://landing-data-website.netlify.app/' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/LefterisEle/landing_data_website' target="_blank" rel='noreferrer'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work