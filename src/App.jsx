import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Menu from './components/Menu'
import Service from './components/Service'
import Footer from './components/Footer'
import ThemeController from './components/ThemeController'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ThemeController></ThemeController>
        <Navbar></Navbar>
        <Menu></Menu>
        <Service></Service>
        <Footer></Footer>
      </div>

    </> 
  )
}

export default App
