import styled from 'styled-components';

export const Title = styled.div`
    width: ${(props) => props.w || '100%'};
    padding: 5px 5%;
    display: flex;
    font-weight: 700;
    font-size: 1rem;
    align-items: center;
    justify-content: ${(props) => props.justify || 'space-evenly'};
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-size: 0.9rem;
    padding: 6px 0;
    border-bottom: 2px solid #1c1e33;
`;
export const SectionItem = styled.div`
    display: flex;
    flex-flow: column;
    font-weight: 600;

    & :first-child {
        padding-bottom: 10px;
    }
`;
export const Button = styled.button`
    padding: 10px 15px;
    background-color: #1c1e33;
    border: none;
    border-radius: 4px;
    font-size: 0.8rem;
    color: #fff;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1.1px;
    outline: none;
    &:hover {
        background-color: #1f2669;
    }
`;
