import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../styles/homepage.css'
import CardSwap, { Card } from '../react_bits/card_swap'
import Particles from '../react_bits/particles'
import LiquidEther from '../react_bits/liquidEther';
import Ballpit from '../react_bits/ballpit'
import DotGrid from '../react_bits/dotgrid'
import Threads from '../react_bits/threads'
import ColorBends from '../react_bits/colorblends';
import FloatingLines from '../react_bits/floatinglines'
//import 'bootstrap/dist/css/bootstrap.min.css';
import ClimateSenseImage from '../assets/ClimateSenseImage.png'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FitnessAppImage from '../assets/FDM_App.png'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import Spotify from '../assets/SpotifyAnalysisImage.png'
import Rooted from '../assets/rooted_app.png'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";



import Heroimg from "../assets/Profilepic.jpg"
import linkinimg from "../assets/linkedin.png"
import githubimg from "../assets/github.png"
import GTLogo from '../assets/GTLogo.jpeg'
import amazonLogo from '../assets/Amazon-Logo-07.jpg'
import microsoftLogo from '../assets/microsoftLogo.png'
import reality_ai_labs_logo from '../assets/reality_ai_labs_logo.jpg'
import QueenMaryUniversityLogo from '../assets/Queen-Mary-UniversityLogo.png'

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

  const Work_Experiences = [
    {
      company: 'Amazon',
      job_title: 'Data Analyst',
      description: ['Managed weekly country-level volume planning for multiple European regions, ensuring alignment across Customer Fulfilment, Surface Transportation, and Global Transportation Services. ', 'Developed and maintained complex data queries, visualizations, and models for reporting and ad-hoc analysis using Excel, Quick Sight, ETL Jobs, AWS (S3 buckets, Redshift), and SQL. '],
      logo: amazonLogo,
      duration: 'Feb 2025 - Present'
    },
    {
      company: 'Reality AI Labs',
      job_title: 'Software Developer',
      description: ['Reduced system bugs by 4% through thorough testing and debugging for high-quality code.', 'Created AI-powered tools (Marvel AI, Sky AI) to enhance global education and career coaching accessibility by 5%.'],
      logo: reality_ai_labs_logo,
      duration: 'Dec 2024 - Present'
    },

    {
      company: 'Grant Thornton',
      job_title: 'Technology Risk Consultant',
      description: ['Delivered end-to-end solutions, including software development and ERP integration, with cross-functional teams.', 'Implemented cloud adoption, cybersecurity, and data analytics solutions for clients.'],
      logo: GTLogo,
      duration: 'Sep 2024 - Dec 2024'
    },

    {
      company: 'Amazon',
      job_title: 'Program Manager',
      description: ['Enhanced the performance of the Amazon locker network, achieving an estimated 10% increase in efficiency and estimated revenue savings of over $100,000 annually.', 'Refined a Machine Learning Model, providing insights in regional differences in internal metrics, and package volume performance, with findings presented to senior management to further push projects.'],
      logo: amazonLogo,
      duration: 'Jan 2024 - Aug 2024'
    },

    {
      company: 'Microsoft',
      job_title: 'Technology Internship',
      description: ['Engineered a feature-rich app demo using React Native Expo, which boosted prospective leadership interest by 18%.', 'Maintained extensive knowledge base in AI and software engineering by regularly attending workshops, webinars, and industry conferences.'],
      logo: microsoftLogo,
      duration: 'Jul 2023 - Aug 2023'
    },

    {
      company: 'Grant Thornton',
      job_title: 'Technology Risk Consultant Internship',
      description: ['Enhanced client communication by providing clear and concise code review feedback, leading to a 10% increase in client satisfaction with our services.', 'Collaborated with cross-functional teams to identify and resolve control weaknesses, working closely with various departments to conduct thorough assessments and implement effective solutions. '],
      logo: GTLogo,
      duration: 'Jun 2023 - Jul 2023'
    },

    {
      company: 'Queen Mary University London',
      job_title: 'Teaching Assistant',
      description: ['Developed and implemented engaging lesson plans that improved student performance in coursework 10%.', 'Used technology to supplement traditional teaching methods, resulting in a 5% increase in student engagement.'],
      logo: QueenMaryUniversityLogo,
      duration: 'Oct 2023 - Dec 2023'
    },

    {
      company: 'Queen Mary University London',
      job_title: 'Student Ambassador',
      description: ['Organised a campus tour program that provided prospective students with a comprehensive overview of the university and increased prospective student attendance by 6%.', 'Represented the university at various outreach events and recruitment drives, resulting in a 4% increase in applications from prospective students.'],
      logo: QueenMaryUniversityLogo,
      duration: 'Feb 2023 - Aug 2024'
    },
  ]


  return (
    <div className='root' >
      <div className='homepage_section1' style={{ marginBottom: '30px' }}>
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
                      borderRadius: "10px",
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
                    <p className="text-white font-extralight">{item.description}</p>
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