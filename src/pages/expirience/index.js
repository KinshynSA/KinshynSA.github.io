import React from "react";
import styled from "styled-components";
import { TitleAnim, Container, TagsTextDecorator, Experience } from "../../components";
import useText from "../../hooks/useText.js";
import { Helmet } from "react-helmet";


const TextWrapper = styled(TagsTextDecorator)`
height: auto;
`
const TextContent = styled(TagsTextDecorator)`
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;
const Title = styled(TagsTextDecorator)`
margin-bottom: 20px;

h1{
    margin-bottom: 0;
}
`
const Text = styled(TagsTextDecorator)``


export default function ExpiriencePage(){
    const text = useText();

    return (
        <Container>
            <Helmet>
                <title>{text('experience.text.title')}</title>
            </Helmet>

            <TextWrapper tag={'html'}>
                <TextContent tag={'body'}>
                    <Title tag={'h1'}>
                        <TitleAnim text={text('experience.text.title')} />
                    </Title>
                    <Text tag="div">
                        <TagsTextDecorator tag="p">{text('experience.text.p1')}</TagsTextDecorator>
                        <TagsTextDecorator tag="p">{text('experience.text.p2')}</TagsTextDecorator>
                    </Text>
                </TextContent>
            </TextWrapper>
            <Experience />
        </Container>
    )
}