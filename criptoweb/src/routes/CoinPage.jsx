import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';
import {FaGithub} from 'react-icons/fa'
import DOMPurify from 'dompurify'

const CoinPage = () => {
const [coin, setCoin] = useState({})

const url = 'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&developer_data=true&sparkline=true'

useEffect(() => {
axios.get(url).then((response) => {
  setCoin(response.data)
  console.log(response.data)
})
},[url])

  return (
   <div>
    <div>
      <img src={coin.image?.large} alt="/" />
      <div>
        <p>Precio {coin?.name}</p>
        <p>({coin.symbol?.toUpperCase()} / USD) </p>
      </div>
    </div>

    <div>
      <div>
        <div>
          {coin.market_data?.current_price ? (
          <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
          ) : null}
          <p>7 Días</p>
        </div>
        <div>
        <Sparklines data={coin.market_data?.sparkline_7d?.price}>
       <SparklinesLine color='teal' />
        </Sparklines> 
        </div>
        <div>
          <div>
            <p>Capitalización de mercado</p>
            {coin.market_data?.market_cap ? (<p>${coin.market_data.market_cap.usd.toLocaleString()}</p>) : null}
          </div>
          <div>
            <p>Volumen (24hs)</p>
            {coin.market_data?.market_cap ? (<p>${coin.market_data.total_volume.usd.toLocaleString()}</p>) : null}
          </div>
        </div>


        <div>
          <div>
            <p>24hs alto</p>
            {coin.market_data?.high_24h ? (<p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
          <div>
            <p>24hs bajo</p>
            {coin.market_data?.low_24h ? (<p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
            ) : null}
          </div>
        </div>
      </div>

    <div>
      <p>Estadísticas de mercado</p>
      <div>
        <div>
          <p>Rango de mercado</p>
          {coin.market_cap_rank}
        </div>
        <div>
          <p>Algoritmos Hash</p>
          {coin.hashing_algorithm ? <p>{coin.hashing_algorithm}</p> : null}
        </div>
        <div>
          <p>Valoración</p>
{coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
        </div>
      </div>

<div>
  <div>
    <p>Cambio de precios (24hs) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_24h.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p>Cambio de precios (7D) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_7d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p>Cambio de precios (14D) </p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_14d.toFixed(2)} %</p>
    ) : null}
  </div>
</div>
<div>
  <div>
    <p>Cambio de precios (30D)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_30d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p>Cambio de precios (60D)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_60d.toFixed(2)} %</p>
    ) : null}
  </div>
  <div>
    <p>Cambio de precios (1A)</p>
    {coin.market_data ? (<p>{coin.market_data.price_change_percentage_1y.toFixed(2)} %</p>
    ) : null}
  </div>
</div>
<div>
  <FaGithub />
</div>
    </div>
    </div>

{ /* Description  */}
<div>
  <p>Sobre {coin.name}</p>
  <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coin.description ? coin.description.en : '') }}></p>
</div>
  </div>
  );
};

export default CoinPage;