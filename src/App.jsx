import { useEffect, useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Vans from './pages/Vans'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 

// Mirage server
import { makeServer } from "./server"
import styled from 'styled-components'

makeServer()

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Navbar>
            <Link to="/">Home</Link> <br />
            <Link to="/about">About</Link>
          </Navbar>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/vans" element={<Vans />} />
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


const Navbar = styled.nav`
  display: flex;
  width: 100vw;
  position: sticky;
  justify-content: right;
  align-items: center;
  gap: 1em;
  height: 50px;
  padding: 0.5em 1em;
  background-color: #190d05;
  a {
    text-decoration: none;
    color: #f6f2f0;
  }
  a:hover{
    color: #cd5302;
  }
`

const Contact = styled.div`
  position: fixed;
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