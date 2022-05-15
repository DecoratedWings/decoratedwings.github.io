import React from 'react'
import GC from '../assets/GC.png'
import HD from '../assets/HD.png'
import Singularity from '../assets/Singularity.png'
import domain from '../assets/domain.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full h-[120vh] bg-[#21835f] text-gray-300'>
          <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-green-300 '>Projects</p>
              <p className='py-4'>My most recent projects: </p>
          </div>

          <div className='w-full grid grid-cols-2 lg:grid-cols-2 gap-8 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
              <a href="https://github.com/DecoratedWings/HapticDao">
                  <img className='w-100 mx-auto' src={HD} alt="Haptic Dao" />
              </a>
                  <p className='my-4'>Haptic DAO: Chainlink 2022 Hackathon</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://www.youtube.com/watch?v=L1PI3k5F-n8">
                  <img className='w-100 mx-auto' src={GC} alt="Giving Chain" />
                </a>
                  <p className='my-4'>Giving Chain Blockchain NFT Donation Platform</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://www.youtube.com/watch?v=PWTTX4p6caI"> 
                  <img className='w-100 mx-auto' src={Singularity} alt="Singulariy" />
                  </a>
                  <p className='my-4'>Winner for NY Deutsche Bank Internal Hackathon</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <a href="https://domain-starter-project.monarassouli.repl.co/">
                  <img className='w-100 mx-auto' src={domain} alt="Lit Domains" />
                </a>
                <p className='my-4'>Domain Minting Dapp on Polygon: Lit Domains</p>
              </div>
     
              </div>

        </div>
    </div>
  )
}

export default Projects