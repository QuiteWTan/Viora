import { useState } from 'react'
import Navbar from './Navbar'
import HomePage from '../src/HomePage/HomePage'
import TopUtil from './TopUtil'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
};

export default App
