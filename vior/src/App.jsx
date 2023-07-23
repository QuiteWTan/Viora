import { useState } from 'react'
import Navbar from './Navbar'
import LandingPage from '../src/LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import TopUtil from './TopUtil'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import RegisterPage from './Register/RegisterPage'
import ParentComponent from './TestPage/testPage'
import ProductListPage from './Product/ProductListPage'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/test" element={<ParentComponent />} />
        <Route path="/shop" element={<ProductListPage />} />
      </Routes>
    </Router>
  );
};

export default App
