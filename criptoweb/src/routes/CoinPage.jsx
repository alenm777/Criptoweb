import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaGithub, FaLinkedin, FaTwitter, FaBriefcase } from 'react-icons/fa'
import DOMPurify from 'dompurify'
import { useParams } from 'react-router-dom';

const CoinPage = () => {
const [coin, setCoin] = useState({})
const params = useParams()

const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}?localization=false&developer_data=true&sparkline=true`

useEffect(() => {
axios.get(url).then((response) => {
  setCoin(response.data)
  console.log(response.data)
})
},[url])

  return (
   <div className='rounded-div my-12 py-8'>
    <div className='flex py-8'>
      <img className='w-20 mr-8' src={coin.image?.large} alt="/" />
      <div >
        <p className='text-3xl font-bold'>Precio {coin?.name}</p>
        <p>({coin.symbol?.toUpperCase()} / USD) </p>
      </div>
    </div>

    <div className='grid md:grid-cols-2 gap-8'>
      <div>
        <div className='flex justify-between'>
          {coin.market_data?.current_price ? (
          <p className='text-3xl font-bold'>${coin.market_data.current_price.usd.toLocaleString()}</p>
          ) : null}
          <p>7 Días</p>
        </div>
        <div>
        <Sparklines data={coin.market_data?.sparkline_7d?.price}>
       <SparklinesLine color='teal' />
        </Sparklines> 
        </div>
        <div className='flex justify-between py-4 '>
          <div>
            <p className='text-gray-500 text-sm'>Capitalización de mercado</p>
            {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
          </div>
          <div>
            <p className='text-gray-500 text-sm'>Volumen (24hs)</p>
            {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
          </div>
        </div>


        <div className='flex justify-between py-4'>
          <div>
            <p className='text-gray-500 text-sm'>24hs alto</p>
            {coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <p className='text-gray-500 text-sm'>24hs bajo</p>
            {coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
        </div>
      </div>

    <div>
      <p className='text-xl font-bold'>Estadísticas de mercado</p>
      <div className='flex justify-between py-4'>
        <div >
          <p className='text-gray-500 text-sm'>Rango de mercado</p>
          {coin.market_cap_rank}
        </div>
        <div>
          <p  className='text-gray-500 text-sm'>Algoritmos Hash</p>
          {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
        </div>
        <div>
          <p className='text-gray-500 text-sm'>Valoración</p>
{coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
        </div>
      </div>

<div className='flex justify-between py-4'>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (24hs) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (7D) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (14D) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)} %</p>
    ) : null}
  </div>
</div>
<div className='flex justify-between py-4'>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (30D)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (60D)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p className='text-gray-500 text-sm'>Cambio de precios (1A)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)} %</p>
    ) : null}
  </div>
</div>
<div className='flex justify-around p-8 text-accent'>
  <FaGithub />
  <FaLinkedin />
  <FaTwitter />
  <FaBriefcase />
</div>
    </div>
    </div>

{ /* Description  */}
<div className='py-4'>
  <p className='text-xl font-bold'>Sobre {coin.name}</p>
  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin.description ? coin.description.en : '') }}></p>
</div>
  </div>
  );
};

export default CoinPage;