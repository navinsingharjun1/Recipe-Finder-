import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeFinder from './Components/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RecipeFinder/>
    </>
  )
}

export default App
