import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homepage.css'
import CardSwap, { Card } from '../react_bits/card_swap'
import Particles from '../react_bits/particles'
import { useNavigate } from "react-router-dom";
import FloatingLines from '../react_bits/floatinglines'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import Projects from '../data/projects.jsx'
import Work_Experiences from '../data/workexperience.jsx'
import arrow from '../assets/arrow_right.png'


const homepage = () => {
  const navigate = useNavigate()
  return (
    <div className='root' >
      <div className='homepage_section1' style={{ marginBottom: '30px', height: '800px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div className="particles_bg">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
        <div className='homepage_section1_layout content_above'>
          <div className='text_header'>
            <TypeAnimation className='roles_header'
              sequence={['Software Developer', 1000,
                'Analyst', 1000,
                'Product/Project Manager', 1000,
                'Finance/Technology Risk Consultant', 1000,
                'AB Testing Engineer', 1000
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

            <div>
              <TypeAnimation className={`text-white mb-6 leading-relaxed font-extralight`}
                sequence={['A passionate Computer Science graduate with First Class Honors from Queen Mary University of London. With hands-on experience in software development, data analytics, and cloud solutions, I specialize in leveraging technologies like React, Python, Firebase, and SQL to create impactful solutions.']}
                speed={85}
              />
            </div>
            <button
              onClick={() => navigate('/projectpicker')}
              style={{ display: 'flex', flexDirection: 'row', marginTop: '70px', gap: '20px' }}>
              <p className='clickme'>Click Here to see portfolio</p>
              <img src={arrow} width={40} height={40} />
            </button>
          </div>
          <div className='moving_cards'>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {Projects.map((item, index) => (
                <Card >
                  <a onClick={() => navigate('/projectpicker')}>
                    <h3 className='card_title'>{item.title}</h3>
                    <hr style={{ marginBottom: '40px' }} />
                    <div className='card_desc_img'>
                      <p className='card_description'>{item.description}</p>
                      <img src={item.image} width={150} height={80} />
                    </div>
                  </a>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
      <div className='homepage_section1'>
        <div className='particles_bg'>
          <FloatingLines
            enabledWaves={["top", "middle", "bottom"]}
            // Array - specify line count per wave; Number - same count for all waves
            lineCount={5}
            // Array - specify line distance per wave; Number - same distance for all waves
            lineDistance={5}
            bendRadius={5}
            bendStrength={-0.5}
            interactive={true}
            parallax={true}
          />
        </div>

        <div className='homepage_section1_layout content_above' style={{ justifyContent: 'flex-start' }}>
          <div style={{ display: 'block' }}>
            <p className='my_name_header' style={{ marginBottom: '70px' }}>Work Experience</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <VerticalTimeline>
                {Work_Experiences.map((item, index) => (
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{
                      background: "rgb(16, 16, 16)",
                      color: "#fff",
                      border: "2px solid white",
                      borderRadius: "30px",
                      padding: "20px"
                    }}
                    contentArrowStyle={{ borderRight: "7px solid rgb(86, 86, 86)" }}
                    date={item.duration}
                    iconStyle={{
                      background: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    icon={
                      <img
                        src={item.logo}
                        alt="Logo"
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%"
                        }}
                      />
                    }
                  >
                    <h3 className="vertical-timeline-element-title text-2xl text-white ">{item.job_title}</h3>
                    <h4 className="vertical-timeline-element-subtitle text-white font-semibold">{item.company}</h4>
                    {/* <p className="text-white font-extralight">{item.description}</p> */}
                    {item.description.map((item, index) => (
                      <li style={{gap:'10px', marginTop: '10px'}} key={index}>{item}</li>
                    ))}
                    <li></li>
                  </VerticalTimelineElement>

                ))}

              </VerticalTimeline>

            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default homepage