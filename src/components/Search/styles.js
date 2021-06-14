import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const InputField = styled.input`
    max-width: 70%;
    background-color: #eee;
    height: 40px;
    flex: 2;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin: 2rem;
    padding: 0 20px;
    font-size: 18px;
    box-sizing: border-box;
    &::placeholder {
        font-style: italic;
        font-size: 14px;
    }

    &:focus {
        outline: none;
    }
`;
export const SelectField = styled.select`
    min-width: 4rem;
    flex: 0.8;
    outline: 0;
    margin-right:2rem;
    border: 0 !important;
    background: #2c3e50;
    padding: 0 0.5rem;
    color: #fff;
    cursor: pointer;
    position: relative;
    text-align: center;
    height: 2.5rem;
    font-size: 0.8rem;
    line-height: 3;
    border-radius: 0.25em;

    &:hover {
        color: #f39c12;
    }
`;
