import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/VansList'
import Van from './pages/Van'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 

// Mirage server
import { makeServer } from "./server"
import styled from 'styled-components'
import Layout from './components/Layout'

makeServer()

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route element={ <Layout /> }>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About/>} />
              <Route path="/vans" element={<VansList />} />
              <Route path="/vans/van/:id" element={<Van />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
