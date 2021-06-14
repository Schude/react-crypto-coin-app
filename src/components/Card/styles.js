import styled from 'styled-components';

export const CardWrapper = styled.div`
    background: #fff;
    min-width: 300px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 10px;
    justify-content: space-between;
    border-radius: 30px;
`;
export const Span = styled.span`
    color: ${(props) => props.clr || 'black'};
`;
