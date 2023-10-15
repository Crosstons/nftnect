import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Upload from './components/Upload';
import Profile from './components/Profile';

function App() {
  return (
    <div className='font-qus'>
    <Router>
          <Navigation />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/upload' element={<Upload />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
        </Router>
        </div>
  );
}

export default App;
