import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sclass from './Sclass'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <>
    <h1>출석부</h1>
     <Sclass></Sclass>
    </>
  )
}

export default App
