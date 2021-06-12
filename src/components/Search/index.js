import React from 'react';
import CURRENCIES from '../../constants/Currencies';
import {Container, InputField, SelectField} from './styles';
const Search = ({searchV, setSearchV, setCurrency}) => {
    const click = (e) => {
        setCurrency(
            CURRENCIES.find((currency) => currency.name === e.target.value)
        );
    };
    return (
        <Container>
            <InputField
                placeholder="Search"
                onChange={({target}) => setSearchV(target.value)}
                type="text"
                value={searchV}
            />
            <SelectField onChange={click}>
                {CURRENCIES.map((currency, idx) => (
                    <option key={idx} value={currency.name}>
                        {`${currency.name.toUpperCase()} - ${currency.symbol} `}
                    </option>
                ))}
            </SelectField>
        </Container>
    );
};

export default Search;
