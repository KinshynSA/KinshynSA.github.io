import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { IconClose, IconAlertSucces, IconAlertError } from "../../assets/img/icons";
import { removeAlertAction } from "../../store/alertReducer";


const Wrapper = styled.div`
    padding: 0 0 20px 20px;
    animation: ${props => props.isVisible ? 'var(--showFromLeftFast)' : 'var(--hideToLeftFast)'};
`
const Block = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-column-gap: 14px;
    align-items: center;
    padding: 12px 28px 12px 12px;
    background-color: var(--gray700);
    color: var(--white);
    font-weight: 600;
    border-radius: 2px;
`;
const Icon = styled.div`
    svg{
        display: block;
        width: 100%;
        height: auto;

        path{
            fill: ${props => props.color};
        }
    }
`
const Close = styled.div`
    position: absolute;
    top: 4px;
    right: 4px;
    width: 20px;
    cursor: pointer;
`;
const IconCloseStyled = styled(IconClose)`
    display: block;
    width: 100%;
    height: auto;

    path{
        fill: var(--white);
        transition: var(--trans);
    }

    &:hover{
            path{
            fill: var(--red);
        }
    } 
`;


export default function Alert(props){
    const dispatch = useDispatch();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsVisible(false);
        }, 4000)
    }, [])

    useEffect(() => {
        if(isVisible) return;

        setTimeout(() => {
            dispatch(removeAlertAction({
                id: props.id,
            }))
        }, 1000);
    }, [isVisible])

    return (
        <Wrapper
            isVisible={isVisible}
        >
            <Block>
                <Icon color={props.type === 'error' ? 'var(--red)' : 'var(--green)'}>
                    {props.type === 'error' ? (
                        <IconAlertError />
                    ) : (
                        <IconAlertSucces />
                    )}
                </Icon>
                <span>{props.text}</span>
                <Close onClick={() => setIsVisible(false)}>
                    <IconCloseStyled />
                </Close>
            </Block>
        </Wrapper>
    )
}