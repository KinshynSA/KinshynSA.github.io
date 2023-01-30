import React from "react";
import styled from "styled-components";


const Char = styled.span`
display: ${props => props.full ? 'inline-block' : 'inline'};

&:hover{
    animation: charJump 0.4s;
}

@keyframes charJump{
    0%{transform: scale(1,1)}
    25%{transform: scale(1.2,1.2)}
    75%{transform: scale(0.9,0.8)}
    100%{transform: scale(1,1)}
}
`
const H1 = styled.h1`
color: var(--green);
user-select: none;
`
const Title = ({children, ...props}) => <H1 {...props}>{children}</H1>


export default function TitleAnim(props){

    return (
        <Title as={props.tag ?? 'h1'}>{props.text.split('').map((c,i) => {
            return (
                <Char key={i} full={c !== ' '}>{c}</Char>
            )
        })}</Title>
    )
}