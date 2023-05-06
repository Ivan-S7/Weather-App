import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import WeatherPanel from './Components/WeatherPanel'


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <NavBar/>
      <WeatherPanel/>
      
      
    </>
  )
}

export default App
