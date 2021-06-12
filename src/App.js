import './App.css';
import {useEffect, useState} from 'react';
import fetcher from './utils/APICall';
import CardContainer from './components/CardContainer';
function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const callAPI = async () => {
        const ress = await fetcher(
            'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=99&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C200d%2C1y'
        );
        setData(...data, ress);
    };

    return (
        <div className="App">
            <CardContainer coins={data} />
        </div>
    );
}

export default App;
