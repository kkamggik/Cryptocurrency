import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import Coin from './Coin';
const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;
function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(url).then(res => {
      setCoins(res.data)
    }).catch(err => alert('api error'))
  },[])

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const filterCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input type="text" className="coin-input" 
          placeholder="Search" onChange={handleChange}/>
        </form>
      </div>
      {filterCoins.map(coin => {
        return(
          <Coin key={coin.id} name={coin.name} image={coin.image} 
          symbol={coin.symbol} price={coin.current_price} 
          marketcap={coin.market_cap} priceChange={coin.price_change_percentage_24h}
          volume={coin.total_volume}
          />
        )
      })}
    </div>
  );
}

export default App;
