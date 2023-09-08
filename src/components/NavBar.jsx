import React from 'react'
import { Link } from 'react-router-dom'
import CambiarTema from './CambiarTema'
import {AiOutlineMenu} from 'react-icons/ai'

const NavBar = () => {
  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to='/'>
            <h1 className='text-2xl'>CriptoWeb</h1>
        </Link>
        <div className='hidden md:block'>
          <CambiarTema />
        </div>
        <div className='hidden md:block'>
          <Link to='/acceder' className='p-4 hover:text-accent'> Acceder </Link>
          <Link to='/regístrate' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'> Regístrate </Link>
        </div>
        { /* Menu Icon */}
        <div className='block md:hidden cursor-pointer z-10'>
          <AiOutlineMenu />
        </div>

        { /* Menu Celular*/}
<div className='md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10'>
  <ul>
    <li>
      <Link to='/'>Inicio</Link>
    </li>
    <li>
      <Link to='/'>Cuenta</Link>
    </li>
<li>
  <CambiarTema />
</li>
  </ul>
  <div>
    <Link to='/acceder'>
      <button>Acceder</button>
    </Link>
    <Link to='/regístrate'>
      <button>Regístrate</button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default NavBar