import React from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
                <th>Capital de Mercado</th>
                <th>últimos 7 días</th>
            </tr>
        </thead>
        <tbody>
             {coins.map((coin) => (
                <tr>
                    <td><AiOutlineStar /></td>
                    <td>{coin.market_cap_rank}</td>
                    <td>
                        <div>
                            <img src={coin.image} alt={coin.id} />
                            <p>{coin.name}</p>
                        </div>
                        </td>
                    <td>{coin.symbol}</td>
                    <td>{coin.current_price}</td>
                    <td>{coin.price_change_percentage_24h}</td>
                    <td>{coin.total_volume}</td>
                    <td>{coin.market_cap}</td>
                    <td>
                       <Sparklines data={coin.sparkline_in_7d.price}>
                       <SparklinesLine color='green' />
                        </Sparklines> 
                    </td>
                </tr>
             ))}
        </tbody>
    </table>
    </div>
  )
}

export default BuscadorMoneda