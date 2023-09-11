import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'

const BuscadorMoneda = ({coins}) => {
    //console.log(coins)
  return (
    <div>
    <div>
        <h1>Buscar Criptomoneda</h1>
        <form>
            <input type="text" placeholder='Buscar una moneda' />
        </form>
    </div>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>#</th>
                <th>Moneda</th>
                <th></th>
                <th>Precio</th>
                <th>24 hs</th>
                <th>24 hs Volumen</th>
                <th>Mkt</th>
                <th>últimos 7 días</th>
            </tr>
        </thead>
        <tbody>
             {coins.map(() => (
                <tr>
                    <td><AiOutlineStar /></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
             ))}
        </tbody>
    </table>
    </div>
  )
}

export default BuscadorMoneda