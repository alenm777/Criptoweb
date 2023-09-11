import React from 'react'
import { TemaProvider } from './Context/Tema'
import NavBar from './components/NavBar'

function App() {
  return (
    <TemaProvider>
  <NavBar />
    
    </TemaProvider>
  )
}

export default App
