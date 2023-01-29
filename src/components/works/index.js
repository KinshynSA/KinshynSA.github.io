import React from "react";
import styled from "styled-components";
import WorksItem from "./worksItem.js";
import useText from "../../hooks/useText.js";


const Block = styled.div`
    max-width: 1000px;
    margin-top: 40px;
`


export default function Works(props){
    const text = useText();

    const worksList = [
        {
            title: text('works.list.item1.title'),
            undertitle: text('works.list.item1.undertitle'),
            imageName: 'skillsetter',
            link: 'https://skillsetter.io',
        },
        {
            title: text('works.list.item2.title'),
            undertitle: text('works.list.item2.undertitle'),
            imageName: 'meteozakhist',
            link: 'https://meteozakhist.in.ua/',
        },
        {
            title: text('works.list.item3.title'),
            undertitle: text('works.list.item3.undertitle'),
            imageName: 'rentflot',
            link: 'https://rentflot.ua/',
        },
        {
            title: text('works.list.item4.title'),
            undertitle: text('works.list.item4.undertitle'),
            imageName: 'objava',
            link: 'https://github.com/KinshynSA/advert',
        },
        {
            title: text('works.list.item5.title'),
            undertitle: text('works.list.item5.undertitle'),
            imageName: 'land',
            link: 'https://github.com/KinshynSA/land',
        },
        {
            title: text('works.list.item6.title'),
            undertitle: text('works.list.item6.undertitle'),
            imageName: 'rc-gaming',
            link: 'https://kinshynsa.github.io/sites/rc-gaming/index.html',
        },
    ];

    
    return (
        <Block {...props}>
            {worksList.map((item,i) => {
                return <WorksItem key={i} count={i} {...item} />
            })}
        </Block>
    )
}