import React from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";


const animationDuration = 0.2;

const tagsArr = [
    {
        name: 'ReactJS',
        color: 'var(--green)',
        scale: '1.2',
    }, 
    {
        name: 'TypeScript',
        color: 'var(--green)',
        scale: '0.9',
    },
    {
        name: 'JS',
        color: 'var(--green)',
        scale: '1.1',
    },
    {
        name: 'React Context',
        color: 'var(--green)',
        scale: '0.8',
    },
    {
        name: 'Redux',
        color: 'var(--violet)',
        scale: '1.2',
    },
    {
        name: 'Webpack',
        color: 'var(--violet)',
        scale: '0.8',
    },
    {
        name: 'Git',
        color: 'var(--violet)',
        scale: '1',
    },
    {
        name: 'HTML',
        color: 'var(--red)',
        scale: '1',
    },
    {
        name: 'CSS',
        color: 'var(--red)',
        scale: '1.2',
    },
    {
        name: 'LESS/SASS',
        color: 'var(--red)',
        scale: '0.9',
    },
    {
        name:'BEM',
        color: 'var(--red)',
        scale: '1.1',
    },
    {
        name: 'Figma',
        color: 'var(--yellow)',
        scale: '1',
    },
    {
        name: 'Photoshop',
        color: 'var(--yellow)',
        scale: '1.2',
    },
    {
        name: 'Zeplin',
        color: 'var(--yellow)',
        scale: '0.7',
    }
];


const Block = styled.div`
    padding: 20px 16px;
`
const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 32px;
    grid-row-gap: 32px;

    @media screen and (max-width: ${screenSizes.NOTEBOOK}){
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        grid-column-gap: 16px;
        grid-row-gap: 16px;
    }
`
const Item = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: var(--gray800);
    color: var(--white);
    font-weight: 500;
    text-align: center;
    border-radius: 50%;
    border: 2px solid ${({color}) => color};
    transition: var(--trans);
    transform: scale(${({scale}) => `${scale},${scale}`});

    &:hover{
        transform: scale(1.3);
    }

    @media screen and (max-width: ${screenSizes.NOTEBOOK}){
        position: static;
        display: inline-block;
        width: auto;
        height: auto;
        padding: 6px 12px;
        background-color: var(--gray500);
        border-radius: 4px;
        border: 1px solid var(--gray600);
        transform: none;

        &:hover{
            transform: none;
        }
    }
`
const Line = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 2px;
    background: var(--white);
    opacity: 0;
    animation: var(--showOpacityFast);
    animation-delay: ${({delay}) => delay}s;

    @media screen and (max-width: ${screenSizes.NOTEBOOK}){
        display: none;
    }
`;
const LineRight = styled(Line)`
    transform: rotate(14deg);
`;
const LineBottom = styled(Line)`
    left: 10%;
    top: 70%;
    transform: rotate(70deg) translate(60%, 0%);
`;
const LineBack = styled(Line)`
    left: -10%;
    top: 70%;
    transform: rotate(-70deg) translate(-60%, 0%);
`;
const ItemWrapper = styled.div`
    position: relative;
    grid-row: 1/2;
    width: 100%;
    height: 0;
    padding-bottom: 100%;
    opacity: 0;
    animation: var(--showOpacity);
    animation-delay: ${({count}) => 1 + animationDuration * count}s;

    &:nth-of-type(2n){
        top: 16%;

        ${LineRight}{
            transform: rotate(-14deg);
        }
    }

    &:nth-of-type(n + 5){
        grid-row: 2/3;
        transform: translateX(50%);

        ${LineBottom}{
            transform: rotate(60deg) translate(60%, 0%);
        }

        ${LineBack}{
            transform: rotate(-70deg) translate(-60%, 0%);
        }
    }

    &:nth-of-type(n + 8){
        grid-row: 3/4;
        transform: translateX(0);

        ${LineBottom}{
            transform: rotate(70deg) translate(60%, 0%);
        }

        ${LineBack}{
            transform: rotate(-60deg) translate(-60%, 0%);
        }
    }

    &:nth-of-type(n + 12){
        grid-row: 4/5;
        transform: translateX(50%);

        ${LineBottom}{
            transform: rotate(60deg) translate(60%, 0%);
        }

        ${LineBack}{
            transform: rotate(-70deg) translate(-60%, 0%);
        }
    }

    @media screen and (max-width: ${screenSizes.NOTEBOOK}){
        position: static;
        display: inline-block;
        width: auto;
        height: auto;
        padding: 0;
        transform: none!important;
    }
}`


export default function TagsCloud(props){

    return (
        <Block {...props}>
            <Box>
                {tagsArr.map((item, i, arr) => {
                    const showLineDelay = arr.length * animationDuration + 1;

                    return (
                        <ItemWrapper
                            count={i}
                            key={item.name}
                        >
                            <Item
                                key={item.name}
                                color={item.color}
                                scale={item.scale}
                            >
                                <span>{item.name}</span>
                            </Item>
                            {(i !== 3 && i !== 6 && i !== 10 && i !== 13) && <LineRight delay={showLineDelay} />}
                            {(i !== 3 && i !== 10 && i <= 10) && <LineBottom delay={showLineDelay} />}
                            {(i !== 0 && i !== 7 && i <= 10) && <LineBack delay={showLineDelay} />}
                        </ItemWrapper>
                    )
                })}
            </Box>
        </Block>
    )
}