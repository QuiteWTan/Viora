import { useState } from 'react'
import Navbar from './Navbar'
import LandingPage from '../src/LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import TopUtil from './TopUtil'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import RegisterPage from './Register/RegisterPage'
import ProductPage from './Product/ProductPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/shop" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App
