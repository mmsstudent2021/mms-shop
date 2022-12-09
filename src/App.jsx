import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import ProductDetail from './pages/ProductDetail'
import Products from './pages/Products'
import './styles.css'

const App = () => {
  return (
    <div className='container mx-auto bg-primary'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
      </Routes>
    </div>
  )
}

export default App