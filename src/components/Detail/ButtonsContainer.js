import React from 'react';
import {Button} from '../SharedStyles';
import {ButtonDiv} from './styles';
const ButtonsContainer = ({handleClicks}) => {
    //Move to Constants
    const BUTTON_VALUES = [
        {
            value: '1',
            text: '24 Hours',
        },
        {
            value: '7',
            text: '7 Days',
        },
        {
            value: '14',
            text: '14 Days',
        },
        {
            value: '30',
            text: '30 Days',
        },
        {
            value: '90',
            text: '90 Days',
        },
    ];
    return (
        <ButtonDiv>
            {BUTTON_VALUES &&
                BUTTON_VALUES.map((val, i) => (
                    <Button key={i} onClick={handleClicks} value={val.value}>
                        {' '}
                        {val.text}{' '}
                    </Button>
                ))}
        </ButtonDiv>
    );
};

export default ButtonsContainer;
