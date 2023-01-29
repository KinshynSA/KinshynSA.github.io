import React from "react";
import { useDispatch } from "react-redux";
import { changeLanguageAction } from "../../store/languageReducer";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const Block = styled.div`
    display: flex;
    justify-content: center;
    grid-column-gap: 10px;
    width: 100%;
    padding: 0 10px;

    @media screen and (max-width: ${screenSizes.TABLET}){
        max-width: 300px;
        margin: 0 auto;
    }
`
const Button = styled.div`
    position: relative;
    display: inline-flex;
    justify-content: center;
    width: 100%;
    padding: 6px 12px;
    color: var(--gray800);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: var(--trans);

    &:before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        display: block;
        width: 100%;
        height: 100%;
        background-color: var(--green);
        transition: var(--trans);
    }

    span{
        position: relative;
        z-index: 4;
    }

    &:hover{
        color: var(--white);
        transform: scale(1.2);

        &:before{
            background-color: var(--red);
        }
    }
`


export default function LangSwitcher(props){
    const dispatch = useDispatch();

    return (
        <Block {...props}>
            <Button onClick={() => dispatch(changeLanguageAction('ua'))}><span>Укр</span></Button>
            <Button onClick={() => dispatch(changeLanguageAction('ru'))}><span>Рус</span></Button>
        </Block>
    )
}