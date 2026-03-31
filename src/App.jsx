import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import LoginForm from './Pages/Login';
import Checkout from './Pages/Checkout';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './context/Auth';
import ProductDetails from './Pages/productDetails';
import CartProvider from './context/Cart';
import Footer from './components/Footer';
function App() {
  return (
    <AuthProvider>
      <CartProvider>

          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/cart' element={<Checkout />} />
            <Route path='/product/:id' element={<ProductDetails />} />
          </Routes>
          <Footer/>
      </CartProvider>
    </AuthProvider>

  )
}

export default App
