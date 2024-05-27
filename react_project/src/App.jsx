import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keyboard from './components/keyboard'
import Key from './components/key'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <h1>React Keyboard App</h1> */}
      {
       <Keyboard /> 
        
      }
    </div>
  )
}

export default App
