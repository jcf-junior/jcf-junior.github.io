import { useState } from 'react'
import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Home from './components/Home/Home.jsx'


function App() {

  return (
    <>
      <div class="lines">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
      </div>
      <div className='app-container'>
          <ProfileCard />
          <Home/>
      </div>

      
    </>
  )
}

export default App
