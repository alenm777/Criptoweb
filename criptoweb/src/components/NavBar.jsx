import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CambiarTema from './CambiarTema';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { UserAuth } from '../Context/AuthContext';

const NavBar = () => {
const [nav, setNav] = useState(false)
const {user, logout} = UserAuth()
const navigate = useNavigate();

const handleNav = () => {
  setNav(!nav);
}

const handleSignOut = async () => {
  try {
await logout()
navigate('/')
  } catch (e) {
    console.log(e.message)
  }
}

  return (
    <div className='rounded-div flex items-center justify-between h-20 font-bold'>
        <Link to='/'>
        <button className='text-2xl bg-transparent border-none cursor-pointer'>
      <img src='/assets/html1-a81be232.png' alt='Logo' className='w-20 h-18 mr-2' />
    </button>
        </Link>
        <div className='hidden md:block'>
          <CambiarTema />
        </div>
      {user?.email ? (
        <div>
          <Link to='/cuenta' className='p-4'>Perfil</Link>
          <button onClick={handleSignOut}>Cerrar sesión</button>
        </div>
      ) : (
        <div className='hidden md:block'>
        <Link to='/acceder' className='p-4 hover:text-accent'> Iniciar sesión</Link>
        <Link to='/inscribirse' className='bg-button text-btnText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl'> Regístrarse </Link>
      </div>
      )}
        { /* Menu Icon */}
        <div onClick={handleNav} className='block md:hidden cursor-pointer z-10'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />} 
        </div>


        { /* Menu Celular*/}
<div className={nav ? 'md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10' 
: 'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300 ' }
>
  <ul className='w-full p-4'>
    <li onClick={handleNav} className='border-b py-6 '>
      <Link to='/'>Inicio</Link>
    </li>
    <li onClick={handleNav} className='border-b py-6 '>
      <Link to='/cuenta'>Cuenta</Link>
    </li>
<li className=' py-6 '>
  <CambiarTema />
</li>
  </ul>
  <div className='flex flex-col w-full p-4'>
    <Link to='/acceder'>
      <button onClick={handleNav} className='w-full my-2 p-3 bg-primary text-primary border border-secondary rounded-2xl shadow-xl'>Acceder</button>
    </Link>
    <Link to='/regístrate'>
      <button onClick={handleNav} className='w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl'>Regístrate</button>
    </Link>
  </div>
</div>
    </div>
  )
}

export default NavBar