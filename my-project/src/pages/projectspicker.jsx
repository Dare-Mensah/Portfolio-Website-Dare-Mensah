import React from 'react'
import '../styles/projectpicker.css'
import Projects from '../data/projects.jsx'
import InfiniteMenu from '../react_bits/infinite_menu'
import { motion, AnimatePresence } from 'framer-motion';
import arrow from '../assets/arrow_right.png'
import { useLocation, useNavigate } from 'react-router-dom';

function projectspicker() {
    const navigate = useNavigate();
    return (
        <div className='root' >
            <div className='pp_section'>
                <div className='pp_layout'>
                    <motion.div>
                        <button className="back_button" onClick={() => navigate('/')}>
                            <img src={arrow} className='arrow_image' width={30} height={30} />
                            <p className='back_text'>Back</p>
                        </button>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className='my_name_header'>My Projects</motion.h1>
                </div>

                <div style={{ height: '900px', position: 'relative' }}>
                    <InfiniteMenu items={Projects}
                        scale={1}
                    />
                </div>

            </div>
        </div>
    )
}

export default projectspicker