import React from 'react'
import { useState } from 'react'
import './styles/App.css'
import Navbar from './navbar.jsx'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './home.jsx'

function App() {

  return ( 
      <>
      <Router>
        <Navbar />
          <Routes>
          <Route exact path="/" element={<Home />} > </Route>
          </Routes>
      </Router>
      
      
      
      </>

  )
}

export default App
