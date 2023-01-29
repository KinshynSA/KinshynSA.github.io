import React from "react";
import styled from "styled-components";
import Skill from "./skill.js";


const skillsList = [
    {
        name: 'JavaScript',
        percent: '80',
        color: 'var(--violet)',
    },
    {
        name: 'ReactJS',
        percent: '70',
        color: 'var(--green)',
    },
    {
        name: 'HTML & CSS',
        percent: '90',
        color: 'var(--red)',
    },
]


const Block = styled.div`
margin-bottom: 40px;
`;


export default function Skills(props){
    return (
        <Block>
            {skillsList.map(item => {
                return <Skill {...item} key={item.name} />
            })}
        </Block>
    )
}