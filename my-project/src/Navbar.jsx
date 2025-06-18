import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    return (
      <div className='fixed top-0 left-0 w-full flex py-4 px-4 sm:px-10 bg-neutral-900 font-[sans-serif] min-h-[70px] tracking-wide z-50 stroke-black mb-20 text-white'>
        <div className="py-4 bg-neutral-900 w-full stroke-black">
          <div className="flex justify-between items-center px-8">
            <div>
              <p className="text-3xl font-semibold">DM</p>
            </div>
            {/*
            <div>
              <ul className="flex gap-9 justify-between w-full">   
                <li>
                    <ScrollLink to='profile'
                      smooth={true}
                      duration={500}
                      className="font-normal hover:font-bold text-xl cursor-pointer" >Home</ScrollLink>
                </li>
              </ul>
            </div>
            */}
          </div>
        </div>
        </div>
      );
    };

export default Navbar