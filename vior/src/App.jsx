import { useState } from 'react'
import Navbar from './Navbar'
import HomePage from '../src/HomePage/HomePage'
import LoginPage from './LoginPage/LoginPage'
import TopUtil from './TopUtil'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import RegisterPage from './Register/RegisterPage'
import ParentComponent from './TestPage/testPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<ParentComponent />} />
        <Route path="/product" element={<ParentComponent />} />
      </Routes>
    </Router>
  );
};

export default App
