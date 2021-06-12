import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin-top: 2rem;
    margin-left: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const InputField = styled.input`
    // display: block;
    // margin: 0;
    width: 50%;
    flex: 4;
    background-color: #eee;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 10px;
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
    width: 1rem;
    outline: 0;
    margin: 0 7rem;
    flex: 0.5;
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
