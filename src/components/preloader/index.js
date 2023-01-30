import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Logo } from "../../assets/img/icons";
import screenSizes from "../../constants/screenSizes";
import { removePreloaderAction } from "../../store/preloaderReducer";


const Block = styled.div`
position: ${props => props.position ?? 'fixed'};
top: 0;
left: 0;
z-index: 10000;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
min-height: 100vh;
padding: 20px;
background-color: var(--gray800);
animation: ${props => props.isVisible ? 'var(--showFromLeftFast)' : 'var(--hideToRightFast)'};
`
const Content = styled.div`
position: ${({position}) => (position && position !== 'fixed') ? 'absolute' : 'static'};
top: ${({position}) => (position && position !== 'fixed') ? '50vh' : '0'};
width: 100%;
max-width: 400px;
transform: ${({position}) => (position && position !== 'fixed') ? 'translateY(-50%)' : 'none'};

@media screen and (max-width: ${screenSizes.MOBILE}){
    max-width: calc(100vw - 40px);
}
`
const LogoWrapper = styled.div`
max-width: 50px;
margin: 0 auto 16px;
`
const LineWrapper = styled.div`
position: relative;
width: 100%;
height: 4px;
background: linear-gradient(90deg, var(--red) 0%, var(--green) 100%);
overflow: hidden;
`
const LineInner = styled.div`
position: absolute;
top: 0;
left: -20%;
width: 20%;
height: 100%;
background-color: var(--gray800);
animation: lineInner 1s infinite;

@keyframes lineInner{
    0%{left: -20%;}
    100%{left: 100%;}
}
`


export default function Preloader(props){
    const dispatch = useDispatch();
    const { isExist, isVisible, isGlobal } = useSelector(state => state.preloader);

    useEffect(() => {
        if(!isVisible && isExist){
            setTimeout(() => {
                dispatch(removePreloaderAction())
            }, 500)
        }
    }, [isVisible]);

    useEffect(() => {
        if(props.position === 'absolute')  window.scrollTo(0,0);
        document.body.style.overflow = 'hidden';
        return () => document.body.style.overflow = '';
    }, []);

    return (
        <>
            <Block
                {...props}
                isVisible={isVisible}
                position={isGlobal ? 'fixed' : props.position}
            >
                <Content {...props}>
                    <LogoWrapper>
                        <Logo />
                    </LogoWrapper>
                    <LineWrapper>
                        <LineInner />
                    </LineWrapper>
                </Content>
            </Block>
        </>
    )
}