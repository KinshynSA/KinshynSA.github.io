import React, { useEffect, useState } from "react";
import styled from "styled-components";
import screenSizes from "../../constants/screenSizes";
import { Link, useLocation, useNavigate } from "react-router-dom";
import urls from "../../constants/urls";
import { Logo, IconMenu, IconClose, IconSocGithub, IconSocLinkedin } from "../../assets/img/icons";
import useText from "../../hooks/useText.js";
import { LangSwitcher } from "../";


const Wrapper = styled.div`
position: relative;
width: 180px;
min-height: 100vh;
min-width: 180px;
background-color: var(--gray600);
overflow-y: auto;

@media screen and (max-width: ${screenSizes.TABLET}){
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    width: 100%;
    min-width: 0;
    min-height: 0;
    background-color: transparent;
}
`
const Inner = styled.div`
position: fixed;
z-index: 10;
width: 180px;
max-height: 100vh;
overflow-y: auto;

&::-webkit-scrollbar {
    display: none;
    height: 0;
    width: 0;
}
&::-webkit-scrollbar-track {
    display: none;
    background: transparent;
}
&::-webkit-scrollbar-thumb {
    display: none;
    background-color: transparent;
}

@media screen and (max-width: ${screenSizes.TABLET}){
    position: static;
    width: 100%;
    max-height: none;
}
`
const Block = styled.div`
display: flex;
flex-direction: column;
width: 100%;
min-height: 100vh;
background-color: var(--gray600);
color: var(--gray500);

@media screen and (max-width: ${screenSizes.TABLET}){
    position: relative;
    animation: ${props => props.hideSidebar ? 'var(--hideToRightFast)' : 'var(--showFromLeftFast)'};
}
`
const LogoPart = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 20px 10px;
margin-bottom: 40px;
background-color: var(--gray700);
text-align: center;
border-bottom: 1px solid var(--gray500);
`
const LogoLink = styled(Link)`
display: block;
margin-bottom: 10px;

svg{
    display: block;
}
`
const Name = styled.div`
margin-bottom: 4px;
color: var(--gray100);
font-size: var(--fs1);
line-height: var(--lh1);
font-weigth: 500;
`
const Position = styled.div`
font-size: var(--fs3);
line-height: var(--lh3);
`
const LinksPart = styled.div`
flex-grow: 100;
display: flex;
flex-direction: column;
justify-content: center;
`
const Links = styled.div`
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
`
const LinkItem = styled.a`
position: relative;
display: block;
padding: 12px 10px;
color: ${({isActive}) => isActive ? 'var(--green)' : 'inherit'};
font-size: var(--fs1);
line-height: var(--lh1);
text-align: center;
transition: none;
overflow: hidden;

&:hover{
    color: ${({isActive}) => isActive ? '' : 'var(--white)'};
    transition: var(--trans);
}

&:before,
&:after{
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    display: block;
    width: 100%;
    height: 80%;
    background-color: var(--red);
    transition: var(--trans);
}
&:after{
    top: 20%;
    left: auto;
    right: -100%;
    opacity: 0.6;
}

&:hover:before{
    ${({isActive}) => isActive ? '' : 'left: 0'};
}
&:hover:after{
    ${({isActive}) => isActive ? '' : 'right: 0'};
}


span{
    position: relative;
    z-index: 10;
}
`
const SocPart = styled.div`
padding: 20px;
display: grid;
grid-template-columns: auto auto;
grid-column-gap: 20px;
justify-content: center;
flex-grid: 100;
`
const SocLink = styled.a`
display: block;
padding: 20px 10px 30px;

svg{
    display: block;
    width: auto;
    height: 20px;

    path{
        transition: var(--trans);
    }
}

&:hover svg path{
    fill: var(--red);
}
`
const MenuButton = styled.div`
position: fixed;
top: 20px;
right: 20px;
z-index: 1000;
display: none;
cursor: pointer;
animation: var(--showOpacityFast);

svg{
    display: block;
    width: 30px;
    height: auto;

    path{
        fill: var(--white);
        transition: var(--trans);
    }
}

&:hover{
    svg{
        path{
            fill: var(--green);
        }
    }
}

@media screen and (max-width: ${screenSizes.TABLET}){
    display: block;
}
`
const CloseButton = styled(MenuButton)``


export default function Sidebar(props){
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState();
    const [hideSidebar, setHideSidebar] = useState();
    const text = useText();

    function handleLinkClick(url){
        if(url === location.pathname) return;
        navigate(url);
    }

    useEffect(() => {
        if(document.documentElement.clientWidth > +parseInt(screenSizes.TABLET)){
            setIsOpen(true);
        }
    }, [])

    useEffect(() => {
        if(document.documentElement.clientWidth <= +parseInt(screenSizes.TABLET)){
            setHideSidebar(true);
        }
    }, [location])

    useEffect(() => {
        if(hideSidebar){
            setTimeout(() => {
                setIsOpen(false);
                setHideSidebar(false);
            }, 500)
        }
    }, [hideSidebar])

    return (
        <Wrapper>
            <Inner>
                {isOpen && (            
                    <Block hideSidebar={hideSidebar}>
                        <LogoPart>
                            <LogoLink to={urls.home}>
                                <Logo />
                            </LogoLink>
                            <Name>{text('sidebar.name')}</Name>
                            <Position>Frontend developer</Position>
                        </LogoPart>
                        <LinksPart>
                            <Links>
                                <LinkItem isActive={urls.expirience === location.pathname} onClick={() => handleLinkClick(urls.expirience)}><span>{text('sidebar.menu.link1')}</span></LinkItem>
                                <LinkItem isActive={urls.skills === location.pathname} onClick={() => handleLinkClick(urls.skills)}><span>{text('sidebar.menu.link2')}</span></LinkItem>
                                <LinkItem isActive={urls.works === location.pathname} onClick={() => handleLinkClick(urls.works)}><span>{text('sidebar.menu.link3')}</span></LinkItem>
                                <LinkItem isActive={urls.contact === location.pathname} onClick={() => handleLinkClick(urls.contact)}><span>{text('sidebar.menu.link4')}</span></LinkItem>
                            </Links>
                        </LinksPart>
                        <LangSwitcher />
                        <SocPart>
                            <SocLink href={urls.github} target="_blank">
                                <IconSocGithub />
                            </SocLink>
                            <SocLink href={urls.linkedin} target="_blank">
                                <IconSocLinkedin />
                            </SocLink>
                        </SocPart>
                    </Block>
                )}
                {isOpen ? (
                    <CloseButton onClick={() => setHideSidebar(true)}>
                        <IconClose />
                    </CloseButton>
                ) : (
                    <MenuButton onClick={() => setIsOpen(true)}>
                        <IconMenu />
                    </MenuButton>
                )}
            </Inner>
        </Wrapper>
    )
}