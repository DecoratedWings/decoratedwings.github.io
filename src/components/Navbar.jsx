import React, {useState} from 'react'
import Logo from'../assets/logo.png';
import Braintrust from '../assets/braintrust.png';
import Hackernoon from '../assets/hackernoon.png';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaBitcoin, FaAlignJustify} from 'react-icons/fa';

const Navbar = () => {

  const[nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
          <a href="/">
            <img src={Logo} alt="Logo Image" style={{width:'50px'}}/>
          </a>
        </div>
        <div>
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Experience</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Menu bars */}
        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Menu for Mobile */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Experience</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        <div className='flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://www.linkedin.com/in/monarassouli/">
                  Linkedin <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href="https://github.com/DecoratedWings">
                  Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fdee73]'>
                <a className='flex justify-between items-center w-full text-black'
                href="https://app.usebraintrust.com/talent/51099/">
                  Braintrust <img src={Braintrust} style={{width:'35px'}} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#60F360]'>
                <a className='flex justify-between items-center w-full text-black'
                href="https://hackernoon.com/u/MR_Protocol">
                  Tech Blog  <img src={Hackernoon} style={{width:'32px'}} />
                </a>
            </li>
          </ul>

        </div>
    </div>
  )
}

export default Navbar