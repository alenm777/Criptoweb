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
        <div>
          <CambiarTema />
        </div>
        <div>
          <Link to='/acceder'> Acceder </Link>
          <Link to='/regístrate'> Regístrate </Link>
        </div>
        { /* Menu Icon */}
        <div>
          <AiOutlineMenu />
        </div>

        { /* Menu Celular*/}
<div>
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