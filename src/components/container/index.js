import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 60px;
    align-items: center;
    min-height: 100vh;
    padding: 40px;
    opacity: 0;
    animation: var(--showOpacityFast);
    animation-delay: 0.4s;

    @media screen and (max-width: ${screenSizes.TABLET}){
        grid-template-columns: 1fr;
        grid-row-gap: 40px;
        padding: 40px 20px;
    }
`;


export default function Container(props){
    return (
        <Block {...props}>
            {props.children}
        </Block>
    )
}