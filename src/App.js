import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomepageMain from './components/pages/HomepageMain/HomepageMain.js';
import EQL from './components/pages/ElementQuickLearn/EQL.js';
import NoPageFound from './components/pages/NoPageFound/NoPageFound.js';


function App() {
  return (
    <div className="App">
      <Routes basename='/dreamyducks-react-app'>
            <Route index element={<HomepageMain  />} />
            <Route path="projects" element={<HomepageMain />} />
            <Route path="projects/eql" element={<EQL />} />
            <Route path="*" element={<NoPageFound />} />
      </Routes>
    </div>
  );
}

export default App;
