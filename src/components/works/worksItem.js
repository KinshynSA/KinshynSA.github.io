import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import { Button, Picture } from "../";
import screenSizes from "../../constants/screenSizes";
import useText from "../../hooks/useText";


const animationDuration = 0.4;


const Wrapper = styled.div`
width: 100%;
max-width: 80%;
margin-bottom: 80px;
margin-left: auto;
border: 3px solid var(--green);

&:nth-of-type(2n + 1){
    margin-left: 0;
}

@media screen and (max-width: ${screenSizes.MOBILE}){
    max-width: 100%;
    margin-bottom: 60px;
}
`
const Inner = styled.div`
position: relative;
width: 100%;
height: 0;
padding-bottom: 56.25%;

@media screen and (max-width: ${screenSizes.MOBILE}){
    height: auto;
    padding-bottom: 0;
}
`
const Background = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.9);
overflow: hidden;

&:before,
&:after{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 4;
    display: block;
    width: 100%;
    height: 100%;
    background-color: var(--green);
    opacity: 0.8;
    transform: translateX(-100%);
    transition: all ${animationDuration}s ease-in-out;
}

&:after{
    z-index: 20;
    opacity: 1;
    transform: translateX(${({isInViewport}) => isInViewport ? '100%' : '0'});
}

@media screen and (max-width: ${screenSizes.MOBILE}){
    z-index: -1;

    &:before{
        display: none;
    }
}
`
const CountWrapper = styled.div`
position: absolute;
top: 2%;
right: 2%;
z-index: 12;
color: var(--gray800);
font-family: var(--fontTitle);
font-size: 72px;
line-height: 1;
opacity: 0;
overflow: hidden;

@media screen and (max-width: ${screenSizes.MOBILE}){
    display: none;
}
`
const Count = styled.div`
position: absolute;
top: 0;
left: 0;
color: transparent;
overflow: hidden;
transform: translate3d(0,100%,0);

&:before{
    content: attr(data-index);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--white);
    width: 100%;
    height: 100%;
    transform: translate3d(0,-100%,0);
}
`
const PictureStyled = styled(Picture)`
position: absolute;
top: 0;
left: 0;
display: block;
width: 100%;
height: 100%;
object-fit: cover;
object-position: top center;

@media screen and (max-width: ${screenSizes.MOBILE}){
    z-index: -1;
}
`
const Content = styled.div`
position: absolute;
left: 40px;
bottom: 40px;
z-index: 10;
transition: all 0.4s;

@media screen and (max-width: ${screenSizes.MOBILE}){
    position: static;
    padding: 80px 20px 20px;
}
`
const Text = styled.div`
max-width: 500px;

@media screen and (max-width: ${screenSizes.MOBILE}){
    max-width: 100%;
}
`
const Title = styled.h2`
margin-bottom: 16px;
text-align: inherit;
`
const Undertitle = styled.p``
const ButtonStyled = styled(Button)`
margin-top: 24px;
`
const Block = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
color: var(--white);

&:hover{
    ${Background}{
        &:before{
            transform: translateX(${({isAnimationEnded}) => isAnimationEnded ? '0' : '-100%'});
        }
    }

    ${CountWrapper}{
        animation: var(--showOpacityFast);
        animation-delay: ${animationDuration}s;
    }

    ${Count}{
        top: 0;
        transform: translateZ(0);
        transition: all 0.4s;
        transition-delay: ${animationDuration + 0.4}s;

        &:before{
            transform: translateZ(0);
            transition: all 0.4s;
            transition-delay: ${animationDuration + 0.4}s;
        }
    }

    ${Content}{
        transition-delay: ${animationDuration}s;
        transform: scale(1.06,1.06);
    }

    ${ButtonStyled}{
        color: var(--white);
        border-color: var(--white);

        &:before,
        &:after{
            background-color: var(--white);
        }

        &:hover{
            color: var(--gray800);
            border-color: var(--gray800);
        }
    }
}

@media screen and (max-width: ${screenSizes.MOBILE}){
    position: relative;
    z-index: auto;
}
`


export default function WorksItem(props){
    const [isAnimationEnded, setIsAnimationEnded] = useState(false);
    const [isInViewport, setIsInViewport] = useState(false);
    const wrapperRef = useRef(null);
    const navigate = useNavigate();
    const text = useText();

    useEffect(() => {
        if(!wrapperRef?.current) return;

        const observer = new IntersectionObserver(function(entries, observer){
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    const target = entry.target;
                    setIsInViewport(true);
                    observer.unobserve(target)
                }
            }) 
        }, {
            root: null,
            rootMargin: '0px',
            threshold: 0.7,
        })

        observer.observe(wrapperRef.current)
    }, [wrapperRef]);

    useEffect(() => {
        if(!isInViewport) return;

        setTimeout(() => {
            setIsAnimationEnded(true);
        }, animationDuration * 1000)
    }, [isInViewport])

    return (
        <Wrapper ref={wrapperRef}>
            <Inner>
                <Block
                    isAnimationEnded={isAnimationEnded}
                >
                    <PictureStyled
                        srcsets={[
                            require(`../../assets/img/works/${props.imageName}.webp`),
                        ]}
                        src={require(`../../assets/img/works/${props.imageName}.jpg`)}
                    />
                    <Background
                        isInViewport={isInViewport}
                        isAnimationEnded={isAnimationEnded}
                    />
                    <CountWrapper>
                        <span>0{props.count + 1}</span>
                        <Count data-index={`0${props.count + 1}`}>0{props.count + 1}</Count>
                    </CountWrapper>
                    <Content>
                        <Text>
                            <Title>{props.title}</Title>
                            <Undertitle>{props.undertitle}</Undertitle>
                            <ButtonStyled onClick={() => window.open(props.link, '_blank', 'noreferrer')}>{text('works.list.button')}</ButtonStyled>
                        </Text>
                    </Content>
                </Block>
            </Inner>
        </Wrapper>
    )
}