import React from 'react'
import { useState } from 'react'
import './styles/App.css'
import Navbar from './navbar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home.jsx'
import Footer from './footer.jsx'
import Containerzudo from './containerzudo.jsx'
import Products from './products.jsx'

function App() {

  return ( 
      <>
      <Router>
        <Navbar />
          <Containerzudo customClass="min-height">
          <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          <Route path="/products" element={<Products />} > </Route>
          </Routes>
          </Containerzudo>
          <Footer />
      </Router>
      
      
      
      </>

  )
}

export default App
