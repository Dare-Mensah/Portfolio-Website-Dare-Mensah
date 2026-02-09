import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homepage.css'
import CardSwap, { Card } from '../react_bits/card_swap'
//import 'bootstrap/dist/css/bootstrap.min.css';

const homepage = () => {
  return (
    <div className='homepage_section1'>
      <div className='homepage_section1_layout'>
        <div className='text_header'>
          <TypeAnimation className='roles_header'
            sequence={['Software Developer', 1000,
              'Analyst', 1000,
              'Product/Project Manager', 1000,
              'Finance/Technology Risk Consultant', 1000
            ]}
            speed={60}
            repeat={Infinity} />

          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className='my_name_header' >Dare Mensah</motion.h1>
        </div>

        <div style={{ height: '400px', position: 'relative' }}>
          <CardSwap
            cardDistance={60}
            verticalDistance={70}
            delay={5000}
            pauseOnHover={false}
          >
            <Card>
              <h3>Card 1</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 2</h3>
              <p>Your content here</p>
            </Card>
            <Card>
              <h3>Card 3</h3>
              <p>Your content here</p>
            </Card>
          </CardSwap>
        </div>
      </div>
    </div>
  )
}

export default homepage