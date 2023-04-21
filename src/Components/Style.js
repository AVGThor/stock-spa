import styled from 'styled-components';

export const Heading = styled.h1`
text-align: center;
color: green;
z-index: 5;
backdrop-filter: blur(4px);
`;

export const Content = styled.div`
overflowY: scroll;
height: 300px;
z-index: 5;
backdrop-filter: blur(4px);
`;

export const Button = styled.div`
position: fixed;
width: 100%;
left: 95%;
bottom: 40px;
height: 20px;
font-size: 3rem;
z-index: 1;
cursor: pointer;
color: orange;
`