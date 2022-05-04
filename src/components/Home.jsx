import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import SciFi from '../assets/scifi2.mp4';

const Home = () => {
    return (
        // 9050c4 -Purple
        //bg-[#020103] -> black
        <div name='home' className='w-full h-screen '>
            
            {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
               
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mona</h1>
                <h2 className='text-4xl sm:text-4xl font-bold text-[#a3aed0]'>Blockchain & Fullstack Engineer</h2>
                <p className='text-[#a5b1d3] py-4 max-w-[700px]'>My current focus is towards developing Web3 projects and
                    fullstack dApps. I am also a technical writer in my spare time with a passion for all things technology, cats, and coffee ☕</p>
                <div>

    <video
        autoPlay
        
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={SciFi} type="video/mp4" />
      </video>

                    <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-purple-500 hover:border-purple-500'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-3' />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home