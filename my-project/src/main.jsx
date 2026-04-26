import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import ReactDOM from "react-dom/client";
import Layout from './pages/layout.jsx';
import HomePage from './pages/homepage.jsx'
import Projectspicker from './pages/projectspicker.jsx'
import ProjectPage from './pages/projectpage.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<HomePage/>} />
          <Route path="/projectpicker" element={<Projectspicker/>} />
          <Route path="/projectpage" element={<ProjectPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
