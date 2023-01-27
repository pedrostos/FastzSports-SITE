import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar/navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home/home.jsx'
import Footer from './Footer/footer.jsx'
import Products from './Products/products.jsx'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/products" element={<Products />} > </Route>
        </Routes>
        <Footer />
      </Router>



    </>

  )
}

export default App
