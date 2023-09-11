import React, { useContext } from 'react'
import { HiSun, HiMoon } from 'react-icons/hi'
import { Tema } from '../Context/Tema'

const CambiarTema = () => {
const {tema, setTema} = useContext(Tema)

  return (
    <div className='p-2'>
{tema === 'dark' ? (
  <div className='flex items-center cursor-pointer' onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}>
    <HiSun className='text-primary text-2x1 mr-2'/> Modo Claro
    </div>
) : (
<div className='flex items-center cursor-pointer' onClick={() => setTema(tema === 'dark' ? 'light' : 'dark')}> 
<HiMoon/> Modo Oscuro </div>
)}
    </div>
  );
};

export default CambiarTema;