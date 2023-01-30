import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
position: relative;
padding: 20px 0 20px 20px;

&:before,
&:after{
    content: '<${props => props.tag}>';
    position: absolute;
    left: 0;
    opacity: 0.3;
    font-family: var(--fontDecorator);
    font-size: var(--fs3);
    line-height: 1;
}
&:before{
    top: 0;
}
&:after{
    content: '</${props => props.tag}>';
    bottom: 0;
}

@media screen and (max-width: ${screenSizes.MOBILE}){
    padding: 20px 0 20px 0;
}
`

export default function TagsTextDecorator(props){
    const tag = props.tag ?? 'div';

    return (
        <Block {...props} tag={tag}>{props.children}</Block>
    )
}