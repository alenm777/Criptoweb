import React, { useState } from 'react'
import CoinItem from './CoinItem';

const BuscadorMoneda = ({coins}) => {
    const [searchText, setSearchText] = useState('')
    //console.log(coins)
  return (
    <div className='rounded-div my-4 '>
    <div className='flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right'>
        <h1 className='text-2xl font-bold my-2 '>Buscar Cripto</h1>
        <form>
            <input onChange={(e) => setSearchText(e.target.value)}
              className='w-full bg-primary border border-input px-4 py-2 rounded-2xl shadow-xl'
              type="text"
               placeholder='Buscar una moneda' />
        </form>
    </div>
    <table className='w-full border-collapse text-center'>
        <thead>
            <tr className='border-b'>
                <th></th>
                <th className='px-4'>#</th>
                <th className='text-left'>Moneda</th>
                <th></th>
                <th>Precio</th>
                <th>24 hs</th>
                <th className='hidden md:table-cell'>24 hs Volumen</th>
                <th className='hidden sm:table-cell'>Capital de Mercado</th>
                <th>últimos 7 días</th>
            </tr>
        </thead>
        <tbody>
             {coins
             .filter((value) => {
                if(searchText === '') {
                    return value;
                } else if (
                    value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                    return value;
                }
             }).map((coin) => (
                <CoinItem key={coin.id} coin={coin} />
             ))}
        </tbody>
    </table>
    </div>
  )
}

export default BuscadorMoneda