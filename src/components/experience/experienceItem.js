import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
width: 100%;
padding: 24px;
background-color: var(--gray600);
color: var(--gray500);
font-size: var(--fs3);
line-height: var(--lh3);

&:last-of-type{
    grid-column: 1/3;
}

@media screen and (max-width: ${screenSizes.MOBILE}){
    grid-column: 1/2;
}
`;
const Position = styled.h5`
margin-bottom: 16px;
color: var(--white);
`;
const Company = styled.div`
color: var(--white);
font-weight: 600;
`;
const Dates = styled.div`
color: var(--white);
`;
const Description = styled.div`
margin-top: 20px;
`;


export default function ExperienceItem(props){
    return (
        <Block>
            <Position>{props.position}</Position>
            <Company>{props.company}</Company>
            <Dates>{props.dates}</Dates>
            <Description>{props.description}</Description>
        </Block>
    )
}