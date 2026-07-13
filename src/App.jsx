import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './assets/components/Homepage'
import AddDonour from './assets/components/AddDonour'
import ViewDonour from './assets/components/ViewDonour'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Homepage/>
      <AddDonour/>
      <ViewDonour/>
    </>
  )
}

export default App
