import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import AddProduct from './addProduct/AddProduct';
import ProductDetailPage from './components/Product/ProductDetailPage';
import ProductInfoCard from './components/ProductInfoCard/ProductInfoCard';
import FAQuest from './Footer/FAQuest';
import Help from './Footer/Help';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home'; // Import your home component
import Image from './pages/Image';
import Login from './pages/Login';
import ProductRegistrationPage from './pages/ProductRegistrationPage';
import Products from './pages/Products'; // Import your products component
import Profile from './pages/Profile';
import Register from './pages/Register';
import Workflow from './workflow/Workflow';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
        <Route path="/products/:machineId" element={<ProductDetailPage />} />
        <Route path='/add_tools' element={<ProductRegistrationPage />} />
        <Route path='/info_card' element={<ProductInfoCard />} />
        <Route path='/about' element={<About />} />
        <Route path='/trial' element={<Image />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<FAQuest />} />
        <Route path="/workflow" element={<Workflow />} />



        {/* Add more Route components for other pages as needed */}
      </Routes>
    </Router>
  );
}

export default App;
