import React from 'react'
import ACE from '../assets/ACE.png'
import ML from '../assets/ML.png'
import C4 from '../assets/C4.jpg'


const Certifications = () => {
  return (
    <div name='certifications' className='w-full h-screen bg-[#cdcdcd] text-gray-500'>
          <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-white '>Certifications</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={ACE} alt="GCP ACE Certifcation" />
                  <p className='my-4'>GCP Associate Engineer</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={ML} alt="ML Certifcation" />
                  <p className='my-4'>Stanford Machine Learning</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={C4} alt="Bitcoin Certifcation" />
                  <p className='my-4'>Certified Bitcoin Professional</p>
              </div>
     
              </div>
        </div>
    </div>
  )
}

export default Certifications;