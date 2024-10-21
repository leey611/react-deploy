import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeing'
import StyledButton from './StyledButton'

function App() {
  const [count, setCount] = useState(0)
  let my_name = "sydney"
  return (
    <>
      <div>
        hello
        <Greeting name="lily"/>
        <Greeting name={my_name} />
        <StyledButton />
        {/* <Greeting />
        <Greeting />
        <Greeting />
        <Greeting /> */}
      </div>
    </>
  )
}

export default App
