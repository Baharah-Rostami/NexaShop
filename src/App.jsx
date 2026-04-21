import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import LoginForm from './Pages/Login';
import Checkout from './Pages/Checkout';
import Navbar from './components/Navbar/Navbar';
import AuthProvider from './context/Auth';
import ProductDetails from './Pages/productDetails';
import Footer from './components/Footer';
import { FavoriteProvider } from './context/Favorite';
import Favorites from './Pages/Favorite';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <AuthProvider>
     <ThemeProvider>
           <FavoriteProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/cart' element={<Checkout />} />
            <Route path='/product/:id' element={<ProductDetails />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
          <Footer />
      </FavoriteProvider>
     </ThemeProvider>
   
    </AuthProvider>

  )
}

export default App
