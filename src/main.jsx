import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Destination from './routes/Destination'
import Crew from './routes/Crew'
import Technology from './routes/Technology'
import Layout from './Layout'
import Home from './routes/Home'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Layout>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/destination' element={<Destination/>} />
    <Route path='/crew' element={<Crew/>} />
    <Route path='/technology' element={<Technology/>} />
  </Routes>
  </Layout>
  </BrowserRouter>
  </React.StrictMode>
)
