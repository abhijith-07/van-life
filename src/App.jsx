import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 

function App() {
  return (
    <>
      <BrowserRouter>
        <Link to="/">Home</Link> <br />
        <Link to="/about">About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
