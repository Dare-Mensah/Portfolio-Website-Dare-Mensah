import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/projectpage.css';
import arrow from '../assets/arrow_right.png'

function ProjectPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;

    if (!project) {
        return (
            <div className="root" style={{ paddingTop: '400px' }}>
                <h1 style={{ color: 'white' }}>Project not found</h1>
                <button style={{ color: 'white' }} onClick={() => navigate('/')}>Go Back</button>
            </div>
        );
    }

    return (
        <div className='root'>
            <div className='pp_section'>
                <div className='pp_layout'>
                    <motion.div>
                        <button className="back_button" onClick={() => navigate('/projectpicker')}>
                            <img src={arrow} className='arrow_image' width={30} height={30}/>
                            <p className='back_text'>Back</p>
                        </button>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className='my_name_header'
                    >
                        {project.title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="project_details_container"
                    >
                        <img
                            src={project.image2}
                            alt={project.title}
                            style={{ width: '100%', maxWidth: '600px', borderRadius: '20px' }}
                        />

                        <div>
                            <p className="project_description" style={{ marginTop: '20px', color: 'white' }}>
                                {project.description}
                            </p>

                            <p className="project_description_list" style={{ marginTop: '20px', color: 'white' }}>
                                {project.description_list.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </p>

                            {project.link && (
                                <a href={project.link} target="_blank" rel="noreferrer" className="external_link">
                                    View Live Demo
                                </a>
                            )}
                        </div>
                    </motion.div>


                </div>
            </div>
        </div>
    );
}

export default ProjectPage;