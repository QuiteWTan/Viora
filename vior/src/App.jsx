import { useState } from 'react'
import Navbar from './Navbar'
import LandingPage from '../src/LandingPage/LandingPage'
import LoginPage from './LoginPage/LoginPage'
import TopUtil from './TopUtil'
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import RegisterPage from './Register/RegisterPage'
import ProductPage from './Product/ProductPage'
import Blog from './ResourcesPage/BlogPage'
import ProductInfo from './ProductInfo/ProductInfo'
import CartPage from './Product/CartPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shop" element={<ProductPage />} />
        <Route path="/blog" element = {<Blog/>}/>
        <Route path="/product" element = {<ProductInfo/>}/>
        <Route path="/cart" element = {<CartPage/>}/>
      </Routes>
    </Router>
  );
};

export default App
