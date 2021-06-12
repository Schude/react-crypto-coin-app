import React, {useEffect, useState} from 'react';
import fetcher from '../../utils/APICall';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import LoadingSpinner from './LoadingSpinner';
import {formatDate, formatHours} from '../../utils/FormatDates';
const Chart = ({name}) => {
    const [data, setData] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [days, setDays] = useState({
        count: 1,
        interval: 'hourly',
        func: formatHours,
    });
    useEffect(() => {
        callAPI();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, days]);

    const callAPI = async () => {
        setIsLoaded(false);

        const ress = await fetcher(
            `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=${days.count}&interval=${days.interval}`
        );
        setData(
            ress.prices.map((price) => {
                var c = new Date(price[0]);
                return {
                    name: name,
                    date: days.func(c),
                    price: price[1].toFixed(5),
                };
            })
        );
        setIsLoaded(true);
    };
    const handleClicks = ({target}) => {
        if (target.value !== '1') {
            setDays({count: target.value, interval: 'daily', func: formatDate});
        } else {
            setDays({
                count: target.value,
                interval: 'hourly',
                func: formatHours,
            });
        }
    };

    return (
        <div>
            <button onClick={handleClicks} value="1">
                24 hours{' '}
            </button>
            <button onClick={handleClicks} value="7">
                {' '}
                7 Days{' '}
            </button>
            <button onClick={handleClicks} value="14">
                {' '}
                14 Days{' '}
            </button>
            <button onClick={handleClicks} value="30">
                30 Days{' '}
            </button>
            <button onClick={handleClicks} value="90">
                {' '}
                90 Days{' '}
            </button>
            <button onClick={handleClicks} value="180">
                {' '}
                180 Days{' '}
            </button>

            {/* Chart Container
            ItemSection
                Buttonlar Content,
                Renkler
            
            */}
            <div
                style={{
                    height: '350px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {!isLoaded ? (
                    <LoadingSpinner />
                ) : (
                    <ResponsiveContainer  width={1000}>
                        <AreaChart
                            data={data}
                            c
                            margin={{
                                top: 20,
                                right: 20,
                                left: 20,
                                bottom: 30,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                angle={-45}
                                textAnchor="end"
                                dataKey="date"
                            />
                            <YAxis
                                tickCount={10}
                                type="number"
                                domain={[(dataMin) => dataMin, 'auto']}
                            />
                            <Tooltip />
                            <Area
                                type="monotone"
                                dataKey="price"
                                stroke="#191b37"
                                fill="#1c1e33"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                )}
            </div>
        </div>
    );
};

export default Chart;
