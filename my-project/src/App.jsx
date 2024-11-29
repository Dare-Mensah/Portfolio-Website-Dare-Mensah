import React from 'react'
import Navbar from './Navbar'
import Main from './MainPage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <Router>
      <div className='overflow-x-hidden'>
        <Navbar />
        <Main/>
      </div>
    </Router>
  );
};


export default App