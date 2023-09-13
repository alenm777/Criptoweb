import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const SavedCoin = () => {
const [coins, setCoins ] = useState([])

  return (
    <div>
      {coins.length === 0 ? ( <p>
        No tienes ninguna moneda guardada. Guarda una moneda para añadirla a tu lista. 
        <Link to='/'>Pulse aquí para buscar monedas
        </Link>
        </p> ) : (
            <table>
                <thead>
                    <tr>
                    <th>Posición #</th>
                    <th>Moneda</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
<tbody>
    {coins.map((coin) => (
        <tr key={coin.id}>
            <td>{coin?.rank}</td>
            <td>
                <Link to={`/coin/${coin.id}`}>
                    <div>
                        <img src={coin?.image} alt="/" />
                        <div>
                            <p>{coin?.name}</p>
                            <p>{coin?.symbol.toUpperCase()}</p>
                        </div>
                    </div>
                </Link>
            </td>
            <td>
                <AiOutlineClose className='cursor-pointer' />
            </td>
        </tr>
    ))}
</tbody>
        </table>
        )}
    </div>
  );
};

export default SavedCoin