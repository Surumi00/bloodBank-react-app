import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Homepage from './assets/components/Homepage'
import AddDonour from './assets/components/AddDonour'
import ViewDonour from './assets/components/ViewDonour'
import{BrowserRouter,Routes,Route}from'react-router-dom'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <Routes>
        <Route path='/' element={<Homepage/>}/>
       <Route path='/add' element={<AddDonour />} />
        <Route path='/Viewall' element={<ViewDonour />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
