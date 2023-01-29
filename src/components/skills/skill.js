import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
margin-bottom: 24px;

&:last-of-type{
    margin-bottom: 0;
}
`;
const Name = styled.span`
display: inline-block;
margin-bottom: 10px;
font-size: var(--fs1);
font-weight: 600;
line-height: var(--lh1);
`;
const Line = styled.div`
position: relative;
background-color: #373737;
height: 3px;

&:before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: ${({percent}) => percent}%;
    height: 100%;
    background-color: ${({color}) => color};
}
`;


export default function Skill(props){
    return (
        <Block>
            <Name>{props.name}</Name>
            <Line
                {...props}
            />
        </Block>
    )
}