import React from 'react';
import {Container} from './styles';
import Card from '../Card';
const CardContainer = ({coins}) => {
    return (
        <Container>
            {coins && coins.map((coin) => <Card key={coin.id} {...coin} />)}
        </Container>
    );
};

export default CardContainer;
