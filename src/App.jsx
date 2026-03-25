import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import LoginForm from './Pages/Login';
import Checkout from './Pages/Checkout';
import Navbar from './components/Navbar';
import AuthProvider from './context/Auth';
function App() {
  return (
    <AuthProvider>
       <div>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginForm/>}/>
    <Route path='/checkout' element={<Checkout/>}/>
   </Routes>
   </div>
    </AuthProvider>
  
  )
}

export default App
