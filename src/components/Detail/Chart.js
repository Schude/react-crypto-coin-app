import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const Chart = ({data}) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{bottom: 20}}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis angle={-45} textAnchor="end" dataKey="date" />
                <YAxis tickCount={8} type="number" domain={['auto', 'auto']} />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="price"
                    stroke="#191b37"
                    fill="#1c1e33"
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Chart;
