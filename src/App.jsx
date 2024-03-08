import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/VansList'
import Van from './pages/Van'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Layout from './components/Layout'

// Mirage server
import { makeServer } from "./server"
import styled from 'styled-components'
import HostLayout from './components/HostLayout'

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
              
              <Route path="/host" element={<HostLayout />}>
                <Route path="/host/income" element={<Income />} />
                <Route path="/host/reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
