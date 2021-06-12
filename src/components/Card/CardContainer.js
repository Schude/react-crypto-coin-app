import React, {useState} from 'react';
import {CardWrapper, Title, Section, SectionItem, Button} from './styles';
import fixNumber from '../../utils/FixNumber';
import Content from './Content';
import Colored from '../../utils/Colored';
import Detail from '../Detail';
const CardContainer = (coin) => {
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
                    <Content text={`${fixNumber(coin.low_24h)}$`} />
                </SectionItem>
                <SectionItem>
                    <Content text="Current Price" />
                    <Content text={`${fixNumber(coin.current_price)}$`} />
                </SectionItem>
                <SectionItem>
                    <Content text="Highest in 24h" />
                    <Content text={`${fixNumber(coin.high_24h)}$`} />
                </SectionItem>
            </Section>
            <Section>
                {isOpen && (
                    <Detail
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

export default CardContainer;
