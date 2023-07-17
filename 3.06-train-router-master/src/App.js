import React from 'react';
import Navbar from './Navbar';
import Station from './Station';
import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<h2>Welcome Home!</h2>}/>
        <Route path="/union-square" element={<Station stationId="82bd"/>}/>
        <Route path="/times-square" element={<Station stationId="84ac"/>}/>
        <Route path="/atlantic-avenue" element={<Station stationId="d2c6"/>}/>
        <Route path="/fulton-street" element={<Station stationId="3cf6"/>}/>
        <Route path="/125 St" element={<Station stationId="c451"/>}/>
      </Routes>
    </div>
  );
}

export default App;
