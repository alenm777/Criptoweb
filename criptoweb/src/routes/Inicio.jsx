import React from 'react'
import BuscadorMoneda from '../components/BuscadorMoneda'

const Inicio = ({coins}) => {
  return (
    <div>
      <BuscadorMoneda coins={coins} />
    </div>
  )
}

export default Inicio