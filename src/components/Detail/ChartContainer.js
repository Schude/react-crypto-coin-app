import React, {useEffect, useState} from 'react';
import LoadingSpinner from './LoadingSpinner';
import ButtonsContainer from './ButtonsContainer';
import Chart from './Chart';
import {ChartWrapper} from './styles';
import {formatDate, formatHours} from '../../utils/';
import axios from 'axios';
const ChartContainer = ({name}) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [chartParams, setchartParams] = useState({
        count: 1,
        interval: 'hourly',
        func: formatHours,
    });
    useEffect(() => {
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, chartParams]);

    const callAPI = async () => {
        setIsLoaded(false);
        const res = await axios.get(
            `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${chartParams.count}&interval=${chartParams.interval}`
        );
        setData(formatData(res.data.prices, chartParams));
        setIsLoaded(true);
    };

    const handleClicks = ({target}) => {
        setchartParams(
            target.value !== '1'
                ? {
                      count: target.value,
                      interval: 'daily',
                      func: formatDate,
                  }
                : {
                      count: target.value,
                      interval: 'hourly',
                      func: formatHours,
                  }
        );
    };
    const formatData = (data) => {
        return data.map((item) => {
            let timestamp = new Date(item[0]);
            return {
                date: chartParams.func(timestamp),
                price: item[1].toFixed(4),
            };
        });
    };
    return (
        <div >
            <ButtonsContainer handleClicks={handleClicks} />
            <ChartWrapper>
                {!isLoaded ? <LoadingSpinner /> : <Chart data={data} />}
            </ChartWrapper>
        </div>
    );
};

export default ChartContainer;
