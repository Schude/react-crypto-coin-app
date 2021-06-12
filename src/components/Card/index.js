import React, {useState} from 'react';
import {Title, Section, SectionItem,Button} from '../SharedStyles';
import {CardWrapper, } from './styles';
import {fixNumber, Colored} from '../../utils';
import Content from './Content';
import Detail from '../Detail';

const Card = ({coin,symbol}) => {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen((prev) => (prev = !prev));
    };
    return (
        <CardWrapper>
            <Section>
                <Title>
                    <img src={coin.image} alt={coin.name} width="28px" />
                    <Content text={coin.symbol.toUpperCase()} />
                    <Content
                        clr={Colored(coin.price_change_percentage_24h)}
                        text={`${fixNumber(coin.price_change_percentage_24h)}%`}
                    />
                </Title>
            </Section>
            <Section>
                <SectionItem>
                    <Content text="Lowest in 24h" />
                    <Content text={`${fixNumber(coin.low_24h)} ${symbol}` } />
                </SectionItem>
                <SectionItem>
                    <Content text="Current Price" />
                    <Content text={`${fixNumber(coin.current_price)}${symbol}`} />
                </SectionItem>
                <SectionItem>
                    <Content text="Highest in 24h" />
                    <Content text={`${fixNumber(coin.high_24h)}${symbol}`} />
                </SectionItem>
            </Section>
            <Section>
                {isOpen && (
                    <Detail
                    symbol={symbol}
                        coin={coin}
                        toggleOpen={setIsOpen}
                        handleClose={togglePopup}
                    />
                )}

                <Button onClick={togglePopup}> Show More!</Button>
            </Section>
        </CardWrapper>
    );
};

export default Card;
