import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
        <Link to='/'>
            <h1>CriptoWeb</h1>
        </Link>
    </div>
  )
}

export default NavBar