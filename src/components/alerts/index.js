import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Alert from "./alert.js";


const Block = styled.div`
position: fixed;
left: 0;
bottom: 0;
z-index: 10000;
display: flex;
flex-direction: column-reverse;
overflow: hidden;
`


export default function Alerts(props){
    const alerts = useSelector(state => state.alerts.alerts);

    return (
        <Block>
            {alerts.map(alert => {
                return <Alert {...alert} key={alert.id} />
            })}
        </Block>
    )
}