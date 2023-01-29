import React from "react";
import styled from "styled-components";
import ExperienceItem from "./experienceItem.js";
import useText from "../../hooks/useText.js";
import screenSizes from "../../constants/screenSizes.js";


const Block = styled.div`
    width: 100%;
`;
const Box = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 24px;

    @media screen and (max-width: ${screenSizes.MOBILE}){
        grid-template-columns: 1fr;
    }
`;


export default function Experience(props){
    const text = useText();

    const list = [
        {
            position: text('experience.placeofwork1.position'),
            company:  text('experience.placeofwork1.company'),
            dates:  text('experience.placeofwork1.dates'),
            description:  text('experience.placeofwork1.description')
        },
        {
            position: text('experience.placeofwork2.position'),
            company:  text('experience.placeofwork2.company'),
            dates:  text('experience.placeofwork2.dates'),
            description:  text('experience.placeofwork2.description')
        },
        {
            position: text('experience.placeofwork3.position'),
            company:  text('experience.placeofwork3.company'),
            dates:  text('experience.placeofwork3.dates'),
            description:  text('experience.placeofwork3.description')
        },
    ];

    return (
        <Block {...props}>
            <Box>
                {list.map(item => {
                    return <ExperienceItem {...item} key={item.dates} />
                })}
            </Box>
        </Block>
    )
}