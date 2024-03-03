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
        <footer>
          <Contact>
            <p>Add. 1 street pin 123456</p>
            <Copyright>copyright@2024</Copyright>
          </Contact>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App


const Contact = styled.div`
  width: 100%;
  text-align: center;
  bottom: 0;
  background-color: #190d05;
  color: #f6f2f0;
  height: 60px;
  padding-top: 0.5em;
`

const Copyright = styled.p`
  display: block;
  width: 100%;
  color: #cbc8c6;
  font-size: .75rem;
`