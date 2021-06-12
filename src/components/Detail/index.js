import React, {useRef, useEffect} from 'react';
import {CloseButton, DetailContainer} from './styles';
import {SectionItem, Title, Section} from '../Card/styles';
import Chart from './Chart';
import Content from '../Card/Content';
import Colored from '../../utils/Colored';
import fixNumber from '../../utils/FixNumber';
const Detail = ({coin, toggleOpen}) => {
    const detail = useRef();
    useEffect(() => {
        const detailCurrent = detail.current;
        document.addEventListener('mousedown', ({target}) => {
            if (detailCurrent && !detailCurrent.contains(target)) {
                toggleOpen(false);
            }
        });
        return () => {
            document.removeEventListener('mousedown', ({target}) => {
                if (detailCurrent && !detailCurrent.contains(target)) {
                    toggleOpen(false);
                }
            });
        };
    }, [detail, toggleOpen]);

    return (
        <DetailContainer ref={detail}>
            <Section>
                <Title justify="flex-start">
                    <img src={coin.image} alt={coin.name} width="32px" />

                    <Content text={coin.name} />
                    <Content text={`(${coin.symbol.toUpperCase()})`} />
                    <Content text={`${fixNumber(coin.current_price)}$`} />
                    <Content
                        clr={Colored(coin.price_change_percentage_24h)}
                        text={`${fixNumber(coin.price_change_percentage_24h)}%`}
                    />
                </Title>
            </Section>
            <Section>
                <SectionItem>
                    <Content text="Market Rank" />
                    <Content text={coin.market_cap_rank} />
                </SectionItem>
                <SectionItem>
                    <Content text="Market Cap" />
                    <Content text={`${fixNumber(coin.market_cap)}$`} />
                </SectionItem>
                <SectionItem>
                    <Content text="Market Cap Change(24h)" />
                    <Content
                        clr={Colored(coin.market_cap_change_24h)}
                        text={`${fixNumber(coin.market_cap_change_24h)}$`}
                    />{' '}
                </SectionItem>
                <SectionItem>
                    <Content text="Market Cap Change Percentage(24h)" />
                    <Content
                        clr={Colored(coin.market_cap_change_percentage_24h)}
                        text={`${fixNumber(
                            coin.market_cap_change_percentage_24h
                        )}%`}
                    />{' '}
                </SectionItem>
            </Section>
            <SectionItem>
                <Content text="Price Changes" />
            </SectionItem>
            <Section>
                <SectionItem>
                    <Content text="24 Hours" />
                    <Content
                        clr={Colored(coin.price_change_percentage_24h)}
                        text={`${fixNumber(coin.price_change_percentage_24h)}%`}
                    />{' '}
                </SectionItem>
                <SectionItem>
                    <Content text="7 Days" />
                    <Content
                        clr={Colored(
                            coin.price_change_percentage_7d_in_currency
                        )}
                        text={`${fixNumber(
                            coin.price_change_percentage_7d_in_currency
                        )}%`}
                    />{' '}
                </SectionItem>
                <SectionItem>
                    <Content text="30 Days" />
                    <Content
                        clr={Colored(
                            coin.price_change_percentage_30d_in_currency
                        )}
                        text={`${fixNumber(
                            coin.price_change_percentage_30d_in_currency
                        )}%`}
                    />{' '}
                </SectionItem>
                <SectionItem>
                    <Content text="6 Months" />
                    <Content
                        clr={Colored(
                            coin.price_change_percentage_200d_in_currency
                        )}
                        text={`${fixNumber(
                            coin.price_change_percentage_200d_in_currency
                        )}%`}
                    />{' '}
                </SectionItem>
                <SectionItem>
                    <Content text="Year" />
                    <Content
                        clr={Colored(
                            coin.price_change_percentage_1y_in_currency
                        )}
                        text={`${fixNumber(
                            coin.price_change_percentage_1y_in_currency
                        )}%`}
                    />{' '}
                </SectionItem>
            </Section>
            <Section>
                <Chart name= {coin.id} />
            </Section>

            <CloseButton onClick={() => toggleOpen(false)} />
        </DetailContainer>
    );
};

export default Detail;
