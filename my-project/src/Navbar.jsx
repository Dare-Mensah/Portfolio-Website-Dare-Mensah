import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 w-full flex shadow-md py-4 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide z-50'>
        <div className="py-4 bg-white w-full">
          <div className="flex justify-between items-center px-8">
            <div>
              <p className="text-3xl font-semibold">Portfolio</p>
            </div>
            <div>
              <ul className="flex gap-9 justify-between w-full">   
                <li>
                    <ScrollLink to='profile'
                      smooth={true}
                      duration={500}
                      className="font-normal hover:font-bold text-xl cursor-pointer" >Home</ScrollLink>
                </li>
                <li>
                    <ScrollLink to='about'
                      smooth={true}
                      duration={500}
                    className="font-normal hover:font-bold text-xl" >About Me</ScrollLink>
                </li>

                <li>
                    <ScrollLink to='work_experience'
                      smooth={true}
                      duration={500}
                    className="font-normal hover:font-bold text-xl" >Work Experience</ScrollLink>
                </li>

                <li>
                    <ScrollLink to='projects'
                        smooth={true}
                        duration={500}
                    className="font-normal hover:font-bold text-xl" >Projects</ScrollLink>
                </li>

              </ul>
            </div>
          </div>
        </div>
        </div>
      );
    };

export default Navbar