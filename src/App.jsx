import { useState } from 'react'

import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import MainSection from './components/MainSection'

function App() {
  

  return (
    <div className='app'>
      <Nav />
      <MainSection />
      <Footer />
    </div>
  )
}

export default App
