import React from "react";
import styled from "styled-components";
import Button from "./button";


const BlockStyled = styled(Button)`
    padding: 8px 14px;
    font-size: var(--fs3);
    line-height: var(--lh3);
`


export default function ButtonSmall(props){
    return (
        <BlockStyled {...props}>{props.children}</BlockStyled>
    )
}