import React from 'react'
import SavedCoin from '../components/SavedCoin'

const cuenta = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Cuenta</h1>
          <div>
            <p>Bienvenido, Usuario</p>
          </div>
        </div>
        <div>
          <button>Cerrar sesión</button>
        </div>
      </div>
      <div>
        <div>
          <h1>Lista de seguimiento</h1>
          <SavedCoin />
        </div>
      </div>
    </div>
  )
}

export default cuenta