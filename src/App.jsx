import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import VansList from './pages/VansList'
import Van from './pages/Van'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import HostVanInfo from './pages/Host/HostVanInfo'
import HostVanPricing from './pages/Host/HostVanPricing'
import HostVanPhotos from './pages/Host/HostVanPhotos'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom' 
import Layout from './components/Layout'

// Mirage server
import { makeServer } from "./server"
import HostLayout from './components/HostLayout'
import HostVanDetails from './pages/Host/HostVanDetails'

makeServer()

function App() {

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route element={ <Layout /> }>
              <Route index element={<Home />} />
              <Route path="about" element={<About/>} />
              <Route path="vans" element={<VansList />} />
              <Route path="vans/van/:id" element={<Van />} />
              
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} /> 
                <Route path="income" element={<Income />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetails />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path='pricing' element={<HostVanPricing/>} />
                  <Route path='photos' element={<HostVanPhotos/>} />
                </Route>
                <Route path="reviews" element={<Reviews />} />
              </Route>
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </>
  )
}

export default App
