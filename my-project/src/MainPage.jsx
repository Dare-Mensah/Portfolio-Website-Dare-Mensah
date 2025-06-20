import React from 'react'
import { useState } from 'react';
import {motion} from 'framer-motion';
import { AnimatePresence } from "motion/react"
import { TypeAnimation } from 'react-type-animation';
//import Slider from "react-slick";

//import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";

import Heroimg from "./assets/Profilepic.jpg"
import linkinimg from "./assets/linkedin.png"
import githubimg from "./assets/github.png"
import GTLogo from './assets/GTLogo.jpeg'
import amazonLogo from './assets/Amazon-Logo-07.jpg'
import microsoftLogo from './assets/microsoftLogo.png'
import reality_ai_labs_logo from './assets/reality_ai_labs_logo.jpg'

import pythonLogo from './assets/pythonlogo.png'
import spacyLogo from './assets/SpacyLogo.png'
import firebase from './assets/firebaeLogo.png'
import flaskLogo from './assets/flask_logo.jpg'
import gephiLogo from './assets/gephiLogo.jpg'
import reactLogo from './assets/reactLogo.png'


import education from './assets/graduation-hat.png'
import worker from './assets/worker.png'
import coding from './assets/coding.png'



import QueenMaryUniversityLogo from './assets/Queen-Mary-UniversityLogo.png'
import ClimateSenseHomepagePhoneOne from './assets/ClimateSensePhone.png'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FDMWellbeingHomepageOne from'./assets/FDMWellbeingPhone.png'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import Spotify from './assets/SpotifyAnalysis.png'

import {useMediaQuery} from 'react-responsive';

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

const Main = () => {

    // Media query for responsive design
    const isMobile = useMediaQuery({ query: '(max-width: 499px)' });
    const isTablet = useMediaQuery({ query: '(min-width: 500px) and (max-width: 820px)' });
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    const [showEducation, setShowEducation] = useState(false);
    const [showExperience, setShowExperience] = useState(false);
    const [showSkills, setShowSkills] = useState(false);

    const Education = () => (
    <motion.div
        key="education"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='border-2 rounded w-96 h-72 mx-auto flex flex-col justify-center items-center text-center p-4'
    >
        <p className="text-xl font-bold mb-3">Education</p>
        <p>BSc Honours Computer Science: 1st Class</p>
        <p>A Level: Computer Science - A*, Politics - A, Philosophy - A</p>
    </motion.div>
    );

    const Experience = () => (
    <motion.div
        key="experience"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='border-2 rounded w-96 h-72 mx-auto flex flex-col justify-center items-center text-center p-4'
    >
        <p className="text-xl font-bold mb-3">Experience</p>
        <p>- Software Development</p>
        <p>- Product Management</p>
        <p>- Data Analytics</p>
        <p>- Financial/Technology Risk</p>
    </motion.div>
    );

    const Skills = () => (
    <motion.div
        key="skills"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className='border-2 rounded w-96 h-72 mx-auto flex flex-col justify-center items-center text-center p-4'
    >
        <p className="text-xl font-bold mb-3">Skills</p>
        <p>Java, Python, React, SQL, APIs</p>
        <p>HTML, CSS, JavaScript, PySpark</p>
    </motion.div>
    );

    const Work_Experiences = [
        {
            company: 'Amazon',
            job_title: 'Data Analyst',
            description: ['Managed weekly country-level volume planning for multiple European regions, ensuring alignment across Customer Fulfilment, Surface Transportation, and Global Transportation Services. ', 'Developed and maintained complex data queries, visualizations, and models for reporting and ad-hoc analysis using Excel, Quick Sight, ETL Jobs, AWS (S3 buckets, Redshift), and SQL. ' ],
            logo: reality_ai_labs_logo,
            duration: 'Feb 2025 - Present'
        },
        {
            company: 'Reality AI Labs',
            job_title: 'Software Developer',
            description: ['Reduced system bugs by 4% through thorough testing and debugging for high-quality code.', 'Created AI-powered tools (Marvel AI, Sky AI) to enhance global education and career coaching accessibility by 5%.' ],
            logo: reality_ai_labs_logo,
            duration: 'Dec 2024 - Present'
        },

        {
            company: 'Grant Thornton',
            job_title: 'Technology Risk Consultant',
            description: ['Delivered end-to-end solutions, including software development and ERP integration, with cross-functional teams.', 'Implemented cloud adoption, cybersecurity, and data analytics solutions for clients.' ],
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

    const Projects =[
        {
            Title: 'Climate Sense',
            image: ClimateSenseHomepagePhoneOne,
            github_link: '',
            description: 'The Climate Sense project aimed to develop a React Native mobile application that raises climate change awareness and fosters eco-friendly behaviors through engaging and educational features. Guided by principles of user-centric design and gamification, the app combines multiple functionalities to encourage user retention and action.',
            technologiesLogo: [pythonLogo,firebase,reactLogo],
            decription_list: ['Server and NLP: Python Flask server utilized spaCy for NLP preprocessing and TF-IDF for term extraction, ensuring climate-relevant content in the game.', 'APIs and Libraries: Integrated APIs for news content, Firebase for real-time data synchronization, and Flask-SocketIO for multiplayer functionality.',' Development Environment: Built using React Native Expo for cross-platform compatibility (Android and iOS), with Firebase providing backend services for user authentication and data storage.']
        },

        {
            Title: 'FDM WellbeingApp',
            image: FDMWellbeingHomepageOne,
            github_link: '',
            description: 'The FDM Wellbeing App was a cross-platform mobile application developed using React Native and Firebase to enhance employee well-being and mental health. The app offered a seamless and user-friendly interface to engage users while securely managing their data.',
            technologiesLogo: [firebase,reactLogo],
            decription_list: ['Well-being Focus: Designed to support mental health initiatives, offering tools and features aimed at improving employee wellness.','Firebase Integration: Facilitated secure data storage and real-time synchronization for user information and app interactions.','React Native Framework: Enabled the development of a robust and responsive app compatible with both iOS and Android platforms.']
        },

        {
            Title: 'Spotify Music Reccomendation Analysis',
            image: Spotify,
            github_link: '',
            description: 'The Spotify Playlist Dynamics project investigated the underlying mechanisms of Spotify’s playlist recommendation system, focusing on uncovering patterns in song co-occurrence and attribute relationships. The study applied network analysis techniques to explore how music attributes influence recommendation algorithms, with an emphasis on promoting transparency and improving user trust.',
            technologiesLogo: [pythonLogo,gephiLogo],
            decription_list: ['Louvain Community Detection: Partitioned the network into clusters of similar songs based on their connectivity.', 'Gephi Visualizations: Compared small and large network properties to understand community structures.', 'Analyzed attribute distributions across communities to determine their impact on playlist dynamics.']
        },

    ]



  return (
    <div className='bg-neutral-950 text-white snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar'>

        <section id='profile' className="w-full py-40 bg-neutral-950 text-white snap-start h-screen no-scrollbar">
            <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar'>
                <div className="container mx-auto px-8 items-center justify-between gap-1">
                    
                    {/* Left Text Content */}
                    <div className="flex flex-col items-start text-left max-w-screen-lg space-h-2 mt-10">
                        <TypeAnimation className={`text-white mb-2 ${isMobile ? 'text-xl font-medium' : 'text-3xl font-medium'}`}
                        sequence={['Software Developer', 1000,
                        'Data Analyst', 1000, 
                        'Product/Project Manager', 1000,
                        'Finance/Technology Risk Consultant', 1000
                        ]}
                        speed={60}
                        repeat={Infinity}/>

                        <motion.h1 
                        initial={{ opacity: 0, scale: 0.5 }}    
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.5,
                            ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className={`text-white mb-6 ${isMobile ? 'text-5xl font-bold' : 'text-8xl font-bold'}`}>Dare Mensah</motion.h1>


                        <TypeAnimation className={`text-white mb-6 leading-relaxed font-extralight ${isMobile ? 'text-center text-sm' : ''}`}
                        sequence={['A passionate Computer Science graduate with First Class Honors from Queen Mary University of London. With hands-on experience in software development, data analytics, and cloud solutions, I specialize in leveraging technologies like React, Python, Firebase, and SQL to create impactful solutions. Currently, I am advancing my expertise as a Data Analyst at Amazon, where I contribute to delivering cutting-edge technology solutions.']}
                        speed={85}
                        />

                        
                        <div className="flex flex-wrap items-center gap-4">
                            <motion.a 
                                href="https://drive.google.com/uc?export=download&id=1VS2lJSuqRcQFO7LDeIljtOf8jCjygMTz" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial = {{scale: 0}} animate={{scale:1}} 
                                className="bg-neutral-900 border border-gray-300 px-4 py-2 text-white font-light hover:bg-stone-800"
                                > Download CV
                            </motion.a>

                            <motion.a 
                                href="https://www.linkedin.com/in/dare-mensah-a78934226/" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial = {{scale: 0}} animate={{scale:1}} >
                                <img src={linkinimg} alt="LinkedIn" className="h-10 w-10" />
                            </motion.a>

                            <motion.a 
                                href="https://github.com/Dare-Mensah" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} initial = {{scale: 0}} animate={{scale:1}} >
                                <img src={githubimg} alt="GitHub" className="h-10 w-10" />
                            </motion.a>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>

        <section id="about" className="snap-start min-h-screen py-40 no-scrollbar ">
            <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar'>
                <p className=" text-center">Get To Know Me</p>
                <h1 className="text-6xl font-bold text-center mb-12">About Me</h1>
                <div className='flex flex-wrap gap-16 justify-center items-center mx-auto'>
                    <div className={`flex ${isMobile ? 'flex-cols-2 gap-1' : 'flex-wrap flex-cols-3 gap-16'} justify-center items-center mb-12`}>
                            <motion.button
                                onClick={() => setShowEducation(!showEducation)}
                                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} 
                                className="bg-neutral-950 px-4 py-2 rounded-lg text-white font-medium"
                            >
                                {(showEducation) ? (<img src={education} alt="Education" width={isMobile ? 85 : 150} /> ) : (<img src={education} alt="Education" width={isMobile ? 85 : 150} />)}
                                <h1 className='text-center p-4 font-medium text-xl'>Education</h1>
                            </motion.button>

                            <motion.button
                                onClick={() => setShowExperience(!showExperience)}
                                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} 
                                className="bg-neutral-950 px-4 py-2 rounded-lg text-white font-medium"
                            >
                                {(showExperience) ? (<img src={worker} alt="Experience" width={isMobile ? 85 : 150} />) : (<img src={worker} alt="Experience" width={isMobile ? 85 : 150} />)}
                                <h1 className='text-center p-4 font-medium text-xl'>Experience</h1>
                            </motion.button>

                            <motion.button
                                onClick={() => setShowSkills(!showSkills)}
                                whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.1 }} 
                                className="bg-neutral-950 px-4 py-2 rounded-lg text-white font-medium"
                            >
                                {(showSkills) ? (<img src={coding} alt="Skills" width={isMobile ? 100 : 150} />) : (<img src={coding} alt="Skills" width={isMobile ? 100 : 150} />)}
                                <h1 className='text-center p-4 font-medium text-xl'>Skills</h1>
                            </motion.button>
                            </div>

                            {/* Animated Cards */}
                            <div className={`flex ${isMobile ? 'flex-col' : 'flex-wrap'} gap-10 justify-center items-center`}>
                            <AnimatePresence>{showEducation && <Education />}</AnimatePresence>
                            <AnimatePresence>{showExperience && <Experience />}</AnimatePresence>
                            <AnimatePresence>{showSkills && <Skills />}</AnimatePresence>
                    </div>
                </div>
                </div>
        </section>

        <section id="work_experience" className="my-60 snap-start h-screen py-40 no-scrollbar">
            <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar py-40'>
                <p className=" text-center">Explore my</p>
                <h1 className="text-6xl font-bold text-center mb-10">Work Experience</h1>
                <div className="container flex flex-col items-center justify-center gap-11 mx-auto bg-neutral-950 w-full">
                    <div className="flex flex-wrap justify-center gap-3">
                    {Work_Experiences.map((Work_Experiences, index) => (
                        <div className="border-2 rounded-3xl p-3 w-96 h-70">
                            <p className="text-center font-bold mb-3">{Work_Experiences.job_title}</p>
                            <div className='flex space-x-3 grid-rows-2  justify-center'>
                                <img src={Work_Experiences.logo} height={40} width={40}/>
                                <p className="text-center mt-2">{Work_Experiences.company}</p>
                            </div>
                                <p className='text-center font-thin mt-3 antialiased'>{Work_Experiences.duration}</p>
                            <div>
                            {Work_Experiences.description.map((text, textIndex) => (
                                <div key={textIndex}>
                                    <ol className=' list-disc pl-5'>
                                        <li className='mt-4'>{text}</li>
                                    </ol>
                                </div>
                            ))}
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        </section>

        <section id="projects" className="my-60 snap-start h-screen py-60 no-scrollbar mb-32 mt-20 ">
            <div className='snap-y snap-mandatory overflow-y-scroll h-screen scroll-smooth no-scrollbar'>
                <p className="text-center">Browse My Recent</p>
                <h1 className="text-6xl font-bold text-center mb-10">Projects</h1>
                <div className="container flex justify-center gap-11 mx-auto w-full">
                    <Carousel swipeable={true} showIndicators={true} showThumbs={false} showArrows={true}>
                        {Projects.map((Projects, index) => (
                            <div key={index} className="container w-full gap-6">
                                <div className="flex flex-col justify-center">
                                    <h2 className="text-3xl font-bold my-4 text-center">{Projects.Title}</h2>
                                    <p className='text-start'>{Projects.description}</p>
                                    <div>
                                    {Projects.decription_list.map((text, textIndex) => (
                                        <div key={textIndex}>
                                            <ol className=' list-disc pl-5'>
                                                <li className='mt-4 text-start'>{text}</li>
                                            </ol>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-nowrap my-5 gap-4'>
                                {Projects.technologiesLogo.map((image, imgIndex) => (
                                        <div key={imgIndex} className='flex flex-nowrap my-5 gap-4'>
                                            <img className='rounded-md h-12 w-11' src={image}/>
                                        </div>
                                    ))}

                                </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>


    </div>
    

  )
}

export default Main






                {/** 
                <div className="container flex flex-col items-center justify-center gap-11 mx-auto  bg-neutral-950 w-full mb-48">
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="border-2 rounded-md p-3 w-96 h-70">
                        <p className="text-center font-bold mb-3">Experience</p>
                        <p className="text-center">1+ years</p>
                        <p className="text-center mt-2">Software Development & Product Management</p>
                    </div>
                    <div className="border-2 rounded-md p-3 w-96 h-70">
                        <p className="text-center font-bold mb-3">Education</p>
                        <p className="text-center">BSc Honours Computer Science: 1st Class</p>
                        <p className="text-center">A Level: Computer Science - A*, Politics - A, Philosophy - A</p>
                    </div>
                    <div className="border-2 rounded-md p-3 w-96 h-70">
                        <p className="text-center font-bold mb-3">Skills</p>
                        <p className="text-center">Java, Python, React, SQL, APIs</p>
                        <p className="text-center">HTML, CSS, JavaScript, PySpark</p>
                    </div>
                    
                </div>
                </div>
                */}



                            {/* Column for Image 
                                <div className="flex justify-center items-center">
                                    <img
                                        className="rounded-3xl"
                                        src={Projects.image}
                                        height={200}
                                        width={200}
                                        alt={`${Projects.Title} image`}
                                    />
                                </div>
                                */}