import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/layout/Navbar'
import Interface from './components/layout/Interface'
import AppRoutes from './routes.jsx'
import MenuMobile from './components/layout/MenuMobile/index.jsx'

function App() {

  
    
  return (
    <>
    <MenuMobile/>
    <AppRoutes/>
    
    </>
  )
}

export default App
