import styled from 'styled-components';

export const Body = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: sans-serif;
`;

export const Wrap = styled.div`
    display: flex;
    width: ${props => `${props.width}%`};
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;