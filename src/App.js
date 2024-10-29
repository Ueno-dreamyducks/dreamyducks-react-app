import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomepageMain from './components/pages/HomepageMain/HomepageMain.js';
import EQL from './components/pages/ElementQuickLearn/EQL.js';
import NoPageFound from './components/pages/NoPageFound/NoPageFound.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/dreamyducks-react-app'>
        <Routes>
            <Route index element={<HomepageMain  />} />
            <Route path="projects" element={<HomepageMain />} />
            <Route path="projects/eql" element={<EQL />} />
            <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
