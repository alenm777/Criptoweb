import React, { useEffect, useState } from 'react'
import { TemaProvider } from './Context/Tema'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Inicio from './routes/Inicio'
import Acceder from './routes/Acceder'
import Inscribirse  from './routes/Inscribirse'
import Cuenta from './routes/Cuenta'
import CoinPage from './routes/CoinPage'
import axios from 'axios'

function App() {
const [coins, setCoins] = useState([])

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=true&locale=en'


useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
    console.log(response.data)
  })
},[url])

  return (
    <TemaProvider>
   <NavBar />
   <Routes>
    <Route path='/' element={<Inicio coins={coins} />} />
    <Route path='/acceder' element={<Acceder />} />
    <Route path='/inscribirse' element={<Inscribirse />} />
    <Route path='/cuenta' element={<Cuenta/>} />
    <Route path='/coin/:coinId' element={<CoinPage />}>
      <Route path=':coinId' />
    </Route>
   </Routes>
    </TemaProvider>
  )
}

export default App
