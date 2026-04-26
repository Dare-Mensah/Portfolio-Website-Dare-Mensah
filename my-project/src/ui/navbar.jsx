import React from 'react'
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../ui/navbar.css'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
    return (
      <div className='nav_parent_div'>
        <div className="nav_child_div">
          <div className="flex justify-between items-center px-8">
            <div>
              <a onClick={() => navigate('/')}>
                <button onClick={() => navigate('/')}>
                  <p className="text-3xl font-semibold">DM</p>
                </button>
              </a>
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