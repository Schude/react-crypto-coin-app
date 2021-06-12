import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import Card from '../Card';

const CardContainer = ({coins, searchQuery, symbol}) => {
    const [filtered, setFiltered] = useState([]);
    useEffect(() => {
        setFiltered(
            coins.filter((crypto) =>
                crypto.name.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    }, [coins, searchQuery]);
    return (
        <Container>
            {coins.length &&
                filtered.map((coin) => (
                    <Card key={coin.id} symbol={symbol} coin={coin} />
                ))}
        </Container>
    );
};
// coins.map((coin) => <Card key={coin.id} coin={coin} />)
export default CardContainer;
