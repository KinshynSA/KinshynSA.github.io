import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguageAction } from "../../store/languageReducer";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";
import { hidePreloaderAction, showPreloaderGlobalAction } from "../../store/preloaderReducer";


const Block = styled.div`
    display: flex;
    justify-content: center;
    grid-column-gap: 0;
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
    padding: 6px 10px;
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
        z-index: 10;
        color: var(--white);
        transform: scale(1.2);

        &:before{
            background-color: var(--red);
        }
    }
`


export default function LangSwitcher(props){
    const dispatch = useDispatch();
    const lang = useSelector(state => state.language.lang);

    function handleClick(buttonLang){
        if(lang === buttonLang) return;
        dispatch(showPreloaderGlobalAction());
        setTimeout(() => dispatch(changeLanguageAction(buttonLang)), 500);
        if(props.onClick) props.onClick();
        setTimeout(() => dispatch(hidePreloaderAction()), 1400);
    }

    return (
        <Block {...props}>
            <Button onClick={() => handleClick('ua')}><span>Укр</span></Button>
            <Button onClick={() => handleClick('ru')}><span>Рус</span></Button>
            <Button onClick={() => handleClick('en')}><span>En</span></Button>
        </Block>
    )
}