import React from 'react';
import { FaAlignRight } from 'react-icons/fa';
import MainLogo from '../assets/mainlogo.png';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#18453a] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          {/* <img src={MainLogo} alt="Logo" style={{width:'300px'}}/> */}

            {/* <br/> */}
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-20'>
            <div className='sm:text-right text-4xl font-bold'>
              {/* <p> Hi. I'm Mona, nice to meet you.</p> */}
              <br/>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-50 mx-auto' src={MainLogo} alt="HTML icon" />
                  {/* <p className='my-4'>Python</p> */}
              </div>
            </div>
            
            <div className='max-w-[1000px] w-full text-2xl gap-8 px-1 md:hidden'>
                <br/> 

              <p> I began my career in the financial services industry where I learned industry standard practices and
                  what it takes to create scalable, robust systems to support users and clients. 
                </p>  
                {/* <br/> */}
                <p>
                  Since then, I have transitioned to <b>Web3</b> and am driven to help contribute to innovations in Defi. 
                  With the rise of Blockchain and prominent projects in the space the pace of advancement will exceed
                  what we thought was previously possible. 
                </p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;