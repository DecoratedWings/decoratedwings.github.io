import React from 'react';


import DB from '../assets/db3.png';
import Microsoft from '../assets/microsoft.png';
import MountSinai from '../assets/mountsinai.jpg';
import Code from '../assets/code.png';
import Hyperledger from '../assets/hyperledger.png';
import Research from '../assets/research.jpg';
import OneOf from '../assets/oneof.jpg';
import Hardhat from '../assets/hardhat.png';

const Experience = () => {
  return (
    <div name='experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-purple-600 '>Experience</p>
              <p className='py-4'>Highlighted below are my work and volunteer experiences : </p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={OneOf} alt="DB icon" />
                  <p className='my-4'>OneOf</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={DB} alt="DB icon" />
                  <p className='my-4'>Deutsche Bank</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Microsoft} alt="SOL icon" />
                  <p className='my-4'>Microsoft Student Partner</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MountSinai} alt="HTML icon" />
                  <p className='my-4'>Cardiology Department Volunteer</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Code} alt="HTML icon" />
                  <p className='my-4'>Code.org Volunteer</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Hyperledger} alt="HTML icon" />
                  <p className='my-4'>Hyperledger Supporter</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Research} alt="HTML icon" />
                  <p className='my-4'>Rutgers Research</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Experience;