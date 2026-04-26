import ClimateSenseImage from '../assets/ClimateSense1.png'
import ClimateSenseImage2 from '../assets/climatechangeapp.png'
//import ClimateSenseHomepageTablet from '../../assets/ClimateSenseHomepageTablet.jpg'
//import ClimateSenseLoginScreen from '../../assets/ClimateSenseLoginScreen.jpg'
import FitnessAppImage from '../assets/WellApp.png'
import FitnessAppImage2 from '../assets/wellbeingapp.png'
//import FDMWellbeingHomepageTwo from'../../assets/FDMWellbeingHomepageTwo.jpg'
import Spotify from '../assets/SpotifyAnalysisImage.png'
import Rooted3 from '../assets/Rooted3.png'
import Rooted2 from '../assets/Rooted2.jpg'
import ChromeExtension from '../assets/ChromeExtension.png'
import LockIn from '../assets/LockIn.png'
import LockIn2 from '../assets/lockIn_App.png'
  
  const Projects = [
    {
      id: 1,
      color: '#120F17',
      image: ClimateSenseImage,
      image2: ClimateSenseImage2,
      url: 'https://github.com/Dare-Mensah/Climate-Change-App',
      title: 'Climate Sense',
      description: 'The Climate Sense project aimed to develop a React Native mobile application that raises climate change awareness and fosters eco-friendly behaviors through engaging and educational features.',
      //technologiesLogo: [pythonLogo,firebase,reactLogo],
      description_list: ['Server and NLP: Python Flask server utilized spaCy for NLP preprocessing and TF-IDF for term extraction, ensuring climate-relevant content in the game.', 'APIs and Libraries: Integrated APIs for news content, Firebase for real-time data synchronization, and Flask-SocketIO for multiplayer functionality.', ' Development Environment: Built using React Native Expo for cross-platform compatibility (Android and iOS), with Firebase providing backend services for user authentication and data storage.']
    },

    {
      id: 2,
      color: '#120F17',
      image: FitnessAppImage,
      image2: FitnessAppImage2,
      url: 'https://github.com/Techno504/FDMWellbeingApp',
      title: 'FDM WellbeingApp',
      height: 400,
      description: 'The FDM Wellbeing App was a cross-platform mobile application developed using React Native and Firebase to enhance employee well-being and mental health.',
      //technologiesLogo: [firebase,reactLogo],
      description_list: ['Well-being Focus: Designed to support mental health initiatives, offering tools and features aimed at improving employee wellness.', 'Firebase Integration: Facilitated secure data storage and real-time synchronization for user information and app interactions.', 'React Native Framework: Enabled the development of a robust and responsive app compatible with both iOS and Android platforms.']
    },

    {
      id: 3,
      color: '#120F17',
      url: 'https://github.com/Techno504/FDMWellbeingApp',
      image: Rooted3,
      image2: Rooted2,
      title: 'Rooted Website',
      height: 400,
      description: 'A personalised digital platform designed to help individuals with type 3–4 hair discover, manage, and care for their hair through tailored recommendations, curated styles, and AI-driven guidance.',
      //technologiesLogo: [pythonLogo,gephiLogo],
      description_list: ['Designing an AI-powered assistant to provide tailored hair care advice based on stored user profiles', 'Structuring the system to separate user data (database) from AI logic for scalable personalisation', 'Developing a personalised dashboard that adapts content and recommendations based on user data']
    },

    {
      id: 4,
      color: '#120F17',
      image: LockIn,
      image2: LockIn2,
      title: 'LockIn App',
      url: 'https://github.com/Techno504/FDMWellbeingApp',
      height: 400,
      description: 'A mobile focus and productivity app that helps users stay disciplined by blocking distracting apps, tracking focus sessions, and building consistent habits through streaks and analytics.',
      //technologiesLogo: [pythonLogo,gephiLogo],
      description_list: ['Exploring Android-native capabilities (Usage Stats, background services) to enable app restriction.', 'Creating a clean, modern UI focused on simplicity and user motivation.', 'Structuring the app with scalable state management and local data persistence in mind.']
    },
    
  ]

  export default Projects;