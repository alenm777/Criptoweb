import React from 'react'
import BuscadorMoneda from '../components/BuscadorMoneda'
import Tendencias from '../components/Tendencias'

const Inicio = ({coins}) => {
  return (
    <div>
      <BuscadorMoneda coins={coins} />
      <Tendencias />
    </div>
  )
}

export default Inicio