import styled from 'styled-components';

export const DetailContainer = styled.div`
    position: fixed;
    background-color: #efefef;
    width: 70%;
    height: auto;
    top: 50%;
    margin-top: -400px;
    left: 50%;
    margin-left: calc(35% - 70%);
    padding: 15px;
`;

export const CloseButton = styled.button`
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 10px;
    background: #ededed;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    line-height: 18px;
    text-align: center;
    border: 1px solid #999;
    font-size: 18px;
    &:after {
        content: 'x';
    }
`;
export const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    font-size: 0.9rem;
    padding: 6px 0;
`;
export const ChartWrapper = styled.div`
    height: 450px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Spinner = styled.div`
    pointer-events: none;
    align-self: center;
    width: 2.5em;
    height: 2.5em;
    border: 0.4em solid transparent;
    border-color: #eee;
    border-top-color: #3e67ec;
    border-radius: 50%;
    animation: loadingspin 1s linear infinite;

    @keyframes loadingspin {
        100% {
            transform: rotate(360deg);
        }
    }
`;
export const ButtonDiv = styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: flex-end;
`;
