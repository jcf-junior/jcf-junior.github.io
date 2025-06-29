import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './components/ProfileCard/ProfileCard.jsx'
import Home from './components/Home/Home.jsx'


function App() {

  return (
    <>
      <div className='app-container'>
        <ProfileCard />
        <Home/>
      </div>

    </>
  )
}

export default App
