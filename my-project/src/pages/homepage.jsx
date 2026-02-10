import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homepage.css'
import CardSwap, { Card } from '../react_bits/card_swap'
import Particles from '../react_bits/particles'
//import 'bootstrap/dist/css/bootstrap.min.css';
import ClimateSenseImage from '../assets/ClimateSenseImage.png'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FitnessAppImage from '../assets/FDM_App.png'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import Spotify from '../assets/SpotifyAnalysisImage.png'
import Rooted from '../assets/rooted_app.png'


const homepage = () => {
  const Projects = [
    {
      Title: 'Climate Sense',
      image: ClimateSenseImage,
      github_link: 'https://github.com/Dare-Mensah/Climate-Change-App',
      description: 'The Climate Sense project aimed to develop a React Native mobile application that raises climate change awareness and fosters eco-friendly behaviors through engaging and educational features. Guided by principles of user-centric design and gamification, the app combines multiple functionalities to encourage user retention and action.',
      //technologiesLogo: [pythonLogo,firebase,reactLogo],
      decription_list: ['Server and NLP: Python Flask server utilized spaCy for NLP preprocessing and TF-IDF for term extraction, ensuring climate-relevant content in the game.', 'APIs and Libraries: Integrated APIs for news content, Firebase for real-time data synchronization, and Flask-SocketIO for multiplayer functionality.', ' Development Environment: Built using React Native Expo for cross-platform compatibility (Android and iOS), with Firebase providing backend services for user authentication and data storage.']
    },

    {
      Title: 'FDM WellbeingApp',
      image: FitnessAppImage,
      github_link: 'https://github.com/Techno504/FDMWellbeingApp',
      description: 'The FDM Wellbeing App was a cross-platform mobile application developed using React Native and Firebase to enhance employee well-being and mental health. The app offered a seamless and user-friendly interface to engage users while securely managing their data.',
      //technologiesLogo: [firebase,reactLogo],
      decription_list: ['Well-being Focus: Designed to support mental health initiatives, offering tools and features aimed at improving employee wellness.', 'Firebase Integration: Facilitated secure data storage and real-time synchronization for user information and app interactions.', 'React Native Framework: Enabled the development of a robust and responsive app compatible with both iOS and Android platforms.']
    },

    {
      Title: 'Spotify Music Reccomendation Analysis',
      image: Spotify,
      github_link: '',
      description: 'The Spotify Playlist Dynamics project investigated the underlying mechanisms of Spotify’s playlist recommendation system, focusing on uncovering patterns in song co-occurrence and attribute relationships. The study applied network analysis techniques to explore how music attributes influence recommendation algorithms, with an emphasis on promoting transparency and improving user trust.',
      //technologiesLogo: [pythonLogo,gephiLogo],
      decription_list: ['Louvain Community Detection: Partitioned the network into clusters of similar songs based on their connectivity.', 'Gephi Visualizations: Compared small and large network properties to understand community structures.', 'Analyzed attribute distributions across communities to determine their impact on playlist dynamics.']
    },

    {
      Title: 'Rooted Website',
      image: Rooted,
      github_link: '',
      description: 'The Spotify Playlist Dynamics project investigated the underlying mechanisms of Spotify’s playlist recommendation system, focusing on uncovering patterns in song co-occurrence and attribute relationships. The study applied network analysis techniques to explore how music attributes influence recommendation algorithms, with an emphasis on promoting transparency and improving user trust.',
      //technologiesLogo: [pythonLogo,gephiLogo],
      decription_list: ['Louvain Community Detection: Partitioned the network into clusters of similar songs based on their connectivity.', 'Gephi Visualizations: Compared small and large network properties to understand community structures.', 'Analyzed attribute distributions across communities to determine their impact on playlist dynamics.']
    },

  ]
  return (
    <>
    <div className='homepage_section1'>
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

            <div>
              <TypeAnimation className={`text-white mb-6 leading-relaxed font-extralight`}
                sequence={['A passionate Computer Science graduate with First Class Honors from Queen Mary University of London. With hands-on experience in software development, data analytics, and cloud solutions, I specialize in leveraging technologies like React, Python, Firebase, and SQL to create impactful solutions.']}
                speed={85}
              />
            </div>
          </div>
          <div className='moving_cards'>
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              {Projects.map((item, index) => (
                <Card>
                  <h3 className='card_title'>{item.Title}</h3>
                  <p className='card_description'>{item.description}</p>
                </Card>
              ))}
            </CardSwap>
          </div>
        </div>
      </div>
    </>
  )
}

export default homepage