import styled from 'styled-components'

import HomeImage from '../../Images/hd2.jpg'

export const HomeIndexContainer = styled.div`
background: linear-gradient(to right, rgba(0,0,0,0.7),rgba(0,0,0,0.1)),
url(${HomeImage});
 height: 100vh;
background-position:center;
background-size:cover;
`
export const HomeContent = styled.div`
height: calc(100vh -80px);
max-height:100%;
width:100vw;
padding: 0rem calc((100vw - 13000px)/2);
`
export const HomeItem = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height:100%;
padding: 0 2rem;
width: 600px;
color:#fff;
text-transform: uppercase;
line-height:1;
font-weight:bold;

@media screen and (max-width:650px){
    width:100%;
}
`
export const HomeH1 = styled.h1`
font-size: clamp(2rem,2.5vw,3rem);
margin-bottom:1rem;
box-shadow: 3px 5px #e9ba23;
letter-spacing: 4px;
`
export const HomeP = styled.p`
font-size: clamp(2rem, 2.5vw, 3rem);
margin-bottom: 2rem;
`
export const HomeBtn = styled.p`
font-size:1.4rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color:#fff;
transition: 0.2s ease-out;

&:hover{
    background:#ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color:#000;
}
`;
