import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar, Preloader, Alerts } from "../";
import bg from "../../assets/img/background.png";
import { hidePreloaderAction, showPreloaderAction } from "../../store/preloaderReducer";


const Block = styled.div`
position: relative;
display: flex;
align-items: stretch;
min-height: 100vh;
background-color: var(--gray800);
color: var(--gray100);
`
const Content = styled.div`
position: relative;
z-index: 10;
flex-grow: 100;
background-image: url(${bg});
background-size: cover;
background-attachment: fixed;
overflow: hidden;
animation: var(--showOpacityFast);
`



export default function PageWrapper(props){
    const dispatch = useDispatch();
    const preloaderVisible = useSelector(state => state.preloader.isVisible);
    const preloaderExist = useSelector(state => state.preloader.isExist);
    const [preloaderTimer, setPreloaderTimer] = useState(null);
    const location = useLocation();

    useEffect(() => {
        showPreloader()

        function showPreloader(){
            if(!preloaderVisible && preloaderExist) return;
            dispatch(showPreloaderAction());

            clearInterval(preloaderTimer);
            setPreloaderTimer(setTimeout(() => dispatch(hidePreloaderAction()), 1400));
        }
    }, [location])

    return (
        <Block>
            {!props.sidebarOff && <Sidebar />}
            <Content>
                {props.children}
                {preloaderExist && (
                    <Preloader
                        position="absolute"
                        screenFixed={true}
                    />
                )}
            </Content>
            <Alerts />
        </Block>
    )
}