import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { Tema } from '../Context/Tema'

const CambiarTema = () => {
const {tema, setThema} = useContext(Tema)

  return (
    <div>
{}
    </div>
  )
}

export default CambiarTema