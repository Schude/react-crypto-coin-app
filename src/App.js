import './App.css';
import {useEffect, useState} from 'react';
import CardContainer from './components/CardContainer';
import Search from './components/Search';
import axios from 'axios';

function App() {
    const [data, setData] = useState([]);
    const [searchV, setSearchV] = useState('');
    const [currency, setCurrency] = useState({name: 'usd', symbol: '$'});
    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);

    const fetchData = async () => {
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}&order=market_cap_desc&per_page=60&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d%2C1y`
        );
        setData(res.data);
    };
    return (
        <div className="App">
            <Search
                setCurrency={setCurrency}
                searchV={searchV}
                setSearchV={setSearchV}
            />
            <CardContainer
                symbol={currency.symbol}
                searchQuery={searchV}
                coins={data}
            />
        </div>
    );
}

export default App;
