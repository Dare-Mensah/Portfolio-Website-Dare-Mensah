import React, { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import ReactDOM from "react-dom/client";
import Layout from './pages/layout.jsx';
import HomePage from './pages/homepage.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<HomePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
