import React from "react";
import styled from "styled-components";
import {TitleAnim, Container, TagsTextDecorator, Works} from "../../components";
import useText from "../../hooks/useText.js";
import {Helmet} from "react-helmet";

const ContainerStyled = styled(Container)`
  display: block;
`;
const ContentWrapper = styled(TagsTextDecorator)`
  height: auto;
`;
const Title = styled(TagsTextDecorator)`
  margin-bottom: 20px;

  h1 {
    margin-bottom: 0;
  }
`;
const Content = styled(TagsTextDecorator)``;

export default function WorksPage() {
  const text = useText();

  return (
    <ContainerStyled>
      <Helmet>
        <title>{text("works.text.title")}</title>
      </Helmet>

      <ContentWrapper tag={"html"}>
        <Content tag={"body"}>
          <Title tag={"h1"}>
            <TitleAnim text={text("works.text.title")} />
          </Title>
          <TagsTextDecorator tag={"p"}>
            <p>{text("works.text.p1")}</p>
          </TagsTextDecorator>
          <Works />
        </Content>
      </ContentWrapper>
    </ContainerStyled>
  );
}
